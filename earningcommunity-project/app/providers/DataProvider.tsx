"use client";
import { createContext, useContext, useState, useEffect } from "react";

type DataContextType = {
  isEnglish: boolean;
  toggleLanguage: () => void;
  user: boolean;
  setUser: (newValue: boolean) => void;
  purchasePackageData: any;
  withdrawData: any;
  setPurchasePackageData: (v: any) => void;
  setWithdrawData: (v: any) => void;
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
  const [user, setUser] = useState(false);
  const [purchasePackageData, setPurchasePackageData] = useState();
  const [withdrawData, setWithdrawData] = useState();
  // console.log(isEnglish);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage !== null) {
      setIsEnglish(storedLanguage === "en");
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = !isEnglish ? "en" : "bn";
    setIsEnglish((prevState) => !prevState);
    localStorage.setItem("language", newLanguage);
    // Implement logic to switch language here
  };

  return (
    <DataContext.Provider
      value={{
        isEnglish,
        toggleLanguage,
        user,
        setUser,
        purchasePackageData,
        withdrawData,
        setPurchasePackageData,
        setWithdrawData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
