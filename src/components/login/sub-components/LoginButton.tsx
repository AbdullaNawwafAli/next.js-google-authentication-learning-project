import { login } from '@/lib/actions/auth'
import { Button } from '@mui/material'
import React from 'react'

const LoginButton = () => {
  return (
    <Button
        onClick={() => login()}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-150"
      >
        Sign In
      </Button>
  )
}

export default LoginButton