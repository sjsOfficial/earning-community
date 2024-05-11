"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { userData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userData) {
      router.push("/");
    }
  }, [userData, router]);

  return userData ? <>{children}</> : null;
};

export default PrivateRoute;
