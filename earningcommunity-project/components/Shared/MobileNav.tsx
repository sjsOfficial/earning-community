import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <div className="bg-lightBg dark:bg-[#121212] transition-colors duration-500 ease-in-out fixed bottom-0 z-20 w-full block md:hidden">
      <div className="mx-2 my-1 flex justify-between items-center h-[50px]">
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-darkText dark:text-white"
            >
              <path
                d="M18.272 7.26473L10 1.34375"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.72852 7.26473L10.0005 1.34375"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.21094 15.4063V5.78467"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M15.791 15.4063V5.78467"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4.21094 15.4058H15.7917"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p className="text-darkText dark:text-white font-normal text-[12px]  mt-1">
              Home
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-darkText dark:text-white"
            >
              <path
                d="M1 2.875C1 2.37772 1.19754 1.90081 1.54917 1.54917C1.90081 1.19754 2.37772 1 2.875 1H4.75C5.24728 1 5.72419 1.19754 6.07582 1.54917C6.42746 1.90081 6.625 2.37772 6.625 2.875V4.75C6.625 5.24728 6.42746 5.72419 6.07582 6.07582C5.72419 6.42746 5.24728 6.625 4.75 6.625H2.875C2.37772 6.625 1.90081 6.42746 1.54917 6.07582C1.19754 5.72419 1 5.24728 1 4.75V2.875ZM1 11C1 10.5027 1.19754 10.0258 1.54917 9.67417C1.90081 9.32254 2.37772 9.125 2.875 9.125H4.75C5.24728 9.125 5.72419 9.32254 6.07582 9.67417C6.42746 10.0258 6.625 10.5027 6.625 11V12.875C6.625 13.3723 6.42746 13.8492 6.07582 14.2008C5.72419 14.5525 5.24728 14.75 4.75 14.75H2.875C2.37772 14.75 1.90081 14.5525 1.54917 14.2008C1.19754 13.8492 1 13.3723 1 12.875V11ZM9.125 2.875C9.125 2.37772 9.32254 1.90081 9.67417 1.54917C10.0258 1.19754 10.5027 1 11 1H12.875C13.3723 1 13.8492 1.19754 14.2008 1.54917C14.5525 1.90081 14.75 2.37772 14.75 2.875V4.75C14.75 5.24728 14.5525 5.72419 14.2008 6.07582C13.8492 6.42746 13.3723 6.625 12.875 6.625H11C10.5027 6.625 10.0258 6.42746 9.67417 6.07582C9.32254 5.72419 9.125 5.24728 9.125 4.75V2.875ZM9.125 11C9.125 10.5027 9.32254 10.0258 9.67417 9.67417C10.0258 9.32254 10.5027 9.125 11 9.125H12.875C13.3723 9.125 13.8492 9.32254 14.2008 9.67417C14.5525 10.0258 14.75 10.5027 14.75 11V12.875C14.75 13.3723 14.5525 13.8492 14.2008 14.2008C13.8492 14.5525 13.3723 14.75 12.875 14.75H11C10.5027 14.75 10.0258 14.5525 9.67417 14.2008C9.32254 13.8492 9.125 13.3723 9.125 12.875V11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-darkText dark:text-white font-normal text-[12px]  mt-1">
              Category
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              className="text-darkText dark:text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15H17L15.595 13.595C15.4063 13.4063 15.2567 13.1822 15.1546 12.9357C15.0525 12.6891 15 12.4249 15 12.158V9C15.0002 7.75894 14.6156 6.54834 13.8992 5.53489C13.1829 4.52144 12.17 3.75496 11 3.341V3C11 2.46957 10.7893 1.96086 10.4142 1.58579C10.0391 1.21071 9.53043 1 9 1C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V3.341C4.67 4.165 3 6.388 3 9V12.159C3 12.697 2.786 13.214 2.405 13.595L1 15H6M12 15V16C12 16.7956 11.6839 17.5587 11.1213 18.1213C10.5587 18.6839 9.79565 19 9 19C8.20435 19 7.44129 18.6839 6.87868 18.1213C6.31607 17.5587 6 16.7956 6 16V15M12 15H6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-darkText dark:text-white font-normal text-[12px]  mt-1">
              Notificaton
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              className="text-darkText dark:text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14.7143V3.28571M7 14.7143C7 15.3205 6.78929 15.9019 6.41421 16.3305C6.03914 16.7592 5.53043 17 5 17H3C2.46957 17 1.96086 16.7592 1.58579 16.3305C1.21071 15.9019 1 15.3205 1 14.7143V3.28571C1 2.67951 1.21071 2.09812 1.58579 1.66947C1.96086 1.24082 2.46957 1 3 1H5C5.53043 1 6.03914 1.24082 6.41421 1.66947C6.78929 2.09812 7 2.67951 7 3.28571M7 14.7143C7 15.3205 7.21071 15.9019 7.58579 16.3305C7.96086 16.7592 8.46957 17 9 17H11C11.5304 17 12.0391 16.7592 12.4142 16.3305C12.7893 15.9019 13 15.3205 13 14.7143M7 3.28571C7 2.67951 7.21071 2.09812 7.58579 1.66947C7.96086 1.24082 8.46957 1 9 1H11C11.5304 1 12.0391 1.24082 12.4142 1.66947C12.7893 2.09812 13 2.67951 13 3.28571M13 14.7143V3.28571M13 14.7143C13 15.3205 13.2107 15.9019 13.5858 16.3305C13.9609 16.7592 14.4696 17 15 17H17C17.5304 17 18.0391 16.7592 18.4142 16.3305C18.7893 15.9019 19 15.3205 19 14.7143V3.28571C19 2.67951 18.7893 2.09812 18.4142 1.66947C18.0391 1.24082 17.5304 1 17 1H15C14.4696 1 13.9609 1.24082 13.5858 1.66947C13.2107 2.09812 13 2.67951 13 3.28571"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-darkText dark:text-white font-normal text-[12px]  mt-1">
              My Profile
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              className="text-darkText dark:text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2143 4.55556C11.2143 5.49855 10.823 6.40292 10.1264 7.06971C9.42983 7.73651 8.48509 8.11111 7.5 8.11111C6.51491 8.11111 5.57017 7.73651 4.8736 7.06971C4.17704 6.40292 3.78571 5.49855 3.78571 4.55556C3.78571 3.61256 4.17704 2.70819 4.8736 2.0414C5.57017 1.3746 6.51491 1 7.5 1C8.48509 1 9.42983 1.3746 10.1264 2.0414C10.823 2.70819 11.2143 3.61256 11.2143 4.55556ZM7.5 10.7778C5.77609 10.7778 4.12279 11.4333 2.90381 12.6002C1.68482 13.7671 1 15.3498 1 17H14C14 15.3498 13.3152 13.7671 12.0962 12.6002C10.8772 11.4333 9.22391 10.7778 7.5 10.7778Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-darkText dark:text-white font-normal text-[12px] mt-1">
              Account
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
