import express from "express";
import {engine} from "express-handlebars"; // el probloema era que se import engine
import path from "path"
import indexRouter from "./routes/index.routes";
import ('./database')
import morgan from "morgan"

const app =  express()

/* configuracion de handlebars*/ 
app.set("views", path.join(__dirname, "views"));

/*https://www.npmjs.com/package/express-handlebars
se uso codigo actual
*/

//app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


//no es necesario layoutsDir: path.join(app.get("views"), "partials"),
//handelbar ahora busca sola partials
app.engine(".hbs",
engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaulLayout: "main",
    extname: ".hbs",
  })
  );

app.set('view engine', '.hbs')
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))//

app.use(indexRouter)

// public route
app.use(express.static(path.join(__dirname, "public")));



export default app