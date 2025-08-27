"use client";

import { portalModalAtom } from "@/app/state";
import { OrType } from "@/app/types";
import InputField from "@/ui/input-group/input-field";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AboutForm({ sessionData }: { sessionData?: OrType }) {
  const router = useRouter();

  const setIsModalOpen = useSetAtom(portalModalAtom);

  const [aboutText, setAboutText] = useState(sessionData?.about || "");

  async function saveResume(resumeData: string) {
    await fetch("/api/save-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...sessionData, about: resumeData }),
    });

    router.refresh();
  }

  function saveUpdatedText(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    saveResume(aboutText);
    setIsModalOpen(false);
  }

  return (
    <form className="w-full space-y-3">
      <div className="relative flex flex-col gap-2">
        <InputField
          label="Full Name"
          name="name"
          value={aboutText}
          placeholder="Enter your full name here..."
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="Professional Title"
          name="professional-title"
          value={aboutText}
          placeholder="e.g. Software Engineer"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="Email Address"
          name="email-address"
          type="email"
          value={aboutText}
          placeholder="e.g. name@familyname.com"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="Phone Number"
          name="phone-number"
          type="phone"
          value={"phone"}
          placeholder="e.g. +123 456 7890"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="GitHub Username"
          name="github-account"
          value={aboutText}
          placeholder="e.g. github.com/username"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="LinkedIn Profile"
          name="linkedin-account"
          value={aboutText}
          placeholder="e.g. linkedin.com/in/username"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="Professional Title"
          name="professional-title"
          value={aboutText}
          placeholder="e.g. Software Engineer"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="Location"
          name="location"
          value={aboutText}
          placeholder="e.g. City, Country"
          onChange={(e) => setAboutText(e.target.value)}
        />
        <InputField
          label="About Me"
          name="about-me"
          value={aboutText}
          maxLength={360}
          placeholder="Summarise your career profile here..."
          onChange={(e) => setAboutText(e.target.value)}
        />
      </div>

      <div className="flex justify-end items-center">
        <div className="flex gap-2">
          <button
            type="submit"
            onClick={saveUpdatedText}
            disabled={aboutText.length === 0}
            className="edit-button"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setAboutText(sessionData?.about || "")}
            className="edit-button"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
export default AboutForm;
