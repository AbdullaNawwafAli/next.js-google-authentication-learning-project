"use server";
import { signIn, signOut } from '@/app/auth'

export const login = async () => {
    await signIn('google',{redirectTo: '/dashboard'})
}

export const logout = async () => {
    try {
        // Force redirect to home page and clear all session data
        await signOut({
            redirectTo: '/login',
            redirect: true
        });
    } catch (error) {
        console.error('Logout error:', error);
        throw new Error('Failed to logout properly');
    }
}