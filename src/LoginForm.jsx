import "./index.css";
import image from "./assets/images.png";
import { Link } from "react-router-dom";
// import { SignUpForm } from "./components/register/SignUpForm";
export const LoginForm = () => {
  return (
    <section className="grid place-content-center  flex flex-col">
      <form className=" p-3 w-full max-w-s grid place-content-center pt-5 pb-5 rounded-4xl bg-white mt-8 mb-8 ">
        <h2 className="text-2xl pb-5 font-bold">Log In</h2>
        <p>Enter your email and password to login to dashboard</p>
        {/* <label className="label">
          <b>Email</b>
        </label> */}
        <br />
        <input
          className="input mb-2"
          type="email"
          placeholder="Enter your Email"
          required
        />
        {/* <label className="label">
          <b>Password</b>
        </label> */}
        <input
          className="input mb-1"
          type="password"
          placeholder="Enter your Password"
          required
        />
        <span className=" text-right">
          <a className="text-blue-500" href="">
            Forgot Password
          </a>
        </span>
        <button className="rounded-md p-1  w-full mt-2 bg-purple-500 border-2 ">
          Sign In
        </button>

        <p>
          Don&#39;t have an account?
          <span>
            <Link className="text-blue-500" to="/signup">
              Sign Up
            </Link>
          </span>
        </p>

        <div className="flex items-center gap-4 my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-gray-500 font-semibold">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex items-center gap-2 place-content-center">
          Sign in with <img width="50px" height="50px" src={image} alt="" />
        </div>
      </form>
    </section>
  );
};
