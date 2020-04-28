import React from "react";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typist from "react-typist";

import "./style.scss";
import plattsburghLogo from "../../images/plattsburgh-logo.jpg";
import super8festivalsLogo from "../../images/super8festivals-logo.png";
import { motion } from "framer-motion";

library.add(fab, fas);

const HomeSection = (): JSX.Element => {
  return (
    <section id="" className="container-fluid">
      {/* Greeting */}
      <div className="row">
        <div className="col">
          <div className="greeting text-center">
            <Typist cursor={{ show: false }}>
              <h2 className="py-2">
                {/* Hi  */}
                <span>Hi there!</span>
                <Typist.Delay ms={500} />
                {/* Name */}
                &nbsp;
                <span>
                  I&apos;m{" "}
                  <span style={{ borderBottom: "3px solid orange" }}>
                    Michael
                  </span>
                  .
                </span>
              </h2>
            </Typist>
          </div>
        </div>
      </div>

      {/* Skills Header */}
      <div className="row">
        <div className="col">
          <h3 className="text-center pb-4">My Skills</h3>
        </div>
      </div>
      {/* Skills Row */}
      <div className="row">
        {/* Frontend Dev */}
        <SkillColumn
          icon="code"
          header="Frontend"
          briefing={`
When I began my first programming business in 2014, I quickly fell in love with web technologies because they are intuitive. 
Since then, I have branched out to various engines and frameworks.
`}
          tools={["Node", "React", "Redux", "Zend", "jQuery"]}
          languages={["Javascript", "Typescript", "HTML", "CSS", "SASS/SCSS"]}
        />
        {/* Backend Dev */}
        <SkillColumn
          icon="server"
          header="Backend"
          briefing={`
Static websites and applications are cool to look at, but the real magic happens when connected to a strong and stable backend.
`}
          tools={["Node", "Omeka", "MySQL"]}
          languages={["Javascript", "Typescript", "Java", "C#", "Python"]}
        />
        {/* Software Dev */}
        <SkillColumn
          icon="compact-disc"
          header="Software"
          briefing={`
I often find myself writing a 'quick tool' to automate mundane processes, but it grows and evolves into something bigger.
From a Python script with a dozen lines to full-fledged Java application with a GUI.
`}
          tools={[
            "Jetbrains suite (e.g. IntelliJ, PHPStorm, Rider)",
            "Travis CI",
            "MySQL",
          ]}
          languages={["Java", "C#", "Python"]}
        />
        {/* Game Dev */}
        <SkillColumn
          icon="gamepad"
          header="Games"
          briefing={`
I have had an interest for game development since I was a kid.
Shortly after I began writing mods for Minecraft, I moved into Unity to start hacking away at my own projects.
`}
          tools={["Unity", "Node.js (for RESTful backend)", "MySQL", "Blender"]}
          languages={["C#"]}
        />
      </div>

      {/* Experience header */}
      <div className="row">
        <div className="col">
          <h3 className="text-center pb-4">Professional Experience</h3>
        </div>
      </div>
      {/* Experience */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Card Deck */}
          <div className="card-deck">
            <ExperienceCard
              logo={super8festivalsLogo}
              logoAlt="Super8Festivals.org"
              cardTitle="Fullstack Developer"
              cardDescription=""
              cardFooter="October 2019 - Present"
              cardUrl="https://super8festivals.org/"
            />
            <ExperienceCard
              logo={plattsburghLogo}
              logoAlt="plattsburgh.edu"
              cardTitle="Classroom &amp; Customer Support Services"
              cardDescription=""
              cardFooter="August 2016 - May 2020"
              cardUrl="https://plattsburgh.edu/"
            />
          </div>
          {/* End Card deck */}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

const SkillColumn = (props: {
  icon: IconProp;
  header: string;
  briefing: JSX.Element | string;
  tools: (JSX.Element | string)[];
  languages: (JSX.Element | string)[];
}): JSX.Element => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      {/* Icon */}
      <div className="row">
        <div className="col">
          <p className="m-0 py-3">
            <FontAwesomeIcon icon={props.icon} size="3x" />
          </p>
        </div>
      </div>
      {/* Header */}
      <div className="row">
        <div className="col">
          <h4>{props.header}</h4>
        </div>
      </div>
      {/* Briefing */}
      <div className="row">
        <div className="col">{props.briefing}</div>
      </div>
      {/* Tools */}
      <div className="row">
        <div className="col">
          <h5 className="py-2">Tools</h5>
          <ul>
            {props.tools.map((tool, idx) => {
              return <li key={idx}>{tool}</li>;
            })}
          </ul>
        </div>
      </div>
      {/* Langs */}
      <div className="row">
        <div className="col">
          <h5 className="py-2">Languages</h5>
          <ul>
            {props.languages.map((lang, idx) => {
              return <li key={idx}>{lang}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = (props: {
  logo: string;
  logoAlt: string;
  cardTitle: string;
  cardDescription: string;
  cardFooter: string;
  cardUrl?: string;
}): JSX.Element => {
  return (
    <div className="experience-card">
      <div className="card">
        <img src={props.logo} className="card-img-top" alt={props.logoAlt} />
        <div className="card-body m-0 p-0">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardDescription}</p>
          <p className="card-text">
            <small className="text-muted">{props.cardFooter}</small>
          </p>
        </div>
        {props.cardUrl !== undefined && (
          <a
            href={props.cardUrl}
            className="stretched-link"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        )}
      </div>
    </div>
  );
};
