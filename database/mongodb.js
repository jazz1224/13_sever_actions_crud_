import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readState) {
    console.log(first);
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("mongodb Connected"))
    .catch((error) => console.log(error));
};

export default connectDB;