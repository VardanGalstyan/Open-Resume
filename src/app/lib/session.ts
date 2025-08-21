// lib/session.js
import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD ?? "",
  cookieName: "or-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
