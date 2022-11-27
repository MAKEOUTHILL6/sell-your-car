import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import Users from "../../../model/User";
import bcrypt from 'bcrypt';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req) {


                const existing = await Users.findOne({ email: credentials?.email });
                if (!existing) {
                    throw new Error('No such user');
                }

                let isValid = await bcrypt.compare(credentials.password, existing.password);

                if (!isValid) {
                    throw new Error('Invalid password or username');
                }

                return existing;
            },
            credentials: undefined
        })
    ],
    secret: process.env.SECRET
})