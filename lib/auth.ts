import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { v4 } from 'uuid';

import { authConfig } from "@/auth.config";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  // move to use env variable
  secret: 'fHBhYy+fanh4+HSNfZ5G1ph3nYBvhckVfTcEV6ZKP3o=',
  providers: [
    Credentials({
      credentials: {
        userName: {},
        jobTitle: {},
      },
      authorize: async (credentials) => {
        const user = {
          id: v4(),
          ...credentials
        }
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with their profile data
        return user;
      },
    }),
  ],
})