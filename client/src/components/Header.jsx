import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/useAppContext";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isOwner, setShowAgencyReg } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="max-padd-container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold text-slate-900">Nestorria</Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link to="/">Home</Link>
          <Link to="/listing">Listing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <button className="btn-outline" onClick={() => (isOwner ? navigate("/owner") : setShowAgencyReg(true))}>
                {isOwner ? "Dashboard" : "Register Agency"}
              </button>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <button className="btn-primary" onClick={() => openSignIn()}>Sign in</button>
          )}
        </div>
      </div>
      {location.pathname === "/" && <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />}
    </header>
  );
};

export default Header;