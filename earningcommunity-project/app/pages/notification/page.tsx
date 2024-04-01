import React, { ReactNode } from "react";

export default function Notification() {
  return (
    <div className="container mx-auto px-2 pt-4 md:pt-40 pb-4 md:hidden">
      <div className="space-y-2">
      <NotificationCard
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.375 23.25L0.75 17.625M0.75 17.625L6.375 12M0.75 17.625H17.625M17.625 0.75L23.25 6.375M23.25 6.375L17.625 12M23.25 6.375H6.375"
              stroke="#FA0E0E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        title="Withdraw Cancelled"
        description="Your withdraw request 200 BDT has been cancelled"
        date="11 JUN 2023"
      ></NotificationCard>
      <NotificationCard
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.375 23.25L0.75 17.625M0.75 17.625L6.375 12M0.75 17.625H17.625M17.625 0.75L23.25 6.375M23.25 6.375L17.625 12M23.25 6.375H6.375"
              stroke="#00D508"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        title="Withdraw Cancelled"
        description="Your withdraw request 200 BDT has been cancelled"
        date="11 JUN 2023"
      ></NotificationCard>
      <NotificationCard
        icon={
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 4.5L18.625 15.132C18.5913 15.705 18.3399 16.2436 17.9222 16.6373C17.5045 17.031 16.952 17.2502 16.378 17.25H5.622C5.04796 17.2502 4.49555 17.031 4.07783 16.6373C3.66011 16.2436 3.40868 15.705 3.375 15.132L2.75 4.5M9 8.25H13M2.375 4.5H19.625C20.246 4.5 20.75 3.996 20.75 3.375V1.875C20.75 1.254 20.246 0.75 19.625 0.75H2.375C1.754 0.75 1.25 1.254 1.25 1.875V3.375C1.25 3.996 1.754 4.5 2.375 4.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        title="Withdraw Cancelled"
        description="Your withdraw request 200 BDT has been cancelled"
        date="11 JUN 2023"
      ></NotificationCard>
      <NotificationCard
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.571 18.3525C17.9 18.0767 20.1884 17.5271 22.3885 16.715C20.5253 14.651 19.4957 11.9681 19.4998 9.1875V8.25C19.4998 6.26088 18.7096 4.35322 17.3031 2.9467C15.8966 1.54018 13.9889 0.75 11.9998 0.75C10.0107 0.75 8.10301 1.54018 6.69648 2.9467C5.28996 4.35322 4.49979 6.26088 4.49979 8.25V9.1875C4.50356 11.9683 3.47352 14.6512 1.60979 16.715C3.77604 17.515 6.05978 18.0713 8.42853 18.3525M15.571 18.3525C13.1985 18.6339 10.8011 18.6339 8.42853 18.3525M15.571 18.3525C15.7512 18.9148 15.796 19.5117 15.7018 20.0947C15.6076 20.6776 15.3771 21.23 15.029 21.707C14.6809 22.184 14.2252 22.572 13.6988 22.8395C13.1724 23.107 12.5903 23.2465 11.9998 23.2465C11.4093 23.2465 10.8272 23.107 10.3008 22.8395C9.7744 22.572 9.31862 22.184 8.97056 21.707C8.6225 21.23 8.39199 20.6776 8.2978 20.0947C8.20361 19.5117 8.24841 18.9148 8.42853 18.3525M0.904785 6.375C1.25725 4.28121 2.19703 2.33055 3.61478 0.75M20.3848 0.75C21.8025 2.33055 22.7423 4.28121 23.0948 6.375"
              stroke="#FFB61A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        title="Withdraw Cancelled"
        description="Your withdraw request 200 BDT has been cancelled"
        date="11 JUN 2023"
      ></NotificationCard>
    </div>
    </div>
  );
}
interface NotificationCardProps {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
}
const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  title,
  description,
  date,
}) => {
  return (
    <div className="p-2 flex gap-3 items-center rounded-sm bg-[#85929E]">
      {icon}
      <div>
        <p className="text-[14px] text-[#FFFFFF] font-medium">{title}</p>
        <p className="text-[12px] text-[#FFFFFF] font-normal">{description}</p>
        <p className="text-[10px] text-[#ffffff83] font-normal">{date}</p>
      </div>
    </div>
  );
};
