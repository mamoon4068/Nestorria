
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { SignedIn, UserButton, useUser } from '@clerk/clerk-react'

// const Navbar = ({ setMenuOpen, containerStyle, isMobile = false }) => {
//   const { user } = useUser()

//   const navLinks = [
//     { path: '/', title: 'Home' },
//     { path: '/listing', title: 'Listing' },
//     { path: '/blog', title: 'Blog' },
//     { path: '/contact', title: 'Contact' },
//   ]

//   const scrollToTop = () => {
//     if (setMenuOpen) {
//       setMenuOpen(false)
//     }

//     if (typeof window !== 'undefined') {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//   }

//   const mobileAuthStyles = isMobile ? 'flex-col gap-4 mt-4' : 'items-center gap-4 ml-4'
//   // const desktopAuthStyles = isDesktop ? 'flex items-left gap-1 '

//   return (
//     <nav className={containerStyle}>
//       {navLinks.map((link) => (
//         <NavLink
//           key={link.title}
//           to={link.path}
//           onClick={scrollToTop}
//           className={({ isActive }) => `px-3 py-2 rounded-full uppercase text-sm font-bold relative transition-colors duration-200
//             ${isActive ? 'active-link' : ''}
//             hover:after:content-[''] hover:after:block hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:w-2/5 hover:after:h-1 hover:after:rounded-full hover:after:bg-yellow-400`}
//         >
//           {link.title}
//         </NavLink>
//       ))}

//       <div className={`flex ${mobileAuthStyles}`}>
//         <SignedIn>
//           <div className={`flex ${isMobile ? 'flex-col items-start' : 'items-center'} gap-3`}>
//             {isMobile && (
//               <span className="text-sm text-gray-700">
//                 Welcome, {user?.firstName || 'User'}
//               </span>
//             )}

//             <UserButton
//               afterSignOutUrl="/"
//               appearance={{
//                 elements: {
//                   avatarBox: isMobile ? 'w-10 h-10' : 'w-8 h-8',
//                 },
//               }}
//             />

//             <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-2`}>
//               <NavLink
//                 to="/owner/dashboard"
//                 onClick={scrollToTop}
//                 className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
//               >
//                 Dashboard
//               </NavLink>
//               <NavLink
//                 to="/profile"
//                 onClick={scrollToTop}
//                 className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
//               >
//                 Profile
//               </NavLink>
//             </div>
//           </div>
//         </SignedIn>
//       </div>
//     </nav>
//   )
// }

// export default Navbar






// use from AI //



// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { SignedIn, UserButton, useUser } from '@clerk/clerk-react'

// const Navbar = ({ setMenuOpen, containerStyle, isMobile = false }) => {
//   const { user } = useUser()

//   const navLinks = [
//     { path: '/', title: 'Home' },
//     { path: '/listing', title: 'Listing' },
//     { path: '/blog', title: 'Blog' },
//     { path: '/contact', title: 'Contact' },
//   ]

//   const scrollToTop = () => {
//     if (setMenuOpen) {
//       setMenuOpen(false)
//     }

//     if (typeof window !== 'undefined') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//     }
//   }

//   return (
//     <nav className={containerStyle}>
//       {/* Main Navigation */}
//       {navLinks.map((link) => (
//         <NavLink
//           key={link.title}
//           to={link.path}
//           onClick={scrollToTop}
//           className={({ isActive }) => `
//             px-3 py-2
//             rounded-full
//             uppercase
//             text-sm
//             font-bold
//             relative
//             transition-all
//             duration-200
//             ${isActive ? 'active-link' : ''}
//             hover:after:content-['']
//             hover:after:block
//             hover:after:absolute
//             hover:after:left-1/2
//             hover:after:-translate-x-1/2
//             hover:after:bottom-0
//             hover:after:w-2/5
//             hover:after:h-1
//             hover:after:rounded-full
//             hover:after:bg-yellow-400
//           `}
//         >
//           {link.title}
//         </NavLink>
//       ))}

//       {/* Logged-in User Section */}
//       <SignedIn>
//         <div
//           className={`
//             flex
//             items-center
//             gap-2
//             ${isMobile ? 'ml-0 mt-3' : 'ml-3'}
//           `}
//         >
//           {/* User Avatar */}
//           <UserButton
//             afterSignOutUrl="/"
//             appearance={{
//               elements: {
//                 avatarBox: isMobile
//                   ? 'w-9 h-9'
//                   : 'w-8 h-8',
//               },
//             }}
//           />

//           {/* User Name - only visible on mobile/tablet */}
//           {isMobile && (
//             <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
//               {user?.firstName || 'User'}
//             </span>
//           )}

//           {/* Dashboard + Profile - ALWAYS INLINE */}
//           <div className="flex items-center gap-1">
//             <NavLink
//               to="/owner/dashboard"
//               onClick={scrollToTop}
//               className={({ isActive }) => `
//                 px-3
//                 py-2
//                 rounded-lg
//                 text-sm
//                 font-semibold
//                 whitespace-nowrap
//                 transition-all
//                 duration-200
//                 ${
//                   isActive
//                     ? 'bg-yellow-400 text-gray-900 shadow-sm'
//                     : 'text-gray-700 hover:bg-yellow-50 hover:text-gray-900'
//                 }
//               `}
//             >
//               Dashboard
//             </NavLink>

//             <NavLink
//               to="/profile"
//               onClick={scrollToTop}
//               className={({ isActive }) => `
//                 px-3
//                 py-2
//                 rounded-lg
//                 text-sm
//                 font-semibold
//                 whitespace-nowrap
//                 transition-all
//                 duration-200
//                 ${
//                   isActive
//                     ? 'bg-yellow-400 text-gray-900 shadow-sm'
//                     : 'text-gray-700 hover:bg-yellow-50 hover:text-gray-900'
//                 }
//               `}
//             >
//               Profile
//             </NavLink>
//           </div>
//         </div>
//       </SignedIn>
//     </nav>
//   )
// }

// export default Navbar





// use from resorces//





import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setMenuOpened, containerStyles }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
          onClick={() => {
            setMenuOpened(false);
            scrollTo(0,0);
          }}
          key={link.title}
          to={link.path}
          className={({isActive})=> `${isActive ? "active-link" : ""} px-3 py-2 rounded-full uppercase text-sm font-bold`}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

