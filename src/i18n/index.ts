import { common } from "./dictionaries/common";
import { home } from "./dictionaries/home";
import { about } from "./dictionaries/about";
import { projects } from "./dictionaries/projects";
import { gridweave } from "./dictionaries/gridweave";
import { notes } from "./dictionaries/notes";
import { labs } from "./dictionaries/labs";

export const locales = ["en", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];

export function normalizeLocale(x: string | undefined): Locale {
  return (locales as readonly string[]).includes(x ?? "") ? (x as Locale) : "en";
}

export function t(locale: Locale) {
  return {
    common: common[locale],
    home: home[locale],
    about: about[locale],
    projects: projects[locale],
    gridweave: gridweave[locale],
    notes: notes[locale],
    labs: labs[locale],
  };
}
