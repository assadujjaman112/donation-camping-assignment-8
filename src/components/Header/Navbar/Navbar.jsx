import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="w-4/5 mx-auto py-5 flex flex-col md:flex-row justify-between items-center">

        <Logo></Logo>

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul> 

      </nav>
    </div>
  );
};

export default Navbar;
