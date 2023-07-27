import 'dotenv/config';
import mongoose from "mongoose"
const connectDB = async () => {
    try {
      const connect = await mongoose.connect(process.env.DATABASE);
      console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
      );
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  
  export default connectDB;