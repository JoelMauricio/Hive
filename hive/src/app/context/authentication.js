"use client";

import { useContext, useEffect, createContext, useState } from "react";

export const AuthContext = createContext(["", () => { }]);

export default function AuthContextProvider({ children }) {
    const [profile, setProfile] = useState(localStorage.getItem("profile"));

    return (
        <AuthContext.Provider value={[profile, setProfile]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext)