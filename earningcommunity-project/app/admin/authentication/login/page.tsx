"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import Cookies from "js-cookie";
import AuthLogin from "../auth/AuthLogin";
import PageContainer from "../../(DashboardLayout)/components/container/PageContainer";
import Logo from "../../(DashboardLayout)/layout/shared/logo/Logo";
import useAuth from "@/hooks/useAuth";
import { FormEvent, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { postApi } from "@/functions/API";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface values {
  phone: string;
  password: string;
}

const Login2 = () => {
  const { isAdmin, reloadAuth } = useAuth();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState<values>({
    phone: "",
    password: "",
  });
  useEffect(() => {
    if (isAdmin) {
      redirect("/admin");
    }
  }, [isAdmin]);
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    const id = toast.loading("Trying to login. Please wait...");

    try {
      const res = await postApi("/apis/auth/login", {
        password: formData.password,
        phone: formData.phone,
      });

      if (!res.data.user.isAdmin) {
        return toast.update(id, {
          render: "Admin login is required",
          type: "warning",
          isLoading: false,
        });
      }

      Cookies.set("token", res.data.userToken);
      toast.update(id, {
        render: "Login successful",
        type: "success",
        isLoading: false,
      });
      reloadAuth();
    } catch (error: any | AxiosError | TypeError) {
      toast.update(id, {
        render: error.response.data.error,
        type: "error",
        isLoading: false,
      });
    } finally {
      setDisabled(false);
      setTimeout(() => {
        toast.dismiss(id);
      }, 2000);
    }
  };
  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                disabled={disabled}
                onChangeForm={setFormData}
                formValue={formData}
                onSubmit={handleLogin}
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Your Social Campaigns
                  </Typography>
                }
                subtitle={<></>}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default Login2;
