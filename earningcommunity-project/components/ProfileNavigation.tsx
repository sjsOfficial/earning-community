import React from 'react'

export default function ProfileNavigation() {
  return (
    <div className=" bg-[#85929E] rounded-lg p-3 lg:p-4 xl:p-10">
          <div className="flex justify-between ">
            <div className="space-y-3">
              <div className="flex gap-2 md:gap-4 items-center">
                <svg
                  className="md:h-[32px] h-[24px] md:w-[32px] w-[24px]"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75 8.5L10.4417 8.155C10.6321 8.05992 10.8437 8.01505 11.0563 8.02464C11.269 8.03424 11.4757 8.09797 11.6568 8.20981C11.8379 8.32165 11.9874 8.47789 12.0912 8.66372C12.1951 8.84954 12.2497 9.0588 12.25 9.27167V13.5M12.25 13.5H22.25M12.25 13.5H9.75M12.25 13.5V22.5633C12.25 23.1533 12.5183 23.725 13.0383 24.005C13.8969 24.4668 14.8516 24.7214 15.8261 24.7485C16.8007 24.7756 17.768 24.5743 18.6509 24.1609C19.5338 23.7475 20.3078 23.1333 20.911 22.3674C21.5142 21.6015 21.93 20.7052 22.125 19.75C22.2633 19.0683 21.6867 18.5 20.9917 18.5H19.75M31 16C31 17.9698 30.612 19.9204 29.8582 21.7403C29.1044 23.5601 27.9995 25.2137 26.6066 26.6066C25.2137 27.9995 23.5601 29.1044 21.7403 29.8582C19.9204 30.612 17.9698 31 16 31C14.0302 31 12.0796 30.612 10.2597 29.8582C8.43986 29.1044 6.78628 27.9995 5.3934 26.6066C4.00052 25.2137 2.89563 23.5601 2.14181 21.7403C1.38799 19.9204 1 17.9698 1 16C1 12.0218 2.58035 8.20644 5.3934 5.3934C8.20644 2.58035 12.0218 1 16 1C19.9782 1 23.7936 2.58035 26.6066 5.3934C29.4196 8.20644 31 12.0218 31 16Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#FFFFFF] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  300 BDT
                </p>
              </div>
              <div className="flex gap-2 md:gap-4 items-center">
                <svg
                  className="md:h-[32px] h-[24px] md:w-[32px] w-[24px]"
                  viewBox="0 0 34 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.75 7.5L29.7083 25.22C29.6522 26.1751 29.2332 27.0726 28.537 27.7288C27.8408 28.3851 26.9201 28.7504 25.9633 28.75H8.03667C7.07994 28.7504 6.15924 28.3851 5.46304 27.7288C4.76685 27.0726 4.34779 26.1751 4.29167 25.22L3.25 7.5M13.6667 13.75H20.3333M2.625 7.5H31.375C32.41 7.5 33.25 6.66 33.25 5.625V3.125C33.25 2.09 32.41 1.25 31.375 1.25H2.625C1.59 1.25 0.75 2.09 0.75 3.125V5.625C0.75 6.66 1.59 7.5 2.625 7.5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#FFFFFF] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  Pay as go
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#ffffff] rounded-lg p-4 flex justify-center items-center gap-2 md:gap-4">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.70198L5.5 1M5.5 1L10 4.70198M5.5 1V12.1059M19 12.1059L14.5 15.8079M14.5 15.8079L10 12.1059M14.5 15.8079V4.70198"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#2E4053] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  Withdraw
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-b-[#ffffff] pb-2 md:pb-4 mt-6 md:mt-10">
            <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
              3 Package Purchased
            </p>
          </div>
          <div className="border-b-2 border-b-[#ffffff] pb-2 md:pb-4 mt-6">
            <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
              3 Wallets Added
            </p>
          </div>
          <div className="border-b-2 border-b-[#ffffff] pb-2 md:pb-4 mt-6">
            <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
              3 Withdraw Request
            </p>
          </div>
          <div className="border-b-2 border-b-[#ffffff] pb-2 md:pb-4 mt-6">
            <p className="text-[#05FB1E] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
              10 Content Views
            </p>
          </div>
        </div>
  )
}
