import React from "react";
import AllPersonalData from "../../data/AllPersonalData";

const Education = () => {
  const { educationContent } = AllPersonalData();
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i} style={{ marginBottom: "15%" }}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <div>
            <img
              className="rounded mx-auto d-block me-3 my-auto"
              src={val.img}
              style={{ height: "120px", width: "120px", float: "left" }}
              alt={val.institute}
            />
            <div>
              <h6 className="poppins-font text-uppercase">
                {val.degree}
                <span className="place open-sans-font">{val.institute}</span>
              </h6>
              <p className="open-sans-font">{val.details}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Education;
