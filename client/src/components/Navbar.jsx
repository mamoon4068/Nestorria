
// import React from 'react'
// import { NavLink } from 'react-router-dom'
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
//         >
//           {link.title}
//         </NavLink>
//       ))}

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
//             {isMobile && (
//               <span className="text-sm text-gray-700">
//                 Welcome, {user?.firstName || 'User'}
//               </span>
//             )}
            
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
//       </div>
//     </nav>
//   )
// }

// export default Navbar





import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from '@clerk/clerk-react'

const Navbar = ({ setMenuOpen, containerStyle, isMobile = false }) => {
  const { user } = useUser()
  
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
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
        >
          {link.title}
        </NavLink>
      ))}

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

