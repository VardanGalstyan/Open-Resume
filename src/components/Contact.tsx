/* eslint-disable @next/next/no-img-element */

const Contact = () => {
  return (
    <div className="flex items-start text-secondary justify-evenly gap-2 border-y-[1px] border-gray-600 py-2 w-full">
      <div className="flex items-center gap-2">
        <img
          src="https://img.icons8.com/ios-filled/50/a4b3cd/phone.png"
          alt="Gmail Icon"
          className="w-5 h-5"
        />
        <p>+49 176 70490724</p>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="https://img.icons8.com/ios-filled/50/a4b3cd/gmail-new.png"
          alt="Gmail Icon"
          className="w-5 h-5"
        />
        <a href="mailto:vardan.galstjan@gmail.com">vardan.galstjan@gmail.com</a>
      </div>
      {/* Social Media & Github */}
      <div className="flex items-center gap-2">
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/a4b3cd/linkedin.png"
            alt="Gmail Icon"
            className="w-5 h-5"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/ios-filled/50/a4b3cd/github.png"
            alt="Gmail Icon"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
