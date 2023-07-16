import React from "react";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

const Experience = () => {
  return (
    <section className="main-content ">
      <div className="container">
        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience
            </h3>
          </div>
          <div className="col-12 m-15px-tb">
            <div className="resume-box">
              <WorkExperience />
            </div>
          </div>
        </div>
        {/*  Experience Ends */}
      </div>
    </section>
  );
};

export default Experience;
