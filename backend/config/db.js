//This function is responsible for connecting to a MongoDB 
//database using Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js.
const mongoose=require("mongoose");
const connectDB=async()=>{
    try {
 //This line uses mongoose.connect() to establish a connection to the MongoDB
// database. The await keyword makes sure that the connection process is completed before moving to the next line.
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,//These options are used to
             //avoid deprecation warnings and to ensure compatibility with the latest versions of MongoDB.
        });
        console.log(`MongoDB Connected ${conn.connection.host}`); //if connection is successfull it will log a message with
        //the host of the db
    } catch (error) 
    {
        console.log(`Error: ${error.message}`);
        process.exit();
        
    }
}
module.exports=connectDB;