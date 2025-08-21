type ExperienceItem = {
  title: string;
  company: string;
  year: string;
  steps: string[];
};

export type OrType = { about: string; experience: ExperienceItem[] };
