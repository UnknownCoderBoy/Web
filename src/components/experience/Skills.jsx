import React from "react";

const skillsContent = [
  {
    skillName: "HTML",
    skillImg: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  {
    skillName: "JAVASCRIPT",
    skillImg: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    skillName: "CSS",
    skillImg: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    skillName: "PHP",
    skillImg: "https://img.icons8.com/officel/48/000000/php-logo.png",
  },
  {
    skillName: "WORDPRESS",
    skillImg: "https://img.icons8.com/color/48/000000/wordpress.png",
  },
  {
    skillName: "JQUERY",
    skillImg: "https://img.icons8.com/ios-filled/48/000000/jquery.png",
  },
  {
    skillName: "ANGULAR",
    skillImg: "https://img.icons8.com/color/48/000000/angularjs.png",
  },
  {
    skillName: "REACT",
    skillImg: "https://img.icons8.com/plasticine/48/000000/react.png",
  },
];

const Skills = () => {
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
