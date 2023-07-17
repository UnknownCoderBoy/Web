import React from "react";
import AllPersonalData from "../data/AllPersonalData";

const Address = () => {
  const { addressContent } = AllPersonalData();
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>
        {addressContent.address}
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href={`mailto:${addressContent.mail}`}>{addressContent.mail}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +216 21 184 010">{addressContent.phoneNo}</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
