import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import userTypes from "@/types/userTypes";
import LoaderScreen from "../admin/(DashboardLayout)/components/shared/LoaderScreen";
// Define types
interface UserData {
  // Define your user data structure here
}

export interface AuthContextType {
  isAuthenticated: boolean;
  userData: UserData | null;
  isLoading: boolean;
  isAdmin: boolean;
  reloadAuth: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userData: null,
  isLoading: true,
  isAdmin: false,
  reloadAuth: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // State to store authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // State to store user data
  const [userData, setUserData] = useState<UserData | null>(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);

  // Function to fetch user data from API
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      // Make API request to fetch user data
      const response = await fetch("/apis/user/details", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      if (response.ok) {
        const data = (await response.json()) as userTypes;
        setUserData(data);
        setIsAdmin(data.isAdmin);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };
  const reloadAuth = () => {
    setReload(Math.random());
  };

  // useEffect hook to fetch user data when component mounts
  useEffect(() => {
    Cookies.get("token") && fetchUserData();
    if (!Cookies.get("token")) {
      setIsLoading(false);
    }
  }, [reload]);

  // Context value
  const contextValue: AuthContextType = {
    isAuthenticated,
    userData,
    isLoading,
    isAdmin,
    reloadAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <LoaderScreen /> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };