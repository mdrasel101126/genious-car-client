import React from "react";
import "./BannerItem.css";

const BannerItem = ({ banerItem }) => {
  const { image, prev, next, id } = banerItem;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-overlay w-full">
        <img
          style={{ height: "600px" }}
          src={image}
          alt=""
          className="w-full rounded-2xl"
        />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3">
        <h1 className="text-6xl text-white font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-2/3 w-1/2">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute left-20 top-3/4 mt-8">
        <button className="btn btn-warning bg-orange-600 border-0 text-white font-semibold mr-4">
          Discover More
        </button>
        <button className="btn btn-outline text-white">Latest Project</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
        {prev && (
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
        )}
        {next && (
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        )}
      </div>
    </div>
  );
};

export default BannerItem;
