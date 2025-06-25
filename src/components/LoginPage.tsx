'use client'
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { login } from "@/lib/actions/auth";

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
      <Button
        onClick={() => login()}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-150"
      >
        Sign In
      </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
