import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions } from "./session";
import { OrType } from "../types";

export async function getSession(): Promise<{ data?: OrType }> {
  const cookieStore = await cookies();
  return getIronSession(cookieStore, sessionOptions);
} 
