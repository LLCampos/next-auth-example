import NextAuth, { NextAuthOptions } from "next-auth"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    {
      id: 'rails',
      name: 'Rails',
      type: 'oauth',
      idToken: false,
      clientId: '348d26c2-c077-453b-9339-6a401d94598a',
      wellKnown: 'http://localhost:3000/.well-known/openid-configuration',
      authorization: {
        params: { response_type: 'token' },
      },
      checks: [],
      profile(profile) {
        return {
          id: '1234',
          name: 'name',
          email: 'email@email.com',
          image: undefined,
        }
      },
    },

  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
