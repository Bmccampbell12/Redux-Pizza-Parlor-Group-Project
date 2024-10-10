import React from "react";
import { useSelector } from "react-redux";

function AdminInfo(item) {
  return (
    <>
      <td>{item.customer_name}</td>
      <td>{item.type}</td>
      <td>{item.time}</td>
      <td>{item.total}</td>
    </>
  );
}
function Admin() {
  const customerInfo = useSelector((store) => store.orderHistoryReducer);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Time</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {customerInfo.map((item, i) => {
              return <AdminInfo key={i} item={item} />;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
