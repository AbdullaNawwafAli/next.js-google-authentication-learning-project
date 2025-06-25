'use client'
import { Box, Typography } from "@mui/material";
import React from "react";

import LoginButton from "./sub-components/LoginButton";

const LoginPage = () => {
  return (
    <Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
          padding: "20px",
          borderBottom: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Typography variant="h1">LOG IN</Typography>

        <span className="text-gray-400">Not signed in</span>
        <LoginButton />
      </Box>
    </Box>
  );
};

export default LoginPage;
