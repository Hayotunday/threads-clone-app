import mongoose from 'mongoose'

let isConnected = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if(!process.env.MONGODB_URI) return console.log('MONGODB URI NOT FOUND')
  if(isConnected) return console.log('ALREADY CONNECTED TO MONGODB')
  
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    isConnected = true;

    console.log('CONNECTED TO MONGODB')
  } catch (error) {
    console.log(error)
  }
}