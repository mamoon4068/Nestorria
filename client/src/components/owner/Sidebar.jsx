import { UserButton } from "@clerk/clerk-react";
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
      </div>
    </div>
  );
};

export default Sidebar;
