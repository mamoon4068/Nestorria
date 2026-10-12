<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/useAppContext";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isOwner, setShowAgencyReg } = useAppContext();
  const { openSignIn } = useClerk();

  const BookingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-scroll-text-icon lucide-scroll-text"
    >
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </svg>
  );

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/listing${query ? `?search=${encodeURIComponent(query)}` : ""}`, { replace: true });
  };
=======
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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
<<<<<<< HEAD
        setActive(true); // always stay active on other pages
      }
      if (window.scrollY > 10) {
        setMenuOpened(false);
=======
        setActive(true); // Always active on other pages
      }

      if (window.scrollY > 10) {
        setShowSearch(false);
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
      }
    };

    window.addEventListener("scroll", handleScroll);
<<<<<<< HEAD
    // Run once to set initial active state
=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

<<<<<<< HEAD
  useEffect(() => {
    setSearchQuery(new URLSearchParams(location.search).get("search") || "");
  }, [location.search]);

=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
  return (
    <header
      className={`${
        active ? "bg-white py-3 shadow-md" : "py-4"
<<<<<<< HEAD
      } fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
    >
      <div className="max-padd-container">
        {/* Container */}
        <div className="flexBetween">
          {/* Logo */}
          <div className="flex flex-1">
            <Link to={"/"}>
=======
      } fixed top-0 w-full left-0 z-50 transition-all duration-200`}
    >
      <div className="max-padd-container">
        <div className="flexBetween">
          {/* Logo */}
          <div className="flex flex-1">
            <Link to="/" onClick={() => { navigate('/'); window.scrollTo(0,0); }}>
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
              <img
                src={assets.logoImg}
                alt="LogoImg"
                className={`${!active && "invert"} h-11`}
              />
            </Link>
          </div>
<<<<<<< HEAD
          {/* Navbar */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={`${
              menuOpened
                ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50"
                : "hidden lg:flex gap-x-5 xl:gap-x-1 medium-15 p-1"
            } ${!menuOpened && !active ? "text-white" : ""}`}
          />
          {/* Buttons SearchBar & Profile */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            <div>
              {user && (
                <button
                  onClick={() =>
                    isOwner ? navigate("/owner") : setShowAgencyReg(true)
                  }
                  className={`btn-outline px-2 py-1 text-xs font-semibold ${
                    !active &&
                    "text-primary ring-primary bg-transparent hover:text-black"
                  } bg-secondary/10 hover:bg-white`}
                >
                  {isOwner ? "Dashboard" : "Register Agency"}
                </button>
              )
              }
            </div>
            {/* SearchBar */}
            <div className="relative hidden xl:flex items-center">
              {/* Search Input */}
              <div
                className={`${
                  active ? "bg-secondary/10" : "bg-white"
                } transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 rounded-full overflow-hidden ${
                  showSearch
                    ? "w-[266px] opacity-100 px-4 py-2"
                    : "w-11 opacity-0 px-0 py-0"
                }`}
              >
                <input
                  onChange={handleSearchChange}
                  value={searchQuery}
=======

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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
                  type="text"
                  placeholder="Type here..."
                  className="w-full text-sm outline-none pr-10 placeholder:text-gray-400"
                />
              </div>
<<<<<<< HEAD
              {/* Search Toggle Button */}
              <div
                onClick={() => setShowSearch((prev) => !prev)}
                className={`${
                  active ? "bg-secondary/10" : "bg-primary"
                } absolute right-0 ring-1 ring-slate-900/10 p-[8px] rounded-full cursor-pointer z-10`}
=======

              <div
                onClick={() => setShowSearch((prev) => !prev)}
                className={`${
                  active ? "bg-secondary/10" : "bg-white"
                } absolute right-0 ring-slate-900/10 p-[8px] rounded-full
                  cursor-pointer z-10`}
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
              >
                <img src={assets.search} alt="searchIcon" />
              </div>
            </div>
<<<<<<< HEAD
            {/* Menu Toggle */}
            <>
              {menuOpened ? (
                <img
                  src={assets.close}
                  alt="closeMenuIcon"
                  onClick={toggleMenu}
                  className={`${
                    !active && "invert"
                  } lg:hidden cursor-pointer text-xl`}
                />
              ) : (
                <img
                  src={assets.menu}
                  alt="openMenuIcon"
                  onClick={toggleMenu}
                  className={`${
                    !active && "invert"
                  } lg:hidden cursor-pointer text-xl`}
                />
              )}
            </>
            {/* User Profile */}
            <div className="group relative top-1">
              <div>
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
                  >
                    <UserButton.MenuItems>
                      <UserButton.Action
                        label="My Bookings"
                        labelIcon={<BookingIcon />}
                        onClick={() => navigate("/my-bookings")}
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                ) : (
                  <button
                    onClick={openSignIn}
                    className="btn-secondary flexCenter gap-2 rounded-full"
                  >
                    Login
                  </button>
                )}
              </div>
=======

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
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
<<<<<<< HEAD
=======












>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
