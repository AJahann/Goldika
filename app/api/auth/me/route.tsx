import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";
import getAccessToken from "@/shared/services/getAccessToken";

export async function GET() {
  console.time("fetching user info");
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
    console.timeEnd("fetching user info");

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
