import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { assets } from "../assets/data.js";
import { useClerk, UserButton } from "@clerk/clerk-react";
 import { useAppContext } from "../context/useAppContext";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { user } = useAppContext(); // ✅ removed navigate (unused)
  const navigate = useNavigate();
  const { openSignIn } = useClerk();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
        setActive(true); // Always active on other pages
      }

      if (window.scrollY > 10) {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`${
        active ? "bg-white py-3 shadow-md" : "py-4"
      } fixed top-0 w-full left-0 z-50 transition-all duration-200`}
    >
      <div className="max-padd-container">
        <div className="flexBetween">
          {/* Logo */}
          <div className="flex flex-1">
            <Link to="/" onClick={() => { navigate('/'); window.scrollTo(0,0); }}>
              <img
                src={assets.logoImg}
                alt="LogoImg"
                className={`${!active && "invert"} h-11`}
              />
            </Link>
          </div>

          {/* Navbar */}
          <Navbar
            active={active}
            setMenuOpen={setMenuOpen}
            containerStyle={`
              ${
                menuOpen
                  ? "flex flex-col items-start gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50"
                  : "hidden lg:flex lg:flex-row gap-x-5 xl:gap-x-1 medium-15 p-1"
              }
              ${!menuOpen && !active ? "text-white" : "text-black"}
            `}
          />

          {/* SearchBar & Profile Buttons */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            {/* Search Bar */}
            <div className="relative hidden xl:flex items-center">
              <div
                className={`${active ? "bg-secondary/10" : "bg-white"} transition-all duration-300
                  ease-in-out ring-1 ring-slate-900/10 rounded-full overflow-hidden ${
                    showSearch
                      ? "w-[266px] opacity-100 px-2"
                      : "w-11 opacity-0 px-0 py-0"
                  }`}
              >
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full text-sm outline-none pr-10 placeholder:text-gray-400"
                />
              </div>

              <div
                onClick={() => setShowSearch((prev) => !prev)}
                className={`${
                  active ? "bg-secondary/10" : "bg-white"
                } absolute right-0 ring-slate-900/10 p-[8px] rounded-full
                  cursor-pointer z-10`}
              >
                <img src={assets.search} alt="searchIcon" />
              </div>
            </div>

            {/* Menu toggle */}
            {menuOpen ? (
              <img
                src={assets.close}
                alt="closeMenuIcon"
                onClick={toggleMenu}
                className={`${!active && "invert"} lg:hidden cursor-pointer text-xl`}
              />
            ) : (
              <img
                src={assets.menu}
                alt="openMenuIcon"
                onClick={toggleMenu}
                className={`${!active && "invert"} lg:hidden cursor-pointer text-xl`}
              />
            )}

            {/* User Profile */}
            <div className="group relative top-1 ">
              {user ? (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "42px",
                        height: "42px",
                      },
                    },
                  }}
                />
              ) : (
                <button
                  onClick={openSignIn}
                  className="flexCenter gap-2 rounded-full px-10 min-w-[100px]  bg-amber-500 text-white font-medium"
                >
                  Login
                  <img src={assets.user} alt="user" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;












