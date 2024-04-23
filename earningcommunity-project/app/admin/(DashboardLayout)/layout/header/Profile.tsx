import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Cookies from "js-cookie";

import { IconUser, IconShieldHalf, IconSettings } from "@tabler/icons-react";
import { getApi, postApi } from "@/functions/API";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const { reloadAuth, isAdmin } = useAuth();
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  // useEffect(() => {
  //   if (isAdmin) {
  //     redirect("/admin/authontication");
  //   }
  // }, [isAdmin]);

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src="/images/profile/user-1.jpg"
          alt="image"
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <Link href="/admin/access">
          <MenuItem>
            <ListItemIcon>
              <IconUser width={20} />
            </ListItemIcon>
            <ListItemText>Account Access</ListItemText>
          </MenuItem>
        </Link>

        {/* <Link href="/admin/security">
          <MenuItem>
            <ListItemIcon>
              <IconShieldHalf width={20} />
            </ListItemIcon>
            <ListItemText>Security</ListItemText>
          </MenuItem>
        </Link> */}
        <Link href={"/admin/settings"}>
          <MenuItem>
            <ListItemIcon>
              <IconSettings width={20} />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
        </Link>
        <Box mt={1} py={1} px={2}>
          <Button
            onClick={async () => {
              const toastId = toast.loading("Please wait...");
              try {
                await getApi("/apis/user/logout");
                toast.update(toastId, {
                  render: "Success",
                  type: "success",
                });
                Cookies.remove("token");
                window.location.reload();
              } catch (error: any) {
                toast.update(toastId, {
                  render: error.response.data.error,
                  type: "error",
                });
              } finally {
                setTimeout(() => toast.dismiss(toastId), 2000);
                
              }
            }}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
