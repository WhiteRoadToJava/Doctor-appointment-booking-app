import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between shadow-md text-sm py-4 px-4 sm:px-6 lg:px-8 mb-5 border-b border-b-gray-300">
      <img onClick={() => navigate("/")}className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="hidden md:flex items-center gap-5 font-medium text-gray-700">
        <NavLink to={"/"} className={({isActive}) => isActive ? "text-blue-600" : ""}>
          <li className="py-1">HOME</li>
          <hr className="pb-1 border-b-2 border-transparent group-data-[active]:border-blue-600" />
        </NavLink>
        <NavLink to={"/doctors"} className={({isActive}) => isActive ? "text-blue-600" : ""}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="pb-1 border-b-2 border-transparent group-data-[active]:border-blue-600" />
        </NavLink>
        <NavLink to={"/about"} className={({isActive}) => isActive ? "text-blue-600" : ""}>
          <li className="py-1">ABOUT</li>
          <hr className="pb-1 border-b-2 border-transparent group-data-[active]:border-blue-600" />
        </NavLink>
        <NavLink to={"/contact"} className={({isActive}) => isActive ? "text-blue-600" : ""}>
          <li className="py-1">CONTACT</li>
          <hr className="pb-1 border-b-2 border-transparent group-data-[active]:border-blue-600" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 curser-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} />
            <img className="w-2.5" src={assets.dropdown_icon} />
            <div className="absolute top-0 right-0 pt-14 font-medium hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white py-3 px-8 rounded-full font-light hidden md:block cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
