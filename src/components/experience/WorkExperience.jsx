import React from "react";
import heroImg from "../../assets/img/hero/img-mobile.jpg";

const experienceContent = [
  {
    year: "   2018 - Present",
    position: " Web Developer",
    compnayName: "Envato",
    img: heroImg,
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "2013 - 2018",
    position: " UI/UX Designer",
    compnayName: "Themeforest",
    img: heroImg,
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "2005 - 2013",
    position: "Consultant",
    compnayName: "Videohive",
    img: heroImg,
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const WorkExperience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <div className="media">
            <img
              className="rounded mx-auto d-block me-3"
              src={val.img}
              style={{ height: "120px", width: "120px", float: "left" }}
              alt={val.compnayName}
            />
            <div className="media-body">
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
