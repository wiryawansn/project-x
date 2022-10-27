import React from "react";
import Taco from "../assets/img/taco.png";
import Hotdog from "../assets/img/hot-dog.png";
const Hero = () => {
  return (
    <div className="container max-w-3xl mx-auto grid grid-cols-2 py-36">
      <div>
        <h1 className="font-bold hover:font-black text-4xl text-white pb-5">
          Apaantuh!
        </h1>
        <div className="font-Poppins text-xs py-4 text-white leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        {/* <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
          Get Started
        </button> */}
      </div>
      <div className="relative left-8">
        <img src={Taco} alt="ilustration-kintil" className="w-72" />
        <img
          src={Hotdog}
          alt="ilustration-kintil2"
          className="absolute bottom-0 left-24"
        />
      </div>
    </div>
  );
};

export default Hero;
