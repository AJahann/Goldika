import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import axios from "axios";

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

    const tokenResponse = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID_M2M,
        client_secret: process.env.AUTH0_CLIENT_SECRET_M2M,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
      },
      {
        headers: { "content-type": "application/json" },
      },
    );

    const userInfoResponse = await axios.get(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.data.access_token}`,
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
