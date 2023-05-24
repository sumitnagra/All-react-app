import mongoose from "mongoose";
const uri = process.env.URI || "mongodb://127.0.0.1:27017/sumit";

const connectMongo = async () => {
 mongoose.connect(uri, () => {
        console.log("Connected Mongo Successfully")
    })
}

export default connectMongo 