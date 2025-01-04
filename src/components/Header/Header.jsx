import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import admin from "../../assets/admin.png";
import user2 from "../../assets/user.png";
import doctor from "../../assets/doctor.png";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li className="hover:text-[#8BC34A] transition-colors text-xl font-semibold duration-300 ease-in-out">
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li className="hover:text-[#8BC34A] transition-colors text-xl font-semibold duration-300 ease-in-out">
          <NavLink to="/appointment">Appointment</NavLink>
        </li>
      )}
      <li className="hover:text-[#8BC34A] text-xl font-semibold transition-colors duration-300 ease-in-out">
        <NavLink to="/doctors">Doctors</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#111827] text-white px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden" tabIndex={0}>
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
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-semibold hover:text-[#8BC34A] transition-colors duration-300 ease-in-out">
            MediHome
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end lg:flex justify-center items-center gap-4 hidden">
          {user ? (
            ""
          ) : (
            <NavLink to="/admin_login" title="admin">
              <img
                className="w-[42px] h-[42px] rounded-full bg-[#8BC34A]"
                src={admin}
                alt="Admin"
              />
            </NavLink>
          )}

          {user ? (
            <div>
              <img
                className="w-[42px] h-[42px] rounded-full bg-[#8BC34A]"
                src={user?.photoURL || "hidden"}
                alt="User"
              />
            </div>
          ) : (
            ""
          )}
          {user ? (
            <a onClick={handleLogOut} className="btn">
              LogOut
            </a>
          ) : (
            <NavLink to="/user_login" title="user">
              <img
                className="w-[42px] h-[42px] rounded-full bg-[#8BC34A]"
                src={user2}
                alt="User"
              />
            </NavLink>
          )}

          {user ? (
            ""
          ) : (
            <NavLink to="/doctor_login" title="doctor login">
              <img
                className="w-[42px] h-[42px] rounded-full bg-[#8BC34A]"
                src={doctor}
                alt="Doctor"
              />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
