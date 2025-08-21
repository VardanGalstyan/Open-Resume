import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { OrType } from "./types";

export const initialState: OrType = {
  about: "This is initial text",
  experience: [
    {
      title: "Tech Lead",
      company: "Google",
      year: "2023 - present",
      steps: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta
        est diam, et blandit ipsum suscipit facilisis. Praesent nec semper
        eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porta est diam, et blandit ipsum suscipit facilisis. Praesent nec
        semper eros. Aliquam quis turpis sed metus.`,
        `Vivamus accumsan purus at urna tincidunt convallis. Sed nisi dolor,
        elementum eget tempus ac, blandit ac mi. Aliquam id tellus ut arcu
        luctus accumsan in at odio`,
        "Morbi condimentum, lorem in pharetra mollis, purus justo sollicitudin dolor, tristique vulputate mi odio sit amet ante.",
      ],
    },
  ],
};

export const portalModalAtom = atom(false);

export const orAtom = atomWithStorage("or", initialState);
