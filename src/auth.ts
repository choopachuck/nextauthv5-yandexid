import NextAuth from "next-auth";

import YandexProvider from "next-auth/providers/yandex";

const authOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
