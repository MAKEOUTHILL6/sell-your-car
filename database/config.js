import mongoose from "mongoose";

const initDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL);

    if (connection.readyState === 1) {
        return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default initDB;
