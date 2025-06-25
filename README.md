# Introduction
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) with the intention of learning:
- how to set up google authentication and creating protected routes
- how to set up 3rd party authentication regardless
- learn Auth.js (next-auth)

## Getting Started

Just, run the development server as well as install these packages(You don't need all of them):

```bash
npm run dev
# or
npm install

npm install zod

npm install react-hook-form

npm install @mui/material @emotion/react @emotion/styled

npm install next-auth@beta
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You don't really need to install zod or RHF because i removed the login in form because there is no need for it when using third party authentication.

## Thoughts/Self reflection
- Something i learnt while creating this project you shouldn't specify pages as use server because that means only server side logic can appear on that folder so no client side can be nested, so better to not declare that in the page and let it be default server side with client side components in it.
- Another thing i learned is to probably keep all the UI of a page in the app router in a separate component as a whole page instead, easier to manage the client side /server side issues. 
- The new file structure i used in the components folder seems like it is a lot more easier to manage
- Also going forward i believe action folders should also have a separate folder in the lib for easy access and reuse
- I was originally using next-auth (4.0) which had some problems involving the session token not being deleted when you used the signout function from next-auth fixed it by using auth.js(the latest version) and then using the redirect: true as a parameter in the sign out function to make sure it cleared all the cookies
- There were also problems with the callbacks not functioning as they should such as not redirecting to the dashboard after signing in which i fixed by adding the callbacks parameter in the auth.ts file
-  over all the set up of google authentication is pretty standard since i haven't had to do much custom coding just followed the documentation, added the code and just trouble shooted some problems with minimal trouble(other than the token deletion part)
-  Keeping this repository as a reference and a good boiler plate template which i can use as reference should i wish to use google authentication again.


