"use client";
import React, { useEffect, useState } from "react";

export default function LightMoodToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    // Retrieve dark mode preference from local storage
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);
    // Apply dark mode class to document if dark mode is enabled
    if (storedDarkMode) document.documentElement.classList.add("dark");
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
  return (
    <div
      onClick={toggleDarkMode}
      className="flex items-center justify-center py-[6px] gap-4 w-[150px] border border-darkText dark:border-lightText rounded-full cursor-pointer hover:bg-[#85929E] transition-colors duration-500 ease-in-out"
    >
      {isDarkMode ? (
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.278 0.195258C7.38312 0.288764 7.45465 0.407955 7.48349 0.537698C7.51234 0.667441 7.4972 0.801884 7.44 0.923958C6.98282 1.9002 6.74828 2.94755 6.75 4.00514C6.75 6.12892 7.69821 8.16571 9.38604 9.66744C11.0739 11.1692 13.3631 12.0128 15.75 12.0128C16.9386 12.0144 18.1158 11.8057 19.213 11.3989C19.3501 11.3481 19.5011 11.3347 19.6468 11.3603C19.7925 11.3859 19.9263 11.4494 20.0314 11.5428C20.1365 11.6362 20.208 11.7553 20.237 11.8849C20.2659 12.0145 20.251 12.1488 20.194 12.2709C19.396 13.9732 18.0497 15.4273 16.3247 16.4501C14.5996 17.4729 12.573 18.0187 10.5 18.0186C4.701 18.0186 0 13.8368 0 8.6763C0 4.7899 2.667 1.45869 6.46 0.0511189C6.59707 0.000420816 6.74797 -0.012945 6.89359 0.0127139C7.03921 0.0383729 7.17299 0.101902 7.278 0.195258Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.278 0.256769C7.38312 0.3586 7.45465 0.488402 7.48349 0.629695C7.51234 0.770989 7.4972 0.917401 7.44 1.05034C6.98282 2.11349 6.74828 3.25409 6.75 4.40583C6.75 6.71868 7.69821 8.93679 9.38604 10.5722C11.0739 12.2076 13.3631 13.1264 15.75 13.1264C16.9386 13.1281 18.1158 12.9008 19.213 12.4578C19.3501 12.4025 19.5011 12.3879 19.6468 12.4158C19.7925 12.4437 19.9263 12.5129 20.0314 12.6146C20.1365 12.7163 20.208 12.8459 20.237 12.9871C20.2659 13.1282 20.251 13.2745 20.194 13.4074C19.396 15.2613 18.0497 16.8449 16.3247 17.9587C14.5996 19.0726 12.573 19.6669 10.5 19.6669C4.701 19.6669 0 15.1128 0 9.49284C0 5.26045 2.667 1.63268 6.46 0.0997982C6.59707 0.0445867 6.74797 0.030031 6.89359 0.0579742C7.03921 0.0859174 7.17299 0.155103 7.278 0.256769Z"
            fill="black"
          />
        </svg>
      )}

      <p className="text-darkText dark:text-lightText font-medium text-[20px]">
        {isDarkMode ? "Dark" : "Light"}
      </p>
    </div>
  );
}
