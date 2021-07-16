import "./style.scss";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typist from "react-typist";

import { LanguageToggle } from "../../components/LanguageToggle";

// import meImg from "../../images/me.jpg";
import ssTutoringHub from "../../images/ss-tutoringhub.png";
import ssCSM from "../../images/ss-csm.png";
import ssS8 from "../../images/ss-s8.png";

const HomeSection = (): JSX.Element => {
  return (
    <section id="home-section" className="container-fluid">
      <LanguageToggle />
      {/* Greeting block */}
      <div className="section-block">
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
      </div>

      {/* Skills Block */}
      <div className="section-block d-none d-md-block">
        {/* Skills Header */}
        <div className="row">
          <div className="col">
            <h3 className="text-center pb-4">My Skills</h3>
          </div>
        </div>
        <div className="row mx-5">
          <div className="col ">
            <h3>
              <FontAwesomeIcon
                icon={"paint-brush"}
                size="1x"
                className="mr-2"
              />
              Frontend Development
            </h3>
          </div>
          <div className="col">
            <h3>
              <FontAwesomeIcon
                icon={"paint-brush"}
                size="1x"
                className="mr-2"
              />
              Backend Development
            </h3>
          </div>
          <div className="col">
            <h3>
              <FontAwesomeIcon
                icon={"paint-brush"}
                size="1x"
                className="mr-2"
              />
              Game Development
            </h3>
          </div>
        </div>
        <div className="row mx-5">
          <div className="col">
            <p>
              Despite most of my experience as a fullstack developer, I am
              strongest at frontend UI and UX design. No matter how
              well-developed the rest of a product is, what ultimately matters
              to the client matters is usability. As a developer from multiple
              agile teams, I believe that involving the user in regular feedback
              is essential to product success, from design to implementation and
              to production and testing.
            </p>
          </div>
          <div className="col">
            <p>
              These days, backend development can be done in so many languages
              with so many different frameworks, but I find myself circling back
              to the same ones frequently due to extensive community support and
              documentation.
            </p>
          </div>
          <div className="col">
            <p>
              I have been a gamer for as long as I can remember. From Nintendo,
              to Playstation, to Xbox, and even PC, I have played games of many
              genres which inspired me to try and create some of my own. Through
              incredible, free software such as Unity and Blender, I have been
              able to strengthen my skills in game design and development. While
              I do not consider myself an artist, I assert that I have a solid
              understanding of the moving parts involved in the game development
              process.
            </p>
          </div>
        </div>
        <div className="row mx-5">
          <div className="col">
            <h4>Tools</h4>
            <ul>
              <li>NodeJS</li>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Adobe Dreamweaver</li>
              <li></li>
            </ul>
          </div>
          <div className="col">
            <h4>Tools</h4>
            <ul>
              <li>NodeJS</li>
              <li>Postman</li>
              <li>MySQL</li>
              <li>SQLite</li>
              <li>Postgres</li>
            </ul>
          </div>
          <div className="col">
            <h4>Tools</h4>
            <ul>
              <li>Unity</li>
              <li>Blender</li>
              <li>Audacity</li>
              <li>Ultimate Unwrap 3D</li>
              <li>Jetbrains Rider</li>
            </ul>
          </div>
        </div>
        <div className="row mx-5">
          <div className="col">
            <h4>Frameworks &amp; Libraries</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Zend (3)</li>
              <li>jQuery</li>
              <li>Bootstrap (3, 4, 5)</li>
            </ul>
          </div>
          <div className="col">
            <h4>Frameworks &amp; Libraries</h4>
            <ul>
              <li>Express.js</li>
              <li>Omeka</li>
              <li>Django</li>
              <li>Laravel</li>
              <li>Spring</li>
            </ul>
          </div>
          <div className="col">
            <h4>Frameworks &amp; Libraries</h4>
            <ul>
              <li>Mirror Networking</li>
              <li>Photon Unity Networking</li>
              <li>SteamVR Unity Toolkit</li>
              <li>TextMesh Pro</li>
              <li>Vimeo Unity SDK</li>
            </ul>
          </div>
        </div>
        <div className="row mx-5">
          <div className="col">
            <h4>Languages</h4>
            <ul>
              <li>HTML (xhtml, html5)</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>CSS (2, 3)</li>
              <li>SASS/SCSS/LESS</li>
            </ul>
          </div>
          <div className="col">
            <h4>Languages</h4>
            <ul>
              <li>Python</li>
              <li>PHP</li>
              <li>Typescript</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </div>
          <div className="col">
            <h4>Languages</h4>
            <ul>
              <li>C#</li>
              <li>Javascript</li>
              <li>UXML, USS (Unity markup and styles)</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Experience container */}
      <div className="container">
        <div className="section-block">
          {/* Experience header */}
          <div className="row">
            <div className="col">
              <h3 className="text-center pb-4">Professional Experience</h3>
            </div>
          </div>
          {/* Jumbo */}
          <div className="row">
            <div className="col">
              <Job
                jobTitle="Junior Fullstack Developer"
                companyName="Technergetics LLC"
                companyURL="https://technergetics.com/"
                location="Utica/Rome, NY"
                startDate="July 2020"
                duties={[
                  "Contributed to regular feature development, bug fixes, and planning on a bi-weekly sprint basis.",
                  "Participated in all steps of the Software Development Cycle from planning to CTF & deployment using agile principles.",
                  "Communicated software findings, test results, and other information at technical and non-technical levels.",
                  "Improved user design and experience of existing applications.",
                  "Regulary updated developer and user documentation.",
                ]}
              />
              <Job
                jobTitle="Fullstack Developer"
                companyName="Super 8 Festivals"
                companyURL="https://super8festivals.org/"
                location="Plattsburgh, NY"
                startDate="October 2019"
                duties={[
                  "Build and maintain custom Omeka plugin which handles moste site functionality",
                  "Design and implement simple but attractive frontend design using modern technologies which scale",
                  "Minimize site bandwidth by offloading large resources (e.g. PDF) to 3rd party services",
                  "Attend weekly meetings to review and discuss project goals and progress",
                ]}
              />
              <Job
                jobTitle="Project Manager"
                companyName="Coding Hub"
                companyURL="https://www.coding-hub.com/"
                location="Plattsburgh, NY"
                startDate="January 2019"
                endDate="April 2020"
                duties={[
                  "Managed a team of 10 multi-disciplinary software engineers of ranging skillsets",
                  "Acted as the technical project manager with overall responsibility for the management, performance and completion of new product development projects",
                  "Developed documentation, software work plans, and kept documentation up-to-date",
                  "Managed multiple projects simultaneously and assisted in estimating completion dates and resource allocation",
                  "Demonstrated proficiency in decision and issue Management, Software Engineering Management, and the agile Software Engineering process",
                  "Managed schedule, costs, quality, issue & risk management, communications, and other project management functions",
                  "Provided day-to-day guidance and oversight of team activities; actively worked to recognize performance",
                  "Delivered critical software release on time and under budget",
                  "Utilized Unified Modeling Language (UML) to create requirements and preliminary design",
                ]}
              />
              <Job
                jobTitle="Classroom Support Technician"
                companyName="SUNY Plattsburgh"
                companyURL="https://www.plattsburgh.edu/"
                location="Plattsburgh, NY"
                startDate="December 2016"
                endDate="April 2020"
                duties={[
                  "Responded to queries on the phone, via email, in person, or through remote access",
                  "Offered technical assistance on the delivery, configuration, set up, maintenance, and troubleshooting of computer systems, hardware, and software.",
                  "Trained computer and audio/video equipment users",
                  "Training other staff on troubleshooting and diagnosing problems",
                  "Wrote and edited training materials",
                  "Installed computer peripherals for users",
                  "Followed up with customers to ensure issue had been resolved",
                  "Tracked and managed inventories via physical inspection and spreadsheets",
                  "Routinely checked and managed all classrooms on campus equipped with audio/visual technology",
                  "Assisted in classroom equipment installations and upgrades",
                ]}
              />
              <Job
                jobTitle="Coordinator of International Student Orientation "
                companyName="SUNY Plattsburgh"
                companyURL="https://www.plattsburgh.edu/"
                location="Plattsburgh, NY"
                startDate="April 2018"
                endDate="September 2019"
                duties={[
                  "Assisted in administering orientation programs for new international students entering the university",
                  "Created and managed orientation groups which consisted of a 2:20 orientation-leader:student ratio",
                  "Maintained accurate scheduling process and student staffing for the entirety of the orientation",
                  "Worked with academic departments and other university offices to coordinate various informative sessions and activities",
                  "Arranged and attended meetings with professional and student staff",
                  "Conducted interviews with potential new staff",
                  "Coordinated bonding and leadership activities",
                  "Facilitated training, ice-breakers and lead team-building activities",
                  "Served as a role model for new students by displaying the responsibility and maturity of a continuing student",
                  "Created an inclusive and welcoming community for all new students",
                ]}
              />
              <Job
                jobTitle="Library Assistant"
                companyName="Keene Valley Library"
                companyURL="https://www.keenevalleylibrary.org/"
                location="Keene Valley, NY"
                startDate="October 2015"
                endDate="August 2016"
                duties={[
                  "Assisted in the planning, organization, and coordination of library activities",
                  "Assisted in circulation work, including preparing new materials, checking out and checking in materials, registration of patrons, shelving and maintaining collection",
                  "Prepared displays and maintained pleasant library environment",
                  "Kept records for circulation, library use, fines, reference, and other such records as required",
                  "Answered phone and gave out general information about the library",
                  "Served as stand-in IT for public access computers and other technology",
                  "Handled and tracked patron donations",
                  "Served as stand-in Public Relations for social media accounts",
                ]}
              />
              <Job
                jobTitle="Plugin Developer"
                companyName="mccoding.us"
                companyURL="https://www.mccoding.us"
                location="Remote"
                startDate="June 2012"
                endDate="August 2014"
                duties={[
                  "Communicated and worked with clients who used Java-based plugins for Bukkit Minecraft Severs",
                  "Wrote and ran unit tests using junit",
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects block */}
      <div className="container">
        <div className="section-block">
          {/* Experience header */}
          <div className="row">
            <div className="col">
              <h3 className="text-center pb-4">Projects</h3>
            </div>
          </div>
          {/* Jumbo */}
          <div className="row">
            <div className="col">
              <Project
                projectTitle="Super8Festivals"
                projectDescription="Super8Festivals is a book written by Isabel Arredondo. This Omeka-based website serves supplemental material and is a resource for educational use."
                projectTags={[
                  "php",
                  "omeka",
                  "js",
                  "jquery",
                  "html",
                  "css",
                  "sass",
                  "mysql",
                ]}
                projectSource="https://github.com/Super8Festivals"
                projectDemo="https://super8festivals.org/"
                projectScreenshot={ssS8}
              />
              <Project
                projectTitle="VRU"
                projectDescription="VRU is a Unity port of the once-famous VRMMO 'vSide' (formerly known as The PCD Lounge). All art assets are ported, modified, or completely recreated from the original game. Due to copyright concerns, this is just a proof-of-concept project."
                projectTags={[
                  "unity",
                  "blender",
                  "c#",
                  "mysql",
                  "mirror",
                  "python",
                ]}
                projectScreenshot={"https://i.imgur.com/DDXA8S2.png"}
                projectDemo="https://www.youtube.com/watch?v=zwuMzFyFwQs"
              />
              <Project
                projectTitle="Tutoring Hub"
                projectDescription="Tutoring Hub is a web platform which allows students to find the best tutor for them."
                projectTags={[
                  "node",
                  "yarn",
                  "react",
                  "express",
                  "typescript",
                  "monorepo",
                  "mongodb",
                  "scss",
                ]}
                projectSource="https://github.com/coding-hub-org/tutoring-hub"
                projectScreenshot={ssTutoringHub}
              />
              <Project
                projectTitle="Classroom Support Manual"
                projectDescription="The Classroom Support Manual is a standalone application which assists in troubleshooting and training for Classroom and Customer Support Services at SUNY Plattsburgh."
                projectTags={[
                  "node",
                  "yarn",
                  "react",
                  "express",
                  "typescript",
                  "monorepo",
                  "multiplatform",
                  "electron",
                  "scss",
                ]}
                projectSource="https://github.com/MichaelGatesDev/ccss-support-manual"
                projectDemo="https://github.com/MichaelGatesDev/ccss-support-manual/releases/latest"
                projectScreenshot={ssCSM}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

const Job = (props: {
  jobTitle: string;
  companyName: string;
  companyURL: string;
  location: string;
  startDate: string;
  endDate?: string;
  duties: string[];
}): JSX.Element => {
  return (
    <div className="jumbotron py-4">
      <p>
        <span style={{ fontWeight: "bold" }}>{props.jobTitle}</span> at{" "}
        <span>
          <a href={props.companyURL}>{props.companyName}</a>
        </span>
        <span className="text-muted float-right">{props.location}</span>
      </p>
      <p>
        <span>
          {props.startDate} - {props.endDate ?? "Present"}
        </span>
      </p>
      <div>
        <span style={{ fontWeight: "bold" }}>Responsibilities</span>
        <ul className="m-0">
          {props.duties.map((duty, idx) => {
            return <li key={idx}>{duty}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const Project = (props: {
  projectTitle: string;
  projectDescription: string;
  projectTags: string[];
  projectSource?: string;
  projectDemo?: string;
  projectScreenshot: string;
}): JSX.Element => {
  return (
    <div className="project jumbotron py-4">
      <div className="row">
        <div className="col">
          <p style={{ fontWeight: "bold" }}>{props.projectTitle}</p>
          <p>{props.projectDescription}</p>
          <ul className="list-unstyled list-inline">
            {props.projectSource !== undefined && (
              <li className="list-inline-item">
                <a
                  href={props.projectSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
            )}
            {props.projectDemo !== undefined && (
              <li className="list-inline-item">
                <a
                  href={props.projectDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <FontAwesomeIcon icon={["fas", "globe"]} />
                </a>
              </li>
            )}
          </ul>
          <ul className="list-unstyled list-inline">
            {props.projectTags.map((tech, idx) => {
              return (
                <li key={idx} className="list-inline-item">
                  <span className="badge badge-primary">{tech}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <a
            href={props.projectScreenshot}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.projectScreenshot}
              alt="Project Screenshot"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
