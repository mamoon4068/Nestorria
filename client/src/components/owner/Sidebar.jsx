import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/owner/dashboard", label: "Dashboard" },
  { to: "/owner/add-property", label: "Add Property" },
  { to: "/owner/list-property", label: "List Property" },
];

const Sidebar = () => (
  <div className="max-padd-container flex gap-8 py-28">
    <aside className="w-64 rounded-2xl bg-slate-900 p-4 text-white">
      <h2 className="mb-6 text-xl font-bold">Owner panel</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "rounded-lg px-3 py-2 text-sm bg-white/10" : "rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
);

export default Sidebar;