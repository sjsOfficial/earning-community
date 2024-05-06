import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import userTypes from "@/types/userTypes";
import LoaderScreen from "../admin/(DashboardLayout)/components/shared/LoaderScreen";
import { getApi, putApi } from "@/functions/API";
// Define types
interface UserData {
  // Define your user data structure here
}
interface withdrawDataTypes {
  totalWithdraw: number;
  percentageLastMonthWithdraw: number;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  userData: userTypes | null;
  isLoading: boolean;
  isAdmin: boolean;
  reloadAuth: () => void;
  purchasePackageData: any;
  withdrawData: withdrawDataTypes;
  setPurchasePackageData: (v: any) => void;
  setWithdrawData: (v: any) => void;
  topData: any;
  setTopData: (v: any) => void;
}

// Create context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userData: null,
  isLoading: true,
  isAdmin: false,
  reloadAuth: () => {},
  purchasePackageData: undefined,
  withdrawData: { totalWithdraw: 0, percentageLastMonthWithdraw: 0 },
  setPurchasePackageData: () => {},
  setWithdrawData: () => {},
  topData: undefined,
  setTopData: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // State to store authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // State to store user data
  const [userData, setUserData] = useState<userTypes | null>(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);
  const [purchasePackageData, setPurchasePackageData] = useState();
  const [withdrawData, setWithdrawData] = useState({
    totalWithdraw: 0,
    percentageLastMonthWithdraw: 0,
  });
  const [topData, setTopData] = useState();

  // Function to fetch user data from API
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      //localStorage.setItem("userToken", Cookies.get("token") as string);
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
        if (!data.isAdmin) {
          setIsLoading(false);
        }
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsAuthenticated(false);
      setIsLoading(false);
    } finally {
      //setIsLoading(false);
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

  useEffect(() => {
    if (isAdmin) {
      loadAdminData();
    }
  }, [isAdmin]);
  const loadAdminData = async () => {
    try {
      const packageData = await getApi("/apis/admin/purchase");
      setPurchasePackageData(packageData.data);
      const withdrawData = await putApi("/apis/admin/withdraw");
      setWithdrawData(withdrawData.data);
      const topData = await getApi("/apis/admin/top");
      setTopData(topData.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  // Context value
  const contextValue: AuthContextType = {
    isAuthenticated,
    userData,
    isLoading,
    isAdmin,
    reloadAuth,
    purchasePackageData,
    withdrawData,
    setPurchasePackageData,
    setWithdrawData,
    topData,
    setTopData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <LoaderScreen /> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
