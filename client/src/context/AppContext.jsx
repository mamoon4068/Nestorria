
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { useUser } from "@clerk/clerk-react";
import Sidebar from "../components/owner/Sidebar";

const AppContext = createContext();
export { AppContext };
// moved useAppContext hook to ./useAppContext.jsx to keep this file exporting only components


export const AppContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const { user } = useUser();
    const [properties, setProperties] = useState([]);
    const [showAgencyReg, setShowAgencyReg] = useState(false);
    const [isOwner, setIsOwner] = useState(true);

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
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};



