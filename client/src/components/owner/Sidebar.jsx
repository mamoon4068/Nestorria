import { UserButton } from "@clerk/clerk-react";
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
      </div>
    </div>
  );
};

export default Sidebar;
