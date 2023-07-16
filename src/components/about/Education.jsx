import React from "react";
import heroImg from "../../assets/img/hero/img-mobile.jpg";

const educationContent = [
  {
    year: "2015",
    degree: "ENGINEERING DEGREE",
    institute: "OXFORD UNIVERSITY",
    img: heroImg,
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "2012",
    degree: "MASTER DEGREE",
    institute: "KIEV UNIVERSITY",
    img: heroImg,
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "2009",
    degree: "BACHELOR DEGREE ",
    institute: "TUNIS HIGH SCHOOL",
    img: heroImg,
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <div className="media">
            <img
              className="rounded mx-auto d-block ms-2"
              src={val.img}
              style={{ height: "120px", width: "120px", float: "right" }}
              alt={val.institute}
            />
            <div className="media-body">
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
