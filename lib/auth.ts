import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const ALLOWED_EMAILS = ["chriscarey09@gmail.com", "alexismcrandall@gmail.com"]
const ALLOWED_DOMAINS = ["warp.dev"]

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) {
        return false
      }

      // Check if email is in allowed list
      if (ALLOWED_EMAILS.includes(user.email)) {
        return true
      }

      // Check if email domain is allowed
      const emailDomain = user.email.split('@')[1]
      if (ALLOWED_DOMAINS.includes(emailDomain)) {
        return true
      }

      // Deny access for all other emails
      return '/auth/error?error=AccessDenied'
    },
    async session({ session, token }) {
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
