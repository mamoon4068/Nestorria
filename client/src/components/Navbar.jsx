
// import React from 'react'
// import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
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
=======
// import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from '@clerk/clerk-react'

// const Navbar = ({ setMenuOpen, containerStyle, isMobile = false }) => {
//   const { user } = useUser()
  
//   const navLinks = [
//     { path: "/", title: "Home" },
//     { path: "/listing", title: "Listing" },
//     { path: "/blog", title: "Blog" },
//     { path: "/contact", title: "Contact" },
//   ]

//   const scrollToTop = () => {
//     setMenuOpen(false)
//     scrollTo(0, 0)
//   }

//   // Mobile-specific styling
//   const mobileAuthStyles = isMobile ? "flex-col gap-4 mt-4" : "items-center gap-4 ml-4"

//   return (
//     <nav className={`${containerStyle}`}>
//       {/* Regular Navigation Links */}
//       {navLinks.map((link) => (
//         <NavLink 
//           onClick={scrollToTop}
//           key={link.title}
//           to={link.path}
//           className={({isActive}) => `px-3 py-2 rounded-full uppercase text-sm font-bold relative transition-colors duration-200
//             ${isActive ? "active-link" : ""} 
//             hover:after:content-[''] hover:after:block hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:w-2/5 hover:after:h-1 hover:after:rounded-full hover:after:bg-yellow-400`
//           }
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//         >
//           {link.title}
//         </NavLink>
//       ))}

<<<<<<< HEAD
//       <div className={`flex ${mobileAuthStyles}`}>
//         <SignedIn>
//           <div className={`flex ${isMobile ? 'flex-col items-start' : 'items-center'} gap-3`}>
=======
//       {/* Authentication Section */}
//       <div className={`flex ${mobileAuthStyles}`}>
//           {/* <SignedOut>
//           <SignInButton mode="modal">
//             <button className={`px-4 py-2 bg-blue-600 text-white rounded-full uppercase text-sm font-bold hover:bg-blue-700 transition-colors duration-200 ${isMobile ? 'w-full text-center' : ''}`}>
//               Sign In
//             </button>
//           </SignInButton>
//         </SignedOut>   */}

//         <SignedIn>
//           <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-3`}>
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//             {isMobile && (
//               <span className="text-sm text-gray-700">
//                 Welcome, {user?.firstName || 'User'}
//               </span>
//             )}
<<<<<<< HEAD

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
=======
            
//             <UserButton 
//               afterSignOutUrl="/"
//               appearance={{
//                 elements: {
//                   avatarBox: isMobile ? "w-10 h-10" : "w-8 h-8"
//                 }
//               }}
//             />
            
//             {/* {isMobile && (
//               <div className="flex flex-col gap-2 mt-2">
//                 <NavLink 
//                   to="/dashboard" 
//                   onClick={scrollToTop}
//                   className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
//                 >
//                   Dashboard
//                 </NavLink>
//                 <NavLink 
//                   to="/profile" 
//                   onClick={scrollToTop}
//                   className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
//                 >
//                   Profile
//                 </NavLink>
//               </div>*/
//                {/* SHOW DASHBOARD ALWAYS */}
//     <div className={`flex flex-col gap-2 mt-2 ${isMobile ? "" : "ml-4"}`}>
//       <NavLink 
//         to="/dashboard" 
//         onClick={scrollToTop}
//         className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
//       >
//         Dashboard
//       </NavLink>

//       <NavLink 
//         to="/profile" 
//         onClick={scrollToTop}
//         className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
//       >
//         Profile
//       </NavLink>
//     </div>

//             )}
//           </div>
//         </SignedIn> 
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
//       </div>
//     </nav>
//   )
// }

// export default Navbar





<<<<<<< HEAD

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
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from '@clerk/clerk-react'

const Navbar = ({ setMenuOpen, containerStyle, isMobile = false }) => {
  const { user } = useUser()
  
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
<<<<<<< HEAD
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
=======
  ]

  const scrollToTop = () => {
    if (setMenuOpen) {
      setMenuOpen(false)
    }
    window.scrollTo(0, 0)
  }

  // Mobile-specific styling
  const mobileAuthStyles = isMobile ? "flex-col gap-4 mt-4" : "items-center gap-4 ml-4"

  return (
    <nav className={`${containerStyle}`}>
      {/* Regular Navigation Links */}
      {navLinks.map((link) => (
        <NavLink 
          onClick={scrollToTop}
          key={link.title}
          to={link.path}
          className={({isActive}) => `px-3 py-2 rounded-full uppercase text-sm font-bold relative transition-colors duration-200
            ${isActive ? "active-link" : ""} 
            hover:after:content-[''] hover:after:block hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:w-2/5 hover:after:h-1 hover:after:rounded-full hover:after:bg-yellow-400`
          }
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
        >
          {link.title}
        </NavLink>
      ))}
<<<<<<< HEAD
    </nav>
  );
};

export default Navbar;
=======

      {/* Authentication Section */}
      <div className={`flex ${mobileAuthStyles}`}>
        <SignedOut>
          <SignInButton mode="modal">
            <button className={`px-4 py-2 bg-blue-600 text-white rounded-full uppercase text-sm font-bold hover:bg-blue-700 transition-colors duration-200 ${isMobile ? 'w-full text-center' : ''}`}>
              Sign In
            </button>
          </SignInButton>
        </SignedOut>  

        <SignedIn>
          <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-3`}>
            {isMobile && (
              <span className="text-sm text-gray-700">
                Welcome, {user?.firstName || 'User'}
              </span>
            )}
            
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: isMobile ? "w-10 h-10" : "w-8 h-8"
                }
              }}
            />
            
            {/* Dashboard and Profile Links - Always visible when signed in */}
            <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} gap-2 ${isMobile ? 'mt-2' : 'ml-4'}`}>
              <NavLink 
                to="/owner" 
                onClick={scrollToTop}
                className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Dashboard
              </NavLink>
              {/* <NavLink 
                to="/signedinprofile" 
                onClick={scrollToTop}
                className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
              >
                Profile
              </NavLink> */}
            </div>
          </div>
        </SignedIn> 
      </div>
    </nav>
  )
}

export default Navbar
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70

