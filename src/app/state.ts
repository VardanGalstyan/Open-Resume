import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const portalModalAtom = atom(false);

export const orAtom = atomWithStorage("or", {
  about: " Summarise your career profile here lorem ipsum dolor sit amet...",
});
