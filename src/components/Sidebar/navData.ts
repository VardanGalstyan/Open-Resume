import {
  Briefcase,
  ContactIcon,
  Cpu,
  Globe,
  GraduationCap,
  Presentation,
  UserRoundCog,
} from "lucide-react";

export const initialNavigation = [
  { name: "Contact", icon: ContactIcon, value: "contact", current: true },
  { name: "Experience", icon: Briefcase, value: "experience", current: false },
  { name: "Technical Skills", icon: Cpu, value: "tech-skills", current: false },
  { name: "Languages", icon: Globe, value: "languages", current: false },
  {
    name: "Soft Skills",
    icon: UserRoundCog,
    value: "soft-skills",
    current: false,
  },
  {
    name: "Education",
    icon: GraduationCap,
    value: "education",
    current: false,
  },
  { name: "Projects", icon: Presentation, value: "projects", current: false },
];
