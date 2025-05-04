/* eslint-disable @next/next/no-img-element */

import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex flex-col items-end dark:text-light text-prime justify-start gap-2 py-2 w-full">
      <div className="flex items-center gap-2">
        <p className="text-sm">+49 176 70490724</p>
        <div className="bg-sec p-1 rounded-sm">
          <FaPhoneAlt className="icon text-light" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a className="text-sm" href="mailto:vardan.galstjan@gmail.com">
          vardan.galstjan@gmail.com
        </a>
        <div className="bg-sec p-1 rounded-sm">
          <IoMdMail className="icon text-light" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Kehl, Germany</span>
        <div className="bg-sec p-1 rounded-sm">
          <FaLocationDot className="icon text-light" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">linkedin.com/in/vardangalstian/</span>
        <div className="bg-sec p-1 rounded-sm">
          <FaLinkedin className="icon text-light" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">github.com/VardanGalstyan</span>
        <div className="bg-sec p-1 rounded-sm">
          <FaGithub className="icon text-light" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
