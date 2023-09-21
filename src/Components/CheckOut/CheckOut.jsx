import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate()
  const { name, price, size } = data;
  const handleOrders = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const carName = form.carName.value;
    const number = form.number.value;
    const email = form.email.value;
    const address = form.address.value;
    const size = form.size.value;
    const price = form.price.value;
    const order = { name, carName, number, email, address, size, price };
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged === true) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your order has been placed successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
        navigate('/orders')
      });
  };
  return (
    <div>
      <h1 className="text-center text-5xl mt-10">Order Now</h1>
      <form onSubmit={handleOrders} className="w-[700px] mx-auto">
        <div className=" mt-20 grid grid-cols-2 gap-3">
          <input
            name="name"
            type="text"
            required
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="carName"
            type="text"
            readOnly
            defaultValue={name}
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="number"
            type="number"
            required
            placeholder="Type your number"
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="email"
            type="email"
            defaultValue={user?.email}
            readOnly
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="address"
            type="text"
            required
            placeholder="Type your address"
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="price"
            type="text"
            defaultValue={price}
            className=" input input-bordered w-full max-w-xs"
          />
          <input
            name="size"
            type="text"
            defaultValue={size}
            className=" input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          type="submit"
          value="Order Now"
          className="btn bg-red-500 text-white hover:bg-red-700 mt-4"
        />
      </form>
    </div>
  );
};

export default CheckOut;
