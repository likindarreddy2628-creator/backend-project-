import dotenv from "dotenv"
dotenv.config({path:"./.env"})
import mongoose from "mongoose";
import express from 'express';
import dbConnect from "./db/index.js";

dbConnect();







// const app = express();
// (async ()=>{
//   try{
//     console.log("in try")
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log("after await")
//     app.on("error",()=>{
//             console.log("error occured",error);
//         })
//     app.listen(process.env.PORT,()=>{
//         console.log(`servers is running on port ${process.env.PORT}`)
//     })
//   }catch(err){
//     console.log(err);
//   }
// })()

// console.log("out")
