import { NextResponse } from "next/server";

import connectDB from "@/lib/db";
import CandidateProfile from "@/models/CandidateProfile";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        console.log(
            "BODY RECEIVED:",
            body
        );

        const {
            candidateId,
            phone,
            location,
            skills,
            education,
            experience,
            linkedin,
            github,
            portfolio,
            bio,
            resumeUrl,
            resumeFileName,
        } = body;

        console.log(
            "candidateId =",
            candidateId
        );

        if (!candidateId) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "candidateId is required",
                },
                { status: 400 }
            );
        }

        let profile =
            await CandidateProfile.findOne({
                candidateId,
            });

        if (profile) {
            profile.phone = phone;
            profile.location = location;
            profile.skills = skills;
            profile.education = education;
            profile.experience = experience;
            profile.linkedin = linkedin;
            profile.github = github;
            profile.portfolio = portfolio;
            profile.bio = bio;
            profile.resumeUrl = resumeUrl;
            profile.resumeFileName = resumeFileName;

            await profile.save();
        } else {
            profile =
                await CandidateProfile.create({
                    candidateId,
                    phone,
                    location,
                    skills,
                    education,
                    experience,
                    linkedin,
                    github,
                    portfolio,
                    bio,
                    resumeUrl,
                    resumeFileName,
                });
        }

        return NextResponse.json({
            success: true,
            profile,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } =
            new URL(req.url);

        const candidateId =
            searchParams.get(
                "candidateId"
            );

        const profile =
            await CandidateProfile.findOne({
                candidateId,
            });

        return NextResponse.json({
            success: true,
            profile,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
            },
            { status: 500 }
        );
    }
}