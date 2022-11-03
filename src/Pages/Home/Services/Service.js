import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card  w-96  shadow-xl">
      <figure className="px-4 py-4">
        <img className=" rounded-xl" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600">Price : ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-warning bg-orange-600 border-0 text-white font-semibold mr-4">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
