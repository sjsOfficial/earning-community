"use client";
import LoaderScreen from "@/app/admin/(DashboardLayout)/components/shared/LoaderScreen";
import { useData } from "@/app/providers/DataProvider";
import WalletHistoryCard from "@/components/WalletHistoryCard";
import { getApi, postApi } from "@/functions/API";
import useAuth from "@/hooks/useAuth";
import walletTypes from "@/types/walletTypes";
import { Box, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "#85929E",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Wallets() {
  const { reloadAuth } = useAuth();
  const [wallet, setWallet] = useState<walletTypes[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<walletTypes>();
  const [walletHolderName, setWalletHolderName] = useState("");
  const [walletNumber, setWalletNumber] = useState("");
  const [openWallet, setOpenWallet] = React.useState(false);
  const handleOpenWallet = () => setOpenWallet(!openWallet);
  const { userWalletHistory } = useData();
  const handleSelectWallet = (event) => {
    const selectedName = event.target.value;
    const selectedOption = wallet.find(
      (option) => option.name === selectedName
    );
    setSelectedWallet(selectedOption);
  };
  useEffect(() => {
    const getWallet = async () => {
      try {
        const res = await getApi("/apis/wallets");
        setWallet(res.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
    getWallet();
  }, []);

  const handleCreateWallet = async () => {
    if (!walletHolderName  && !selectedWallet && !walletNumber) {
      return alert("Fill up all field");
    }
    const toastId = toast.loading("Please wait...");
    try {
      const res = await postApi("/apis/user/wallets", {
        number: walletNumber,
        walletHolderName: walletHolderName,
        wallet: {
          name: selectedWallet?.name,
          id: selectedWallet?.id,
          icon: selectedWallet?.icon,
          cashout: selectedWallet?.cashout,
          payment: selectedWallet?.payment,
        },
      });

      reloadAuth();
      toast.update(toastId, {
        render: "Added successful",
        type: "success",
        isLoading: false,
      });
      handleOpenWallet();
    } catch (error: any | AxiosError | TypeError) {
      toast.update(toastId, {
        render: error.response.data.error,
        type: "error",
        isLoading: false,
      });
      handleOpenWallet();
    } finally {
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
      handleOpenWallet();
    }
  };
  return (
    <div className="bg-[#85929E] mx-2 rounded-[10px] ">
      <div className="flex items-center justify-between p-4">
        <p className="text-[20px] md:text-[24px] text-[#FFFFFF] font-normal md:font-semibold">
          My Wallets
        </p>
        <div
          onClick={handleOpenWallet}
          className="flex gap-2 items-center cursor-pointer hover:scale-105 duration-300"
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0.958862V12.5822M16.5 6.77055H1.5"
              stroke="#00FF0A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-[20px] md:text-[24px] text-[#00FF0A] font-normal md:font-semibold">
            Add Wallet
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-2 p-4">
          {userWalletHistory ? (
            userWalletHistory.map((data, i) => (
              <WalletHistoryCard data={data} key={i}></WalletHistoryCard>
            ))
          ) : (
            <LoaderScreen></LoaderScreen>
          )}
        </div>
      </div>
      {/* show add wallet modal  */}
      <Modal
        open={openWallet}
        onClose={handleOpenWallet}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign={"center"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Add Wallet
          </Typography>
          <div className="flex flex-col mt-4 space-y-4">
            <TextField
              color="success"
              id="standard-basic"
              label="Wallet Holder Name"
              variant="standard"
              onChange={(e)=>setWalletHolderName(e.target.value)}
            />
            <TextField
              color="success"
              id="standard-basic"
              label="Wallet Number"
              variant="standard"
              onChange={(e)=>setWalletNumber(e.target.value)}
            />
            <TextField
              variant="standard"
              id="standard-basic"
              select
              label="Select Wallet Type"
              defaultValue="Bkash"
              helperText="Please select your wallet"
              onChange={handleSelectWallet}
            >
              {wallet?.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <div
              onClick={handleCreateWallet}
              className="bg-[#2E4053] rounded-[10px] text-center py-2 cursor-pointer  hover:scale-105 duration-300"
            >
              Update Now
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
