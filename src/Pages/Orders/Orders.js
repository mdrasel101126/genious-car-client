import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import OrderRaw from "./OrderRaw";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          const otherOrders = orders.filter((order) => order._id !== id);
          const approvedOrder = orders.find((order) => order._id === id);
          approvedOrder.status = "Approved";
          const newOrders = [approvedOrder, ...otherOrders];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl">You Have {orders.length} Orders</h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRaw
                key={order._id}
                order={order}
                handleDeleteItem={handleDeleteItem}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;