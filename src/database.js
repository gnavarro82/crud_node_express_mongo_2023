import { connect } from "mongoose";
import { MONGO_URI } from "./config";


/**
 *connect('mongodb+srv://gnavarro82:navarro@cluster0.dtobank.mongodb.net/db?retryWrites=true&w=majority');
 */

// connection to db usamos la variable de entorno 
(async () => {
  try {
    const db = await connect(MONGO_URI);
    console.log("Db connectect to Mongo Atlas", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
