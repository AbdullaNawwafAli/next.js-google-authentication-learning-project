'use client';
import { Button } from '@mui/material';
import { logout } from '@/lib/actions/auth';

export default function LogoutButton() {
 
  
  return (
    <Button 
      onClick={() =>logout()} 
      variant="contained" 
      color="primary"
    >
      Log Out
    </Button>
  );
}