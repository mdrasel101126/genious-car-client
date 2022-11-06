import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://genious-car-server-beta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className="mt-10">
      <p className="text-orange-600 text-center font-bold">Service</p>
      <h1 className="text-5xl text-center font-semibold">Our Service Area</h1>
      <p className="text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised
      </p>
      <p className="text-center">
        words which don't look even slightly believable.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
