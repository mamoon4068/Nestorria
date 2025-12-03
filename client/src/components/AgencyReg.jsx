import React, { useState } from 'react'
 import { useAppContext }  from '../context/useAppContext'
import { assets, cities } from '../assets/data';


const AgencyReg = () => {
  const { setShowAgencyReg } = useAppContext();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")


 

  return (
    <div
      onClick={() => setShowAgencyReg(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="presentation"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl max-w-4xl w-full min-h-[60vh] max-h-[90vh] overflow-auto md:flex md:items-stretch relative"
      >
        {/* Left illustration (hidden on small screens) */}
        <div className="hidden md:block md:w-1/2 min-h-[60vh]">
          <img
            src={assets.createPrp}
            onClick={() => setShowAgencyReg(true)} 
            alt="createPrp img"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right form column */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <button
            type="button"
            onClick={() => setShowAgencyReg(true)}
            aria-label="Close"
            className="absolute top-4 right-4 h-8 w-8 p-1 cursor-pointer bg-amber-500/50 rounded-full shadow-md flex items-center justify-center"
          >
            <img src={assets.close} alt="close" className="h-4 w-4"
            
             />
          </button>
            <h3 className='h3 mb-6'>Register Agency</h3>
            <div className='flex gap-2 xl:gap-3'>
                <div>
                    <label htmlFor='name' className='medium-14' >Agency Name</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} id='name' type="text" placeholder='Type here...'
                    className='regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full
                    px-3 py-1.5 mt-1 outline-none' required />
                </div>
                  <div>
                    <label htmlFor='contact' className='medium-14' >Contact</label>
                    <input onChange={(e)=>setContact(e.target.value)} value={contact} id='contact' type="text" placeholder='Type here...'
                    className='regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full
                    px-3 py-1.5 mt-1 outline-none' required />
                </div>
            </div>

              <div className='w-full mt-4'>
                    <label htmlFor='email' className='medium-14' >Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} id='email' type="email" placeholder='Type here...'
                    className='regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full
                    px-3 py-1.5 mt-1 outline-none' required />
                </div>
                 <div className='w-full mt-4'>
                    <label htmlFor='address' className='medium-14' >Address</label>
                    <input onChange={(e)=>setAddress(e.target.value)} value={address} id='address' type="text" placeholder='Type here...'
                    className='regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full
                    px-3 py-1.5 mt-1 outline-none' required />
                </div>
                 <div className='w-full mt-4 max-w-60 mr-auto'>
                    <label htmlFor='city' className='medium-14' >City</label>
                    <select onChange={(e)=>setCity(e.target.value)} value={city} id='city' 
                    className='regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full
                    px-3 py-2.5 mt-1 outline-none' required>
                    <option value="">Select City</option>
                    {cities.map((city)=> (
                      <option key={city} value={city} >{city}</option>
                    ))}
                    </select>
                </div>
                <button className='btn-dark py-2 rounded-lg w-full md:w-32 mt-6'>Register</button>
            </div>

        </form>



    </div>
  )
}

export default AgencyReg


// import React, { useState } from 'react';
// import { useAppContext } from '../context/AppContext.jsx';
// import { assets, cities } from '../assets/data.js';

// const AgencyReg = () => {
//   const { setShowAgencyReg } = useAppContext();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');

//   return (
//     <div
//       onClick={() => setShowAgencyReg(false)}
//       className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black/80"
//       role="presentation"
//     >
//       <form
//         onClick={(e) => e.stopPropagation()}
//         className="flexCenter bg-white rounded-xl max-w-4xl max-md:mx-2 relative"
//       >
//         <img
//           src={assets.createPrp}
//           alt="createPrp img"
//           className="w-1/2 rounded-l-xl hidden md:block"
//         />

//         <div className="flex flex-col md:w-1/2 p-8 md:p-10">
//           <img
//             onClick={() => setShowAgencyReg(false)}
//             src={assets.close}
//             alt="close"
//             className="absolute top-4 right-4 h-6 w-6 p-1 cursor-pointer bg-amber-500/50 rounded-full shadow-md"
//           />

//           <h3 className="h3 mb-6">Register Agency</h3>

//           <div className="flex gap-2 xl:gap-3">
//             <div>
//               <label htmlFor="name" className="medium-14">
//                 Agency Name
//               </label>
//               <input
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 id="name"
//                 type="text"
//                 placeholder="Type here..."
//                 className="regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="contact" className="medium-14">
//                 Contact
//               </label>
//               <input
//                 onChange={(e) => setContact(e.target.value)}
//                 value={contact}
//                 id="contact"
//                 type="text"
//                 placeholder="Type here..."
//                 className="regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none"
//                 required
//               />
//             </div>
//           </div>

//           <div className="w-full mt-4">
//             <label htmlFor="email" className="medium-14">
//               Email
//             </label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               id="email"
//               type="email"
//               placeholder="Type here..."
//               className="regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none"
//               required
//             />
//           </div>

//           <div className="w-full mt-4">
//             <label htmlFor="address" className="medium-14">
//               Address
//             </label>
//             <input
//               onChange={(e) => setAddress(e.target.value)}
//               value={address}
//               id="address"
//               type="text"
//               placeholder="Type here..."
//               className="regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full px-3 py-1.5 mt-1 outline-none"
//               required
//             />
//           </div>

//           <div className="w-full mt-4 max-w-60 mr-auto">
//             <label htmlFor="city" className="medium-14">
//               City
//             </label>
//             <select
//               onChange={(e) => setCity(e.target.value)}
//               value={city}
//               id="city"
//               className="regular-14 border bg-amber-500/10 border-slate-900/10 rounded-lg w-full px-3 py-2.5 mt-1 outline-none"
//               required
//             >
//               <option value="">Select City</option>
//               {cities.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button className="btn-dark py-2 rounded-lg w-32 mt-6">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AgencyReg;
