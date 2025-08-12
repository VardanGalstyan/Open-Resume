"use client";

import { createStore, Provider } from "jotai";
import { ReactNode } from "react";

const store = createStore();

export default function JotaiProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
