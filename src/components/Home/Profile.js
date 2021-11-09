import React from "react";
//import { FaGithub } from "react-icons/fa";
//import { FaGooglePlus } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import "../../App.css";



export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/rehanmahmood">
                <i className="fa fa-github-square"></i>
                
              </a>
              <a href="https://myaccount.google.com/profile">
                <i className="fa fa-google-plus-square"></i>
                
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span>
              <h1>
                Hello, I'm <span className="myname">Rehan</span>
              </h1>
            </span>
          </div>
          <div className="profile-details-roll">
            <span className="primary-text">
              {" "}
              <h1>
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Reactjs Fluent")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Python Enthusiast")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Machine Learning")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("API Knowledgeable")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Crypto Advocate")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("SQL")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Avid Reader")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Cinephile")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Writer")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Painter")
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                />
              </h1>
              <span className="profile-roll-tag">
                <h3>Developer - Artist</h3>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a
              href="Rehan_Mahmood_Resume.pdf"
              download="Rehan_Mahmood_Resume.pdf"
            >
              <button className="resume-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-bgd">

          </div>
        </div>
      </div>
    </div>
  );
}
