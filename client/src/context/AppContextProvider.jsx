<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "./AppContext";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken, isLoaded, userId } = useAuth();
  const [properties, setProperties] = useState([]);
  const [searchedCities, setSearchedCities] = useState([]);
  const [showAgencyReg, setShowAgencyReg] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let cancelled = false;

    const getProperties = async () => {
      try {
        const { data } = await axios.get("/api/properties");
        if (!data.success) {
          throw new Error(data.message || "Unable to load properties");
        }
        if (!cancelled) setProperties(data.properties || []);
      } catch (error) {
        console.error("Failed to load properties:", error);
        if (!cancelled) toast.error("Unable to load properties");
      }
    };

    getProperties();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const getUserProfile = async () => {
      try {
        const token = await getToken();
        const { data } = await axios.get("/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!data.success) {
          throw new Error(data.message || "Unable to load your account");
        }
        if (!cancelled) {
          setIsOwner(data.role === "agencyOwner");
          setSearchedCities(data.recentSearchedCities || []);
        }
      } catch (error) {
        console.error("Failed to load user profile:", error);
        if (!cancelled) toast.error("Unable to load your account details");
      }
    };

    if (isLoaded && userId) getUserProfile();
    if (isLoaded && !userId) {
      setIsOwner(false);
      setSearchedCities([]);
    }

    return () => {
      cancelled = true;
    };
  }, [getToken, isLoaded, userId]);

  const value = {
    navigate,
    properties,
    setProperties,
=======
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { AppContext } from "./AppContext";
import { useUser } from "@clerk/clerk-react";
import Dashboard from "../pages/owner/Dashboard";
import Sidebar from "../components/owner/Sidebar";

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const { user } = useUser();

  const [properties, setProperties] = useState([]);
  const [showAgencyReg, setShowAgencyReg] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const getProperties = () => {
    setProperties(dummyProperties);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const value = {
    navigate,
    properties,
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
    currency,
    user,
    showAgencyReg,
    setShowAgencyReg,
    isOwner,
    setIsOwner,
<<<<<<< HEAD
    axios,
    getToken,
    searchQuery,
    setSearchQuery,
    searchedCities,
    setSearchedCities,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
=======
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
};
