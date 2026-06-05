const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

function loadEnvFile(envPath) {
  try {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split(/\r?\n/);
    const env = {};
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      let val = trimmed.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
    return env;
  } catch (err) {
    return {};
  }
}

const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env');
const localEnvPath = path.join(projectRoot, '.env.local');

const env = Object.assign({}, loadEnvFile(envPath), loadEnvFile(localEnvPath), process.env);

const MONGODB_URI = env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI not found in .env or environment');
  process.exit(1);
}

const CandidateSchema = new mongoose.Schema({}, { strict: false });
const RecruiterSchema = new mongoose.Schema({}, { strict: false });

const Candidate = mongoose.models.Candidate || mongoose.model('Candidate', CandidateSchema, 'candidates');
const Recruiter = mongoose.models.Recruiter || mongoose.model('Recruiter', RecruiterSchema, 'recruiters');

async function find(email) {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: 'smarthire' });

    const candidate = await Candidate.findOne({ email });
    const recruiter = await Recruiter.findOne({ email });

    if (candidate) {
      console.log('Found candidate:');
      console.log(JSON.stringify({
        id: candidate._id,
        email: candidate.email,
        passwordHash: candidate.password,
        isBlocked: candidate.isBlocked,
        isVerified: candidate.isVerified
      }, null, 2));
    } else if (recruiter) {
      console.log('Found recruiter:');
      console.log(JSON.stringify({
        id: recruiter._id,
        email: recruiter.email,
        passwordHash: recruiter.password,
        isBlocked: recruiter.isBlocked,
        isVerified: recruiter.isVerified
      }, null, 2));
    } else {
      console.log('No user found with email:', email);
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

const email = process.argv[2];
if (!email) {
  console.error('Usage: node scripts/findUser.js <email>');
  process.exit(1);
}

find(email).then(() => process.exit(0));
