import { config } from "dotenv";

config()

//se llama a la variable de entrono 
export const MONGO_URI = process.env.DB_URI
export const  PORT =process.env.PORT || 3000