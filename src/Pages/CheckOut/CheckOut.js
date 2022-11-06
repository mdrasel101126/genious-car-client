import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);
  const handleCheckOutForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName?.value} ${form.lastName?.value}`;
    const phone = form.phone?.value;
    const email = user?.email || "Unregistered";
    const message = form.message?.value;
    //console.log(name);

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    fetch("https://genious-car-server-beta.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed Successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleCheckOutForm}>
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h4 className="text-3xl">Price: {price}</h4>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input w-full  input-bordered"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input w-full input-bordered"
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            className="input w-full input-bordered"
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="input w-full input-bordered"
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full my-4"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input
          className="btn btn-primary"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
