"use client";
import { Button, TextField, Typography } from "@mui/material";
import PageContainer from "../components/container/PageContainer";
import DashboardCard from "../components/shared/DashboardCard";
import { useEffect, useState } from "react";
import { getApi, postApi, putApi } from "@/functions/API";
import { toast } from "react-toastify";
import LoaderScreen from "../components/shared/LoaderScreen";
interface adminType {
  creditPerSecond: number;
  id: string;
}
const Settings = () => {
  const [admin, setAdmin] = useState<adminType>({ creditPerSecond: 0, id: "" });
  useEffect(() => {
    getApi("/apis/admin").then((res) => {
      setAdmin(res.data);
    });
  }, []);
  const submit = (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Updating..Please wait");
    putApi("/apis/admin", {
      creditPerSecond: admin.creditPerSecond,
      id: admin.id,
    })
      .then((res) => {
        setAdmin(res.data);
        toast.update(toastId, {
          render: "Update Successful",
          type: "success",
          isLoading: false,
        });
      })
      .catch((error) => {
        toast.update(toastId, {
          render: error.response.data.error,
          type: "error",
          isLoading: false,
        });
      })
      .finally(() => {
        setTimeout(() => {
          toast.dismiss(toastId);
        }, 2000);
      });
  };
  if (!admin.creditPerSecond) {
    return <LoaderScreen />;
  }
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Application Settings">
        <form onSubmit={submit}>
          <div>
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Credit Per Second"
              variant="outlined"
              value={admin.creditPerSecond.toString()}
              onChange={(e) =>
                setAdmin((d) => ({
                  ...d,
                  creditPerSecond: parseFloat(e.target.value),
                }))
              }
            />
          </div>
          <Button
            className="bg-blue-400 w-[100px] mt-6 mb-3 rounded-md"
            variant={"contained"}
            type="submit"
          >
            Save
          </Button>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default Settings; 
