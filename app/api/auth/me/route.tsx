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
    // درخواست به /userinfo برای گرفتن اطلاعات کاربر
    const response = await axios.get(
      `https://${process.env.AUTH0_DOMAIN}/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return NextResponse.json({ success: true, user: response.data });
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
