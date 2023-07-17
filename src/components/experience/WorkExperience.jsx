import React from "react";
import AllPersonalData from "../../data/AllPersonalData";

const WorkExperience = () => {
  const { experienceContent } = AllPersonalData();
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i} style={{ marginBottom: "15%" }}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <div>
            <img
              className="rounded mx-auto d-block me-3"
              src={val.img}
              style={{ height: "120px", width: "120px", float: "left" }}
              alt={val.compnayName}
            />
            <div>
              <h5 className="poppins-font text-uppercase">
                {val.position}
                <span className="place open-sans-font">{val.compnayName}</span>
              </h5>
              <p className="open-sans-font">{val.details}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WorkExperience;
