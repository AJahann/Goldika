import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { phoneNumber, password } = await request.json();

    const response = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        grant_type: "password",
        username: phoneNumber,
        password: password,
        audience: process.env.AUTH0_AUDIENCE,
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
      },
    );

    const { access_token, id_token } = response.data;
    cookies().set("token", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return NextResponse.json({ success: true, access_token, id_token });
  } catch (error: any) {
    console.error("Auth0 error:", error.response?.data || error.message);
    return NextResponse.json(
      { success: false, error: error.response?.data || "Invalid credentials" },
      { status: 400 },
    );
  }
}
