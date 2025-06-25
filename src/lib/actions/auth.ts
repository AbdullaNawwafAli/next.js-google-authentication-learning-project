"use server";
import { signIn, signOut } from '@/app/auth'

export const login = async () => {
    await signIn('google',{redirectTo: '/dashboard'})
}

export const logout = async () => {
    try {
        // Force redirect to home page and clear all session data
        await signOut({
            redirectTo: '/',
            redirect: true
        });
    } catch (error) {
        console.error('Logout error:', error);
        // Fallback: redirect to home page even if signOut fails
        throw new Error('Failed to logout properly');
    }
}