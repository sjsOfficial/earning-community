"use client";
import { getApi } from "@/functions/API";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { UserWallet, userWithdrawHistoryTypes } from "../types";
import { PackageHistoryTypes } from "@/types/packageHistoryTypes";

type DataContextType = {
  isEnglish: boolean;
  isDarkMode: boolean;
  toggleLanguage: () => void;
  toggleDarkMode: () => void;
  userPackageHistory?: PackageHistoryTypes[];
  userWithdrawHistory?: userWithdrawHistoryTypes[];
  userWalletHistory?: UserWallet[];
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
interface Props {
  children: React.ReactNode;
}

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userPackageHistory, setUserPackageHistory] =
    useState<PackageHistoryTypes[]>();
  const [userWithdrawHistory, setUserWithdrawHistory] =
    useState<userWithdrawHistoryTypes[]>();
  const [userWalletHistory, setUserWalletHistory] = useState<UserWallet[]>();
  // console.log(userWithdrawHistory);
  useEffect(() => {
    // Retrieve dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);
    // Apply dark mode class to document if dark mode is enabled
    if (storedDarkMode) document.documentElement.classList.add("dark");
  }, []);
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage !== null) {
      setIsEnglish(storedLanguage === "en");
    }
  }, []);
  const toggleDarkMode = () => {
    // Toggle dark mode state
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    // Store dark mode preference in local storage
    localStorage.setItem("darkMode", String(newDarkMode));
    // Apply or remove dark mode class from document
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
  const toggleLanguage = () => {
    const newLanguage = !isEnglish ? "en" : "bn";
    setIsEnglish((prevState) => !prevState);
    localStorage.setItem("language", newLanguage);
    // Implement logic to switch language here
  };

  // get package history
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getApi(`/apis/user/package`);

        setUserPackageHistory(res.data.history);
      } catch (error: any) {
       // toast.error(error.response.data.error);
        console.log(error.response.data.error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getApi(`/apis/user/withdraw`);
        setUserWithdrawHistory(res.data);
      } catch (error: any) {
        //toast.error(error.response.data.error);
        console.log(error.response.data.error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getApi(`/apis/user/wallets`);
        setUserWalletHistory(res.data);
      } catch (error: any) {
        //toast.error(error.response.data.error);
        console.log(error.response.data.error);
      }
    };
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        isEnglish,
        toggleLanguage,
        toggleDarkMode,
        isDarkMode,
        userPackageHistory,
        userWithdrawHistory,
        userWalletHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
