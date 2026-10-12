import './index.css';

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { AppContextProvider } from './context/AppContextProvider.jsx';
import { ClerkProvider } from '@clerk/clerk-react'
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast'
=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}


createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
  <AppContextProvider>
 <App />
<<<<<<< HEAD
 <Toaster />
=======
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
  </AppContextProvider>
  </BrowserRouter>,
  </ClerkProvider>
);
