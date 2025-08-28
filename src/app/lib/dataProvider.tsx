"use client";

import { createContext, ReactNode } from "react";
import { OrType } from "../types";

export const DataContext = createContext<OrType>({} as OrType);

export function DataProvider({
  value,
  children,
}: {
  value: OrType;
  children: ReactNode;
}) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
