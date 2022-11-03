import React, { useEffect, useState } from "react";

const OrderRaw = ({ order, handleDeleteItem, handleStatusUpdate }) => {
  const { _id, serviceName, customer, price, message, service, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data);
      });
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteItem(_id)}
            className="btn btn-ghost"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderService?.img && <img src={orderService.img} alt="" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{message}</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className={status ? "btn btn-primary" : "btn btn-ghost"}
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRaw;
