import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


 const dbConnect = async ()=>{
    try{
        console.log("hello");
        const connectionObject = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("suceefully connected",connectionObject.connection.host);   
    }catch(err){
        console.log("error bro",err);
        process.exit(1);
    } 
}
export default dbConnect;
