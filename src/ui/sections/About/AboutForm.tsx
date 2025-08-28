"use client";

import { DataContext } from "@/app/lib/dataProvider";
import { portalModalAtom } from "@/app/state";
import { OrType } from "@/app/types";
import InputField from "@/ui/input-group/input-field";
import TextLimit from "@/ui/TextLimit";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

function AboutForm() {
  const router = useRouter();
  const resumeData = useContext(DataContext);

  const setIsModalOpen = useSetAtom(portalModalAtom);

  const [personalInfo, setPersonalInfo] = useState(
    resumeData.personal || ({} as OrType["personal"])
  );

  async function saveResume(resumeData: OrType["personal"]) {
    await fetch("/api/save-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...resumeData, personal: personalInfo }),
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
        <div className="input-wrapper-style">
          <label
            htmlFor="about-me"
            className="block text-xs font-medium text-gray-900 dark:text-gray-200"
          >
            About Me
          </label>
          <textarea
            placeholder="Summarise your career profile here..."
            onChange={(e) => updatePersonalInfo("about", e.target.value)}
            maxLength={360}
            rows={6}
            value={personalInfo.about}
            className="input-style"
          />
          <div className="absolute bottom-1.5 right-6 text-xs text-gray-400 dark:text-gray-500">
            <TextLimit
              text={personalInfo.about?.toString() || ""}
              limit={360}
            />
          </div>
        </div>
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
