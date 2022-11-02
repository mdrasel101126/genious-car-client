import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { loginUser, googleSignUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
        <div className="text-center">
          <img className="w-4/5" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-3/4 mx-auto">
          <div className="card-body">
            <h1 className="text-4xl text-center font-semibold">Login</h1>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              {error && <p className="text-red-700">{error}</p>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="w-1/2 h-0.5 bg-slate-700 " />
                <p className="text-orange-600">Or</p>
                <hr className="w-1/2  bg-slate-700 h-0.5" />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleSignUp}
                  type="submit"
                  className="btn btn-primary"
                >
                  Google Sign In
                </button>
              </div>
              <p className="mt-4 text-center">
                <small>
                  No Account?{" "}
                  <Link to="/register" className="text-orange-700">
                    Register Now
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
