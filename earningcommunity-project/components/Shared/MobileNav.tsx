import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <div className="bg-lightBg dark:bg-darkBg transition-colors duration-500 ease-in-out fixed bottom-0 z-20 w-full block md:hidden">
      <div className="mx-2 my-1 flex justify-between items-center h-[50px]">
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-darkText dark:text-lightText"
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

            <p className="text-darkText dark:text-lightText font-normal text-[12px]  mt-1">
              Home
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              className="text-darkText dark:text-lightText"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.40078 0.200195C1.69252 0.200195 1.97231 0.316088 2.1786 0.522378C2.38489 0.728668 2.50078 1.00846 2.50078 1.3002V3.61129C3.41603 2.67769 4.55386 1.99243 5.8071 1.62006C7.06034 1.24768 8.38775 1.20045 9.66429 1.4828C10.9408 1.76516 12.1245 2.36781 13.1038 3.23399C14.0831 4.10018 14.8258 5.20139 15.2619 6.43389C15.3148 6.57113 15.3396 6.71758 15.335 6.86458C15.3303 7.01159 15.2962 7.15617 15.2347 7.28976C15.1731 7.42335 15.0854 7.54325 14.9768 7.64236C14.8681 7.74148 14.7407 7.81779 14.602 7.86678C14.4633 7.91578 14.3162 7.93647 14.1694 7.92763C14.0226 7.91878 13.879 7.88059 13.7472 7.81529C13.6154 7.75 13.4981 7.65895 13.4021 7.54751C13.3061 7.43607 13.2334 7.30651 13.1884 7.16649C12.8563 6.22799 12.2759 5.39716 11.5089 4.76253C10.7419 4.1279 9.81707 3.71325 8.833 3.56276C7.84893 3.41228 6.84246 3.5316 5.92086 3.90801C4.99925 4.28442 4.19703 4.90382 3.59968 5.70019H6.90078C7.19252 5.70019 7.47231 5.81609 7.6786 6.02238C7.88489 6.22867 8.00078 6.50846 8.00078 6.80019C8.00078 7.09193 7.88489 7.37172 7.6786 7.57801C7.47231 7.7843 7.19252 7.90019 6.90078 7.90019H1.40078C1.10904 7.90019 0.829254 7.7843 0.622964 7.57801C0.416674 7.37172 0.300781 7.09193 0.300781 6.80019V1.3002C0.300781 1.00846 0.416674 0.728668 0.622964 0.522378C0.829254 0.316088 1.10904 0.200195 1.40078 0.200195ZM1.40958 10.1629C1.5458 10.1148 1.69016 10.094 1.83443 10.1017C1.97869 10.1093 2.12002 10.1454 2.25036 10.2077C2.3807 10.27 2.49749 10.3574 2.59406 10.4648C2.69063 10.5722 2.76509 10.6977 2.81318 10.8339C3.14523 11.7724 3.72568 12.6032 4.49268 13.2379C5.25968 13.8725 6.18449 14.2871 7.16856 14.4376C8.15264 14.5881 9.1591 14.4688 10.0807 14.0924C11.0023 13.716 11.8045 13.0966 12.4019 12.3002H9.10078C8.80904 12.3002 8.52925 12.1843 8.32296 11.978C8.11667 11.7717 8.00078 11.4919 8.00078 11.2002C8.00078 10.9085 8.11667 10.6287 8.32296 10.4224C8.52925 10.2161 8.80904 10.1002 9.10078 10.1002H14.6008C14.8925 10.1002 15.1723 10.2161 15.3786 10.4224C15.5849 10.6287 15.7008 10.9085 15.7008 11.2002V16.7002C15.7008 16.9919 15.5849 17.2717 15.3786 17.478C15.1723 17.6843 14.8925 17.8002 14.6008 17.8002C14.309 17.8002 14.0293 17.6843 13.823 17.478C13.6167 17.2717 13.5008 16.9919 13.5008 16.7002V14.3891C12.5855 15.3227 11.4477 16.008 10.1945 16.3803C8.94122 16.7527 7.61381 16.7999 6.33727 16.5176C5.06073 16.2352 3.87707 15.6326 2.89778 14.7664C1.91849 13.9002 1.17581 12.799 0.739681 11.5665C0.691568 11.4303 0.670758 11.2859 0.678441 11.1416C0.686124 10.9974 0.722148 10.8561 0.784458 10.7257C0.846767 10.5954 0.934141 10.4786 1.04159 10.382C1.14904 10.2854 1.27336 10.211 1.40958 10.1629Z"
                fill="currentColor"
              />
            </svg>

            <p className="text-darkText dark:text-lightText font-normal text-[12px]  mt-1">
              History
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              className="text-darkText dark:text-lightText"
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

            <p className="text-darkText dark:text-lightText font-normal text-[12px]  mt-1">
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
              className="text-darkText dark:text-lightText"
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

            <p className="text-darkText dark:text-lightText font-normal text-[12px]  mt-1">
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
              className="text-darkText dark:text-lightText"
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

            <p className="text-darkText dark:text-lightText font-normal text-[12px] mt-1">
              Account
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
