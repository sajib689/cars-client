import Orders from "../Orders/Orders";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:3000/orders?email=${user?.email}`,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      }
    })
    .then(res => res.json())
    .then( data => {
      if(!data.error) {
        setOrders(data)
      }
      else{
        navigate('/')
      }
    })
  },[user?.email,navigate])
  const handleDelete = _id => {
    fetch(`http://localhost:3000/orders/${_id}`,{
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged === true) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Delete Successful',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    const remaining = orders.filter(del => del._id !== _id);
    setOrders(remaining)
  }
  return (
    <div className="bg-base-200 rounded-lg p-5">
      <div className="overflow-x-auto mt-20">
        <h1 className="text-center text-5xl mb-10">Orders List</h1>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Car Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Orders key={order._id} order={order} handleDelete={handleDelete}></Orders>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
