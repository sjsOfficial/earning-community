"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
interface wallets {
  name: string;
  id: string;
  icon: string;
  cashout: boolean;
  payment: boolean;
}
interface walletNameTypes {
  id: string;
  number: string;
}
interface searchParamsTypes {
  redirectUrl: string;
  token: string;
}
export default function Pay({
  params,
}: {
  params: { name: string; walletId: string };
}) {
  const [walletDetails, setWalletDetails] = useState<wallets | null>();
  const [walletName, setWalletName] = useState<walletNameTypes | null>();
  const searchParams = useSearchParams()
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    wallet();
  }, []);
  const wallet = async () => {
    const wal = await fetch(`/apis/wallets?id=${params.walletId}`).then((res) =>
      res.json()
    );
    const response = await fetch(`/apis/wallets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        walletId: params.walletId,
      }),
    });

    const name = await response.json();
    setWalletName(name);
    setWalletDetails(wal);
    setTimerRunning(true)
  };
  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // Clean up the timer
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      // Call the function when the timer finishes
      timerFinished();
      setTimerRunning(false); // Stop the timer
    }
  }, [timerRunning, timeLeft]);
  const timerFinished = () => {
    window.close()
  };
  const onComplete=async()=>{
    try {
      window.close()
      window.location.href=searchParams.get("redirectUrl") as string
    } catch (error) {
      window.close()
      alert(error)
    }
  }
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!walletDetails || !walletName) {
    return (
      <div className="h-screen w-screen text-white  bg-[#2E4053] flex justify-center items-center">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen text-white  bg-[#2E4053] px-5 py-3">
      <p className="text-center text-3xl py-5">D-Pay</p>
      <p className="text-center">
        D pay is a offline payment system for hand to hand transaction system
      </p>

      <div className="grid justify-center justify-items-center my-5">
        <Image
          className="rounded-md"
          width={80}
          height={80}
          src={walletDetails.icon}
          alt={walletDetails.name}
        />
        <div className="my-2 text-center text-lg">{walletDetails?.name}</div>
        <div className="text-center text-md">
          {walletDetails.cashout
            ? `Please cash-out with this number ${walletName.number} with in 5minutes and don't close the window`
            : walletDetails.payment
            ? `Please make payment with this number ${walletName.number} with in 5minutes and don't close the window`
            : `Please send money with this number ${walletName.number} with in 5minutes and don't close the window. 1.5% charge will applicable`}
        </div>
        <div className="text-center text-3xl my-2">Timer: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
      </div>
      <form className="grid gap-3">
        <input
          className="px-2 py-2 rounded-md"
          required
          placeholder="Enter TranX ID"
          type="text"
        />
        <button className="bg-green-500 rounded-md py-2 px-2" type="submit">
          Submit
        </button>
      </form>
      <button
        className="bg-red-500 rounded-md py-2 px-2 w-full my-6"
        onClick={timerFinished}
      >
        Cancel
      </button>
    </div>
  );
}
