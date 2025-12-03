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
    currency,
    user,
    showAgencyReg,
    setShowAgencyReg,
    isOwner,
    setIsOwner,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
