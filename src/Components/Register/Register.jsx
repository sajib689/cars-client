import { Link } from "react-router-dom";
import img from '../../assets/car-slider/car2.avif'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const Register = () => {
    const {registerWithForm} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        registerWithForm(email, password)
        .then( result => {
            const user = result.user
            if(user.email) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            form.reset()
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='rounded-lg max-w-lg' src={img}  alt="" />
      </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h1 className='text-center text-3xl font-bold mt-5'>Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-500 text-white hover:bg-red-600">Register</button>
        </div>
        <p className='text-center mt-2'>Are you have an <Link to='/login'>account?</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;