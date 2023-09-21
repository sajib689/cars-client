import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/car-slider/m.png";
import man from "../../assets/car-slider/man.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    .then(() => {
      navigate('/')
    })
    .catch(error => {
      if (error) {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    })
  };
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Item 1</Link>
              </li>
              <li>
                <Link>Parent</Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className=" normal-case text-xl flex items-center font-bold font-[600]">
            <img className="w-[70px]" src={logo} alt="" />
            MICHARLET AUTO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            {
              user ? 
              <li>
              <Link to="/orders">My Orders</Link>
            </li>
            :
            <li className="hidden">
              <Link to="/orders">My Orders</Link>
            </li>
            }
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="">
            {user ? (
              <div className="flex items-center">
                <img className="w-[50px] rounded-lg" src={man} alt="" />

                <Link onClick={handleLogOut}>
                  LogOut
                </Link>
              </div>
            ) : (
              <div className="flex items-center">
                <img className="w-[50px] rounded-lg hidden" src={man} alt="" />

                <Link to="/login">Login</Link>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
