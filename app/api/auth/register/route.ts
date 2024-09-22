import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { number, password, name, email } = await request.json();

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

    const { access_token } = tokenResponse.data;

    const createUserResponse = await axios.post(
      `https://${process.env.AUTH0_DOMAIN}/api/v2/users`,
      {
        connection: "Username-Password-Authentication",
        email,
        password,
        user_metadata: {
          location: "us",
          number,
          name,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    // user login process
    const loginResponse = await axios.post(
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

    const loginToken = loginResponse.data.access_token;

    cookies().set("auth_token", loginToken, {
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ success: true });
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
