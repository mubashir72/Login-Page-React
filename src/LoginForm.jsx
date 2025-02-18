import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { app } from "./firebase/firebase";
// import { SignUpForm } from "./components/register/SignUpForm";
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();
  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        AuthenticatorAssertionResponse,
        email,
        password
      );
      console.log("Logged In");
      navigate("loggedIn");
    } catch (error) {
      console.log(error.codes);
    }
  };
  const googleProvider = new GoogleAuthProvider();
  const HandleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("loggedIn");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="grid place-content-center  flex flex-col">
      <div className=" p-3 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl grid place-content-center pt-5 pb-5 rounded-4xl bg-white mt-8 mb-8 ">
        <form onSubmit={HandleLogin}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label className="label">
          <b>Password</b>
        </label> */}
          <input
            className="input mb-1"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className=" text-right">
            <a className="text-blue-500" href="">
              Forgot Password
            </a>
          </span>
          <button
            type="submit"
            className="rounded-md p-1  w-full mt-2 bg-purple-500 border-2 "
          >
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
        </form>
        <button
          onClick={() => {
            HandleGoogleLogin();
          }}
          className="flex items-center gap-2 place-content-center"
        >
          Sign in with <FaGoogle className="icon text-4xl" />
        </button>
      </div>
    </section>
  );
};
