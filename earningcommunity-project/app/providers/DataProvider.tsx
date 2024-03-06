'use client'
import { createContext, useContext, useState, useEffect } from 'react';

type DataContextType = {
  isEnglish: boolean;
  toggleLanguage: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
interface Props {
    children: React.ReactNode;
  }
export const DataProvider: React.FC<Props> = ({ children }) => {
    const [isEnglish, setIsEnglish] = useState(true);
    // console.log(isEnglish);
    
      useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage !== null) {
          setIsEnglish(storedLanguage === 'en');
        }
      }, []);
    
      const toggleLanguage = () => {
        const newLanguage = !isEnglish ? 'en' : 'bn';
        setIsEnglish(prevState => !prevState);
        localStorage.setItem('language', newLanguage);
        // Implement logic to switch language here
      };

  return (
    <DataContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </DataContext.Provider>
  );
};