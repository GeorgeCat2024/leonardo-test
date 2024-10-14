import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      if (account) {
        token.user = user;
      }

      if (trigger === "update" && session) {
        console.log('update', session)
        token = {...token, user : session.user}
        return token;
      };

      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      session.user = token.user;
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;