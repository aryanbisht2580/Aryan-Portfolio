import React from "react";
import NavBarOneIcon from "./IconContainer";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import IconContainer from "./IconContainer";

function NavbarIcons() {
  return (
    <div className="flex flex-row">
      <IconContainer dl={.25} link={"https://www.linkedin.com/in/aryan-bisht-116417211/"}>
        <FaLinkedinIn size={20} />
      </IconContainer>
      <IconContainer dl={.4} link={"https://github.com/aryanbisht2580?tab=repositories"}>
        <FaGithub size={20} />
      </IconContainer>
      <IconContainer dl={0.55} link={"https://leetcode.com/u/aryanbisht2580/"}>
        <SiLeetcode size={20} />
      </IconContainer>
    </div>
  );
}

export default NavbarIcons;
