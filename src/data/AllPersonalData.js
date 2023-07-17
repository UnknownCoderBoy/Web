import heroImgMobile from "../assets/img/hero/img-mobile.jpg";
import heroImg from "../assets/img/hero/dark.jpg";

const AllPersonalData = () => {
  const heroContent = {
    heroImage: heroImg,
    heroMobileImage: heroImgMobile,
    heroTitleName: "steve milner",
    heroDesignation: "web designer",
    heroDescriptions: `I'm a Tunisian based web designer & front‑end developer focused on
    crafting clean & user‑friendly experiences, I am passionate about
    building excellent software that improves the lives of those
    around me.`,
    heroBtn: "more about me",
  };

  const personalInfoContent = [
    { meta: "first name", metaInfo: "Steve" },
    { meta: "last name", metaInfo: "Milner" },
    { meta: "Age", metaInfo: "27 Years" },
    { meta: "Nationality", metaInfo: "Tunisian" },
    { meta: "Freelance", metaInfo: "Available" },
    { meta: "Address", metaInfo: "Tunis" },
    { meta: "phone", metaInfo: "+21621184010" },
    { meta: "Email", metaInfo: "you@mail.com" },
    { meta: "Skype", metaInfo: " steve.milner" },
    { meta: "langages", metaInfo: "French, English" },
  ];

  const achievementsContent = [
    { title: "12", subTitle1: "years of", subTitle2: "experience" },
    { title: "97", subTitle1: "completed", subTitle2: "projects" },
    { title: "81", subTitle1: "happy", subTitle2: "customers" },
    { title: "53", subTitle1: "awards", subTitle2: "won" },
  ];

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

  const addressContent = {
    address: "123 Stree New York City , United States Of America 750065.",
    mail: "steve@mail.com",
    phoneNo: "+216 21 184 010",
  };

  const SocialShare = [
    {
      iconName: "fa fa-facebook",
      link: "https://www.facebook.com/",
    },
    { iconName: "fa fa-twitter", link: "https://twitter.com/" },
    {
      iconName: "fa fa-youtube",
      link: "https://www.youtube.com/",
    },
    { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
  ];

  return {
    heroContent,
    personalInfoContent,
    achievementsContent,
    educationContent,
    skillsContent,
    experienceContent,
    addressContent,
    SocialShare,
  };
};

export default AllPersonalData;
