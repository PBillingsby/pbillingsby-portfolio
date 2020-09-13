import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-center">G'day</h2>
      <div id="about-intro">
        <p>
          My name is Phil. I am a Full-Stack Developer with over 2 years
          experience writing software. I am located in Clark County, Nevada.
          Originally from Australia I relocated to USA in 2017 and found my
          passion for Software Development.
        </p>
        <p>
          After dabbling with Python and teaching myself core computer
          fundamental concepts I enrolled in Flatiron School's Software
          Engineering course. I then discovered that I thoroughly enjoy
          automating anything I possibly can and get immense joy from problem
          solving and creating web applications from scratch.
        </p>
        <p>
          I am a huge fan of the open source community and developers striving
          to expand the industry to make innovative, useful products to better
          the world of tech.
        </p>
      </div>
      <div id="about-skills">
        <h3 className="text-center">SKILLS</h3>
        <div className="row">
          <div className="card m-2 p-3" style={{ width: "17rem" }}>
            <img
              src={require("./images/frontend.png")}
              className="card-img-top rounded"
            />
            <div className="card-body">
              <h4 className="card-title">Front-End</h4>
              <p className="card-text">
                Design and implementation of web pages including Single-Page
                applications
              </p>
              <ul>
                <li>JavaScript - React - Redux</li>
                <li>HTML - CSS - Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="card m-2 p-3" style={{ width: "17rem" }}>
            <img
              src={require("./images/db-logo.png")}
              className="card-img-top rounded"
            />
            <div className="card-body">
              <h4 className="card-title">Back-End</h4>
              <p className="card-text">
                Server side logic, testing, database management, and RESTful
                API.
              </p>
              <h5>
                <strong>Tech</strong>
              </h5>
              <p>Ruby on Rails</p>
              <p>RSpec - SQLite - PostGres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
