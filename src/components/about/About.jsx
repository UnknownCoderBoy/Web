import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import cv from "../../assets/img/cv.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const About = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal infos
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator mt-1" />

        {/* Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Education
            </h3>
          </div>
          <div className="col-12 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Education Ends */}
      </div>
    </section>
  );
};

export default About;
