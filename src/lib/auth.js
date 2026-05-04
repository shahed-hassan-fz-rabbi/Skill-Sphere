export const auth = betterAuth({
  database: mongodbAdapter(client.db()),
  trustedOrigins: [
    "https://skill-sphere-xi-gules.vercel.app",
    "http://localhost:3000"
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});