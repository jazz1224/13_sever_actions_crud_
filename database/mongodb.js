import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readState) {
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URI)
    .then()
    .catch((error) => console.log(error));
};

export default connectDB;
