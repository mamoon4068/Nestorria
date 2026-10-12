import { UserButton } from "@clerk/clerk-react";
<<<<<<< HEAD
import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/data";
import { useAppContext } from "../../context/useAppContext";

const navItems = [
  { path: "/owner/dashboard", label: "Dashboard", icon: assets.dashboard },
  { path: "/owner/add-property", label: "Add Property", icon: assets.housePlus },
  { path: "/owner/list-property", label: "List Property", icon: assets.list },
];

const Sidebar = () => {
  const { user } = useAppContext();
  const userName = [user?.firstName, user?.lastName].filter(Boolean).join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fffbee] to-white">
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row">
        <aside className="m-3 flex justify-between rounded-xl bg-white shadow md:sticky md:top-3 md:min-h-[calc(100vh-1.5rem)] md:min-w-[20%] md:flex-col">
          <div className="flex w-full items-center justify-between gap-4 p-3 md:flex-col md:items-stretch md:gap-6 md:pt-5">
            <Link to="/owner/dashboard" className="flex p-2 lg:pl-5">
              <img src={assets.logoImg} alt="Nestorria home" className="h-11" />
            </Link>

            <nav className="flex flex-wrap items-center gap-2 md:flex-col md:items-stretch">
              {navItems.map(({ path, label, icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-xl p-3 transition-colors hover:bg-amber-50 ${
                      isActive ? "bg-amber-100 font-semibold" : ""
                    }`
                  }
                >
                  <img src={icon} alt="" aria-hidden="true" className="hidden md:block" width={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-3 border-t border-slate-900/15 p-4 md:flex">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: { width: "45px", height: "45px" },
                },
              }}
            />
            <span className="truncate text-sm font-semibold capitalize text-gray-800">
              {userName || "Account"}
            </span>
          </div>
          <div className="flex items-center p-3 md:hidden">
            <UserButton />
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <Outlet />
        </section>
=======
import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom"; // Removed NavLink since it's not used
import { assets } from "../../assets/data.js";
import { useAppContext } from "../../context/useAppContext";

const Sidebar = () => {
  const { user } = useAppContext();

  const navItems = [
    {
      path: "/owner/dashboard",
      label: "Dashboard",
      icon: assets.dashboard,
    },
    {
      path: "/owner/Add-property",
      label: "Add Property",
      icon: assets.housePlus,
    },
    {
      path: "/owner/List-property",
      label: "List Property",
      icon: assets.list,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white">
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row">
        {/* sidebar */}
        <div className="sticky max-md:flexCenter flex flex-col justify-between bg-blue-500 sm:m-3 md:min-w-[20%] md:min-h-[97vh] rounded-xl shadow">
          <div className="sticky flex flex-col gap-y-6 max-md:items-center md:flex-col md:pt-5">
            {/* logo & profile */}
            <div className="w-full flex justify-between md:flex-col">
              <div className="flex flex-1 p-3 lg:pl-8">
                <Link to={"/owner"}>
                  <img
                    src={assets.logoImg}
                    alt="Company Logo"
                    className="h-11"
                  />
                </Link>
              </div>

              <div className="md:hidden flex items-center gap-3 md:bg-amber-50 rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "45px",
                        height: "45px",
                      },
                    },
                  }}
                />
                <div className="text-sm font-semibold text-gray-800 capitalize">
                  {user?.firstName || "Guest"} {user?.lastName || ""}
                </div>
              </div>
            </div>

            <div className="flex md:flex-col md:gap-x-5 gap-y-8 md:mt-4">
              {navItems.map((link) => (
                <NavLink
                  key={link.label} // Consider using a unique ID if available
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-3 rounded-xl cursor-pointer 
                     transition-all duration-200 
                     hover:shadow-[0_0_8px_rgba(255,255,0,0.5)] hover:bg-amber-50
                     ${isActive ? "bg-amber-100 font-semibold" : ""}`
                  }
                >
                  <img
                    src={link.icon}
                    alt={`${link.label} icon`}
                    className="hidden md:block"
                    width={18}
                  />
                  <div>{link.label}</div>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 md:bg-amber-50 border-t border-slate-900/15 rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "45px",
                    height: "45px",
                  },
                },
              }}
            />
            <div className="text-sm font-semibold text-gray-800 capitalize">
              {user?.firstName || "Guest"} {user?.lastName || ""}
            </div>
          </div>
        </div>
        <Outlet />
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
      </div>
    </div>
  );
};

export default Sidebar;
