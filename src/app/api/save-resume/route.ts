import { sessionOptions } from "@/app/lib/session";
import { OrType } from "@/app/types";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resumeData = await req.json();
  const cookiesData = await cookies();
  const session = await getIronSession(cookiesData, sessionOptions);

  (session as { data?: OrType }).data = resumeData;
  await session.save();

  return NextResponse.json({ ok: true });
}
