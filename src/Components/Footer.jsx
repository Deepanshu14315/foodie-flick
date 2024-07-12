import React from "react";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="px-6 py-8 w-full  w-full flex flex-wrap items-center justify-center  lg:justify-between">
      <div className="flex  gap-6 ">
        <SlSocialFacebook  size={18} />
        <SlSocialInstagram size={18} />
        <SlSocialGithub size={18} />
        <SlSocialLinkedin size={18} />
      </div>
      <a className="mt-5 text-gray-600" href="/">
        © Deepanshu All rights reserved.
      </a>
    </div>
  );
};

export default Footer;
