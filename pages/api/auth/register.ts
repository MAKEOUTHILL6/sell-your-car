import type { NextApiRequest, NextApiResponse } from "next";
import initDB from "../../../database/config";
import Users from "../../../model/User";
import bcrypt from 'bcrypt';

type Data = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {

  initDB().catch(err => res.json({error: err}));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({ error: "Not valid data" });
    }

    const { username, email, password } = req.body;

    const existing = await Users.findOne({ username });

    const existingEmail = await Users.findOne({ email });

    if(existing){
      throw('Username already registered');
    }

    if(existingEmail){
      throw('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let createdUser = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.json({user: createdUser});

  } else {
    res.status(500).json({ message: "HTTP method not allowed" });
  }
}
