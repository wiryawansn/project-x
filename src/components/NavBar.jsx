import React from "react";
import CompanyLogo from "../assets/img/company-logo.png";

const navigation = ["home", "profil", "partner", "karir", "kontak"];

const NavBar = () => {
  return (
    <div className="container max-w-4xl mx-auto flex flex-row pt-5 items-center space-x-96 text-white">
      <img
        alt="icon-logo"
        src={CompanyLogo}
        className="w-36 items-center cursor-pointer"
      />
      <div className="flex-1 text-xs font-Poppins">
        <ul className="flex flex-row space-x-6 cursor-pointer">
          {navigation.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
