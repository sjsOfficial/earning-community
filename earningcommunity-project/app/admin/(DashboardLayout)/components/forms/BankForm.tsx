import { getApi, postApi, putApi } from "@/functions/API";
import { adminWalletTypes } from "@/types/adminWalletTypes";
import { packageTypes, packageTypesString } from "@/types/packageHistoryTypes";
import walletTypes from "@/types/walletTypes";
import {
  Box,
  Button,
  duration,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
interface Props {
  data?: adminWalletTypes;
  onClose: () => void;
  onProgress: () => void;
  onProgressEnd: () => void;
}

export default function BankForm({
  onClose,
  onProgress,
  onProgressEnd,
}: Props) {
  const [formData, setFormData] = useState<adminWalletTypes>({
    number: "",
    walletId: "",
    date: "",
    id: "",
  });
  const [walletId, setWalletId] = useState("");
  const [data, setData] = useState<walletTypes[]>();
  useEffect(() => {
    getData();
  }, []);
  const addPackage = async (e: any) => {
    e.preventDefault();

    onProgress();
    try {
      await postApi("/apis/admin/wallet", {
        number: formData.number,
        walletId: walletId,
      });
      onProgressEnd();
      onClose();
      toast.success("Wallet added successfully");
    } catch (error: any) {
      onProgressEnd();
      onClose();
      toast.error(error.response.data.error);
    }
  };
  const handleChange = (event: SelectChangeEvent) => {
    setWalletId(event.target.value);
  };
  const getData = async () => {
    try {
      const res = await getApi(`/apis/wallets`);
      console.log(res.data);
      
      setData(res.data);
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="w-[calc(100%-20px)] lg:w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-md">
      <p className="font-medium text-xl text-center mt-4 mb-6">Add Wallet</p>
      <form onSubmit={addPackage}>
        <TextField
          name="number"
          required
          onChange={(e) =>
            setFormData((d) => ({ ...d, number: e.target.value }))
          }
          type={"number"}
          InputProps={{ inputProps: { maxLength: 11, minLength: 10 } }}
          value={formData.number}
          sx={{ width: "100%" }}
          placeholder="01*********"
          label="Wallet Number"
          variant={"standard"}
        />
        <FormControl variant="standard" sx={{ width: "100%", mt: 1 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Select Wallet Type
          </InputLabel>
          <Select
            required
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={walletId}
            onChange={handleChange}
            label="Select Wallet Type"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {data?.map((doc,i)=>(
                <MenuItem key={i} value={doc.id}>{doc.name}</MenuItem>
            ))}
        
          </Select>
        </FormControl>
        <Button
          type={"submit"}
          className="bg-blue-400 w-full mt-6 mb-3 rounded-md"
          variant="contained"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
