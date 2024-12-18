/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/auth/login/route.ts
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        grant_type: "password",
        username: email,
        password: password,
        audience: process.env.AUTH0_AUDIENCE,
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        scope: "openid profile email",
      },
    );

    const { access_token } = response.data;

    (await cookies()).set("auth_token", access_token, {
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Auth0 Login error:", error.response?.data || error.message);
    return NextResponse.json(
      { success: false, error: error.response?.data || "Invalid credentials" },
      { status: 400 },
    );
  }
}
