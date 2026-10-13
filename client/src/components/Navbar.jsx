import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/listing", label: "Listing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => (
  <nav className="flex gap-6 text-sm font-medium text-slate-700">
    {links.map((link) => (
      <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? "text-amber-600" : "")}>
        {link.label}
      </NavLink>
    ))}
  </nav>
);

export default Navbar;