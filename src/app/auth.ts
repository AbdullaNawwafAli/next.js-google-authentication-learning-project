import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        
      ],
      callbacks: {
        async redirect({ url, baseUrl }) {
          // Allow relative URLs
          if (url.startsWith('/')) return url;
          
          // Allow URLs on your own domain only
          if (url.startsWith(baseUrl)) return url;
          
          // Otherwise, fallback to homepage or some safe URL
          return baseUrl;
        }
      }
})