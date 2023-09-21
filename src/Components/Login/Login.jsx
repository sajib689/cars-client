import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/car-slider/ddddd.avif";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const Login = () => {
  const { loginWithForm } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithForm(email, password).
    then((result) => {
      const user = result.user;
      if (user.email) {
        Swal.fire({
          title: "Success!",
          text: "Login successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
      navigate(from, {replace: true})
      
      
      form.reset();
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="rounded-lg max-w-lg" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <h1 className="text-center text-3xl font-bold mt-5">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-500 text-white hover:bg-red-600">
                  Login
                </button>
              </div>
              <p className="text-center mt-2">
                Do you want <Link to="/register">Register?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
