/**
 con babel ya no vpoy a importat asi require('expres)
forma de ejecutar babel npx babel-node src/index.js  
 
**/
import './config'
import app from "./app"

// Inicializa el servidor

app.listen(3000)
console.log('servidor en puerto 300')