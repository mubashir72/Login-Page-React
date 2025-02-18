import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { app } from "../../firebase/firebase";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const auth = getAuth(app);
  const HandleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("SignUp Done");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-400 grid place-content-center min-h-screen flex flex-col ">
      <h1>Sign Up Form</h1>
      <form
        onSubmit={HandleSignUp}
        className=" p-3 w-full max-w-s grid place-content-center pt-5 pb-5 rounded-md bg-white mt-8 mb-8 "
      >
        <h2 className="text-2xl pb-5">Sign Up</h2>
        <p>Enter your credentials to sign up</p>
        {/* <label className="label">
          <b>Email</b>
        </label> */}

        <input
          className="input mb-2"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input mb-2"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          className="input mb-2"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your Password"
          required
        />

        <button
          type="submit"
          onClick={() => HandleSignUp()}
          className="rounded-md p-1  w-full mt-5 bg-purple-500 border-2 "
        >
          Sign Up
        </button>
      </form>
      <footer className="text-center ">
        &copy;2025 M.Mubashir72. All rights reserved.
      </footer>
    </div>
  );
};
