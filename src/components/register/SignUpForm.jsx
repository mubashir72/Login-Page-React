export const SignUpForm = () => {
  return (
    <div className="bg-gray-400 grid place-content-center min-h-screen flex flex-col ">
      <h1>Sign Up Form</h1>
      <form className=" p-3 w-full max-w-s grid place-content-center pt-5 pb-5 rounded-md bg-white mt-8 mb-8 ">
        <h2 className="text-2xl pb-5">Sign Up</h2>
        <p>Enter your credentials to sign up</p>
        <label className="label">
          <b>Email</b>
        </label>
        <br />
        <input
          className="input"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <br />
        <label className="label">
          <b>Password</b>
        </label>
        <br />
        <input
          className="input"
          type="password"
          placeholder="Enter your Password"
          required
        />
        <br />
        <label className="label">
          <b>Confirm Password</b>
        </label>
        <br />
        <input
          className="input"
          type="password"
          placeholder="Enter your Password"
          required
        />
        <br />
        <button className="rounded-md p-1  w-full mt-5 bg-purple-500 border-2 ">
          Sign Up
        </button>
      </form>
      <footer className="text-center ">
        &copy;2025 M.Mubashir72. All rights reserved.
      </footer>
    </div>
  );
};
