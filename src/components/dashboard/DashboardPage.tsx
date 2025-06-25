import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import LogoutButton from './sub-components/LogOutButton'
import WebsiteHeader from './sub-components/WebsiteHeader'

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