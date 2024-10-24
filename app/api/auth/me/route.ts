/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";
import getAccessToken from "@/shared/services/getAccessToken";

// GET: دریافت اطلاعات کاربر
export async function GET() {
  const token = cookies().get("auth_token")?.value;

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Unauthorized: No token found" },
      { status: 401 },
    );
  }

  try {
    const publicKey = process.env.AUTH0_PUBLIC_KEY;

    const payload = jwt.verify(token, publicKey!, {
      algorithms: ["RS256"],
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      audience: process.env.AUTH0_AUDIENCE,
    });

    const userId = payload.sub;

    const accessToken = await getAccessToken();

    const userInfoResponse = await axios.get(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return NextResponse.json({
      success: true,
      userInfoResponse: userInfoResponse.data,
    });
  } catch (error: any) {
    console.error(
      "Error fetching user info",
      error.response?.data || error.message,
    );

    return NextResponse.json(
      { success: false, error: error.response?.data || "Invalid token" },
      { status: 401 },
    );
  }
}

// POST: ویرایش اطلاعات کاربر
export async function POST(request: Request) {
  const token = cookies().get("auth_token")?.value;

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Unauthorized: No token found" },
      { status: 401 },
    );
  }

  try {
    const data = await request.json();
    const userId = data.userId;
    console.log(data);

    const accessToken = await getAccessToken(); // گرفتن Access Token برای API

    const updateUserResponse = await axios.patch(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`,
      {
        user_metadata: data.user_metadata,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return NextResponse.json({
      success: true,
      userInfoResponse: updateUserResponse.data,
    });
  } catch (error: any) {
    console.error(
      "Error updating user info",
      error.response?.data || error.message,
    );

    return NextResponse.json(
      { success: false, error: error.response?.data || "Update failed" },
      { status: 400 },
    );
  }
}
