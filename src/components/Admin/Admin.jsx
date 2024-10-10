import React from "react";
import { useSelector } from "react-redux";  
import { useState,useEffect } from "react";
import axios from "axios";


function Admin() {

  // useState to store the GET data
  const [orderData, setOrderData] = useState([])

  // Axios GET connected to the order.router GET
const getOrders = () => {
axios.get("/api/order")
.then(response => {
  setOrderData(response.data)
})
.catch(err => {
  console.error(err)
})
}

useEffect(() => {
  getOrders()
}, [])


  // Destructure and display the data via .map in the return

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
           {orderData.map((order) => {
            return <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
            </tr>
           })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
