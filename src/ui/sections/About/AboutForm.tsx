"use client";

import { portalModalAtom } from "@/app/state";
import { OrType } from "@/app/types";
import InputField from "@/ui/input-group/input-field";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AboutForm({ sessionData }: { sessionData?: OrType }) {
  console.log("🚀 ~ AboutForm ~ sessionData:", sessionData);
  const router = useRouter();

  const setIsModalOpen = useSetAtom(portalModalAtom);

  const [personalInfo, setPersonalInfo] = useState(
    sessionData?.personal || ({} as OrType["personal"])
  );
  console.log("🚀 ~ AboutForm ~ personalInfo:", personalInfo);

  async function saveResume(resumeData: OrType["personal"]) {
    await fetch("/api/save-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...sessionData, personal: resumeData }),
    });

    router.refresh();
  }

  function saveUpdatedText(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    saveResume(personalInfo);
    setIsModalOpen(false);
  }

  function updatePersonalInfo(field: string, value: string) {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <form className="w-full space-y-3">
      <div className="relative flex flex-col gap-2">
        <InputField
          label="Full Name"
          name="name"
          value={personalInfo.name || ""}
          placeholder="Enter your full name here..."
          onChange={(e) => updatePersonalInfo("name", e.target.value)}
        />
        <InputField
          label="Professional Title"
          name="professional-title"
          value={personalInfo.professionalTitle || ""}
          placeholder="e.g. Software Engineer"
          onChange={(e) =>
            updatePersonalInfo("professionalTitle", e.target.value)
          }
        />
        <InputField
          label="Email Address"
          name="email-address"
          type="email"
          value={personalInfo.email || ""}
          placeholder="e.g. name@familyname.com"
          onChange={(e) => updatePersonalInfo("email", e.target.value)}
        />
        <InputField
          label="Phone Number"
          name="phone-number"
          type="phone"
          value={personalInfo.phone || ""}
          placeholder="e.g. +123 456 7890"
          onChange={(e) => updatePersonalInfo("phone", e.target.value)}
        />
        <InputField
          label="GitHub Username"
          name="github-account"
          value={personalInfo.github || ""}
          placeholder="e.g. github.com/username"
          onChange={(e) => updatePersonalInfo("github", e.target.value)}
        />
        <InputField
          label="LinkedIn Profile"
          name="linkedin-account"
          value={personalInfo.linkedin || ""}
          placeholder="e.g. linkedin.com/in/username"
          onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
        />
        <InputField
          label="Location"
          name="location"
          value={personalInfo.location || ""}
          placeholder="e.g. City, Country"
          onChange={(e) => updatePersonalInfo("location", e.target.value)}
        />
        <InputField
          label="About Me"
          name="about-me"
          value={personalInfo.about || ""}
          maxLength={360}
          placeholder="Summarise your career profile here..."
          onChange={(e) => updatePersonalInfo("about", e.target.value)}
        />
      </div>

      <div className="flex justify-end items-center">
        <div className="flex gap-2">
          <button onClick={saveUpdatedText} className="edit-button">
            Save
          </button>
          <button type="button" className="edit-button">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
export default AboutForm;
