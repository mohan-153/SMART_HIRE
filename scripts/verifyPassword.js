const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

async function verify(email, password) {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: 'smarthire' });

    const user = await Candidate.findOne({ email }) || await Recruiter.findOne({ email });
    if (!user) {
      console.log('No user found with email:', email);
      await mongoose.disconnect();
      process.exit(0);
    }

    const match = await bcrypt.compare(password, user.password);
    console.log('Password match for', email, ':', match);

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

const email = process.argv[2];
const password = process.argv[3];
if (!email || !password) {
  console.error('Usage: node scripts/verifyPassword.js <email> <password>');
  process.exit(1);
}

verify(email, password).then(() => process.exit(0));
