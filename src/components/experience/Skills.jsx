import React from "react";
import AllPersonalData from "../../data/AllPersonalData";

const Skills = () => {
  const { skillsContent } = AllPersonalData();
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className=" skill justify-content-center mx-1">
            <div className="text-center">
              <div>
                <img src={val.skillImg} alt={val.skillName} />
              </div>
              <h6>
                <span className="text-uppercase title">{val.skillName}</span>
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
