import { postApi, putApi } from "@/functions/API";
import { packageTypes, packageTypesString } from "@/types/packageHistoryTypes";
import { Box, Button, duration, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
interface Props {
  data?: packageTypes;
  onClose: () => void;
  onProgress: () => void;
  onProgressEnd: () => void;
}

export default function PackageFrom({
  data,
  onClose,
  onProgress,
  onProgressEnd,
}: Props) {
  const [formData, setFormData] = useState<packageTypes>({
    title: "",
    price: 50,
    duration: 1,
    withdrawLimit: 1000,
    description: "",
    date: "",
    id: "",
  });
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);
  const addPackage = async (e: any) => {
    e.preventDefault();

    onProgress();
    try {
      await postApi("/apis/admin/packages", {
        title: formData.title,
        price: formData.price.toString(),
        duration: formData.duration.toString(),
        withdrawLimit: formData.withdrawLimit.toString(),
        description: formData.description,
      });
      onProgressEnd();
      onClose();
      toast.success("Package added successfully");
    } catch (error: any) {
      onProgressEnd();
      onClose();
      toast.error(error.response.data.error);
    }
  };
  const updatePackage = async (e: any) => {
    e.preventDefault();

    onProgress();
    try {
      await putApi("/apis/admin/packages", {
        title: formData.title,
        price: formData.price.toString(),
        duration: formData.duration.toString(),
        withdrawLimit: formData.withdrawLimit.toString(),
        description: formData.description,
        id:formData.id
      });
      onProgressEnd();
      onClose();
      toast.success("Package updated successfully");
    } catch (error: any) {
      onProgressEnd();
      onClose();
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="w-[calc(100%-20px)] lg:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-md">
      <p className="font-medium text-xl text-center mt-4 mb-6">
        {data ? "Update" : "Add"} Package
      </p>
      <form onSubmit={data ? updatePackage : addPackage}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextField
            name="title"
            required
            onChange={(e) =>
              setFormData((d) => ({ ...d, title: e.target.value }))
            }
            InputProps={{ inputProps: { maxLength: 50, minLength: 5 } }}
            value={formData.title}
            sx={{ width: "100%" }}
            placeholder="max 50 letter and min 5 letter"
            label="Package Title"
            variant={"standard"}
          />
          <TextField
            required
            name="price"
            onChange={(e) =>
              setFormData((d) => ({ ...d, price: parseInt(e.target.value) }))
            }
            type="number"
            value={formData.price.toString()}
            sx={{ width: "100%" }}
            placeholder="Package Price"
            label="Package Price"
            variant={"standard"}
          />
          <TextField
            name="duration"
            onChange={(e) =>
              setFormData((d) => ({ ...d, duration: parseInt(e.target.value) }))
            }
            required
            type="number"
            value={formData.duration.toString()}
            sx={{ width: "100%" }}
            placeholder="Eg. 1 month"
            label="Package Duration (month)"
            variant={"standard"}
          />
          <TextField
            name="withdrawLimit"
            type={"number"}
            required
            onChange={(e) =>
              setFormData((d) => ({
                ...d,
                withdrawLimit: parseInt(e.target.value),
              }))
            }
            value={formData.withdrawLimit.toString()}
            sx={{ width: "100%" }}
            placeholder="Eg. 12000 TK"
            label="Package Withdraw Limit (TK)"
            variant={"standard"}
          />
        </div>
        <TextField
          name="description"
          required
          onChange={(e) =>
            setFormData((d) => ({ ...d, description: e.target.value }))
          }
          InputProps={{ inputProps: { maxLength: 500 } }}
          value={formData.description}
          sx={{ width: "100%", marginTop: 2 }}
          placeholder="Package Description max 500 character and min 50 character"
          label="Package Description"
          multiline
          rows={4}
          type={"text"}
          variant={"standard"}
        />
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
