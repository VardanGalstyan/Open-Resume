type ExperienceItem = {
  title: string;
  company: string;
  year: string;
  steps: string[];
};

type PersonalItemType = {
  name: string;
  professionalTitle: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  about: string;
};

export type OrType = {
  personal: PersonalItemType;
  experience: ExperienceItem[];
};
