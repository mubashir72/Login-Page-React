import { Link } from "react-router-dom";
import "./index.css";
export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="font-bold text-4xl p-5">Login page XYZ Blogs</h1>
      <span className="p-5 ">
        <Link className="text-black-700 " to="/signup">
          Sign Up
        </Link>
      </span>
    </div>
  );
};
