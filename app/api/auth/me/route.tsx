import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  console.log("token =>", token);

  try {
    const decoded = jwt.verify(token, process.env.AUTH0_CLIENT_SECRET);

    return NextResponse.json({ success: true, user: decoded });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid token" },
      { status: 401 },
    );
  }
}
