import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import "./style.scss";

library.add(fab, fas);

export const NavbarTop = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="NavbarTop">
        <nav className="navbar navbar-expand navbar-light">
          <a className="navbar-brand" href="#">
            <h1>Michael Gates</h1>
            <p>Fullstack Developer</p>
          </a>
          <div className="collapse navbar-collapse">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavbarItemIcon
                  url="https://github.com/MichaelGatesDev/"
                  icon={["fab", "github"]}
                  iconSize="2x"
                />
              </li>
              <li className="nav-item">
                <NavbarItemIcon
                  url="https://www.linkedin.com/in/michaelgatesdev/"
                  icon={["fab", "linkedin"]}
                  iconSize="2x"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

type FontAwesomeIconSize =
  | "2x"
  | "xs"
  | "lg"
  | "sm"
  | "1x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x"
  | undefined;
const NavbarItemIcon = (props: {
  url: string;
  icon: IconProp;
  iconSize: FontAwesomeIconSize;
}): JSX.Element => {
  return (
    <a
      className="nav-link"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
    </a>
  );
};
