import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import LogoutButton from './LogOutButton'
import WebsiteHeader from './WebsiteHeader'

const DashboardPage = () => {
    
  return (
    <>
    <WebsiteHeader />
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        borderBottom: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      
      <Typography variant="h1">you logged in</Typography>
      
      <Link href="/">
      <LogoutButton />
      </Link>
      
    </Box>
    </>
    
  )
}

export default DashboardPage