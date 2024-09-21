import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { number, password, name } = await request.json();

    const tokenResponse = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: process.env.AUTH0_CLIENT_ID_M2M,
        client_secret: process.env.AUTH0_CLIENT_SECRET_M2M,
        audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
        user_metadata: {
          location: "us",
          name,
        },
      },
      {
        headers: { "content-type": "application/json" },
      },
    );

    const { access_token } = tokenResponse.data;

    const createUserResponse = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
      {
        connection: "Username-Password-Authentication",
        email: number,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const jwtToken = createUserResponse.data.access_token;
    cookies().set("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return NextResponse.json({ success: true, user: createUserResponse.data });
  } catch (error: any) {
    console.error("Auth0 error:", error.response?.data || error.message);
    return NextResponse.json(
      {
        success: false,
        error: error.response?.data || "User registration failed",
      },
      { status: 400 },
    );
  }
}
