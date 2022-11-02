import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const HeroSection = () => {
  return (
    <div className="hero mt-8 py-10 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <div className="w-3/4">
            <img src={person} alt="" className="rounded-lg shadow-2xl" />
          </div>
          <div className="absolute left-1/3 top-2/4 pb-8 ">
            <img
              src={parts}
              alt=""
              className=" rounded-lg border-4 shadow-2xl w-3/4"
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-orange-600 font-semibold">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-warning bg-orange-600 border-0 text-white font-semibold mr-4">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
