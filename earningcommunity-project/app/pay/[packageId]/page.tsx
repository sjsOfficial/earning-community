"use client";
import { getApi, postApi, putApi } from "@/functions/API";
import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
export default function Pay({ params }: { params: { packageId: string } }) {
  const [walletDetails, setWalletDetails] = useState<wallets[] | null>();
  const [walletName, setWalletName] = useState<walletNameTypes | null>();
  const [id, setId] = useState<wallets | null>();
  const searchParams = useSearchParams();
  const amount = parseInt(searchParams.get("amount") as string) || 0;
  const redirectUrl = (searchParams.get("redirect") as string) || "/";
  const cancelUrl = (searchParams.get("cancelUrl") as string) || "/";
  const user = (searchParams.get("user") as string) || null;
  const { packageId } = params;
  const [loader, setLoader] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(5 * 60);
  const [transactionId, setTransactionId] = useState<string>();

  const onTimerEnd = () => {
    window.location.href = cancelUrl;
  };
  const startTimer = () => {
    setTimeRemaining(5 * 60);
  };
  const resetTimer = () => {
    setTimeRemaining(0);
  };
  useEffect(() => {
    getApi("/apis/wallets", {
      check: "dsf",
    }).then((res) => {
      setWalletDetails(res.data);
      setLoader(false);
    });
  }, []);
  useEffect(() => {
    if (id) {
      setLoader(true);
      postApi("/apis/wallets", {
        walletId: id.id,
      }).then((res) => {
        setWalletName(res.data);
        setLoader(false);
        resetTimer();
        startTimer();
      });
    }
  }, [id]);

  useEffect(() => {
    let interval: any;
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      onTimerEnd(); // Call the function when timer ends
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [timeRemaining, onTimerEnd]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoader(true);
    putApi("/apis/wallets", {
      packageId: packageId,
      adminWalletId: walletName?.id,
      transactionId: transactionId,
      userId: user,
    })
      .then((res) => {
        console.log(res.data);
        setLoader(false);
        toast("Payment successful", {
          type: "success",
        });
        window.location.href = redirectUrl;
      })
      .catch((error) => {
        toast(error.response.data.error, {
          type: "error",
        });
        setLoader(false);
      });
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  if (loader) {
    return (
      <div className="h-screen w-screen text-white  bg-[#2E4053] flex justify-center items-center">
        <h1 className="text-3xl">Loading....</h1>
      </div>
    );
  }
  return (
    <div className="h-screen w-screen text-white flex justify-center items-center  px-5 py-3">
      <div className="max-w-[500px] min-h-[calc(100vh-100px)] overflow-y-scroll bg-[#2E4053] px-4 py-2 rounded-md">
        <p className="text-center text-3xl py-5">D-Pay</p>
        <p className="text-center">
          D pay is a offline payment system for hand to hand transaction system
        </p>
        <p className="text-center my-1">Select your suitable payment method</p>
        {id && walletName ? (
          <div className="my-2">
            <div
              onClick={() => {
                setId(null);
                setWalletName(null);
              }}
              className="flex gap-2 text-green-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              Back
            </div>
            <div className="grid justify-center justify-items-center my-5">
              <Image
                className="rounded-md"
                width={80}
                height={80}
                src={id.icon}
                alt={id.name}
              />
              <div className="my-2 text-center text-lg">{id?.name}</div>
              <div className="text-center text-md">
                {id.cashout
                  ? `Please cash-out ${amount}BDT with this number ${walletName.number} with in 5minutes and don't close the window`
                  : id.payment
                  ? `Please make payment ${amount}BDT with this number ${walletName.number} with in 5minutes and don't close the window`
                  : `Please send money ${
                      amount + (1.5 * amount) / 100
                    }BDT with this number ${
                      walletName.number
                    } with in 5minutes and don't close the window. 1.5% charge will applicable`}
              </div>
              <div className="text-center text-3xl my-2">
                Timer: {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 flex-wrap justify-center my-2">
            {walletDetails?.map((doc, i) => (
              <div
                key={i}
                onClick={() => setId(doc)}
                className="hover:opacity-5 p-1 cursor-pointer rounded-md bg-white text-black"
              >
                <Image src={doc.icon} alt={doc.name} height={80} width={80} />
                <div className="text-sm w-[80px] text-center ">{doc.name}</div>
              </div>
            ))}
          </div>
        )}
        {id && walletName && (
          <form onSubmit={onSubmit} className="grid gap-3">
            <input
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="px-2 py-2 rounded-md text-black"
              required
              placeholder="Enter TranX ID"
              type="text"
            />
            <button className="bg-green-500 rounded-md py-2 px-2" type="submit">
              Submit
            </button>
          </form>
        )}

        <button
          className="bg-red-500 rounded-md py-2 px-2 w-full my-6"
          onClick={onTimerEnd}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
