import mongoose from "mongoose";

const Connection = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log(`database connected successfully`);
    } catch (error) {
        console.log(`error while connecting database`);
    }
}

export default Connection;