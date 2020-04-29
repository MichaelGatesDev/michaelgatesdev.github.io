import "./style.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = (): JSX.Element => {
  return (
    <footer className="Footer border-top">
      <div className="footer-copyright text-center py-3">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="https://github.com/MichaelGatesDev/">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/michaelgatesdev/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
          </li>
        </ul>
        <p className="mb-0">© {new Date().getFullYear()} Michael Gates</p>
      </div>
    </footer>
  );
};
