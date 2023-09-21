import { Link } from "react-router-dom";
import del from "../../assets/icon/delete.svg";
const Orders = ({ order,handleDelete }) => {
  const { _id, name, carName, number, email, address, size, price } = order;
 
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{carName}</td>
        <td>{size}</td>
        <td>{price}</td>
        <td>{number}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td className="flex p-2 items-center justify-between">
          <Link onClick={() => handleDelete(_id)}>
            <img className="me-2 bg-red-700 p-2 rounded-lg" src={del} alt="" />
          </Link>
          <Link className="bg-orange-600 p-2 rounded-lg font-bold text-white">Pending</Link>
        </td>
      </tr>
    </>
  );
};

export default Orders;
