import { Router } from "express";
//import Task from "../model/Task";

import { renderTasks, createTask,renderTaskEdit, editTask, deleteTask, taskToggleDone } from "../controllers/task.controller";

const indexRouter = Router();

//Listar tareas
indexRouter.get("/", renderTasks);

//guardando tareas
indexRouter.post("/task/add", createTask);

//obteniendo el id de la tabla para psasarlo al fomrulario de editar
// Rennviar del index al form de edit
indexRouter.get("/edit/:id",renderTaskEdit );

//guaradr tareas con los datos ya cambiados Actualizar
indexRouter.post("/edit/:id", editTask);
        
//elimar tareas - se trabaja con la accion GET en este caso
indexRouter.get("/delete/:id", deleteTask);

//sasber si la traea esta hecha o no  de true a false

indexRouter.get("/toggleDone/:id", taskToggleDone);

export default indexRouter;
