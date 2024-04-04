import { CircularProgress } from "@mui/material";
import React from "react";

export default function LoaderScreen() {
  return (
    <div className="w-full h-full min-h-[90vh] flex justify-center items-center">
      <CircularProgress />
    </div>
  );
}
