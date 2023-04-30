import Task from "../model/Task";

//listar tareas
export const renderTasks = async (req, res) => {
  //const tasks = await Task.find() //devuelve objetos mongodb
  const tasks = await Task.find().lean(); //devuelve objetos js
  // console.log(tasks);
  res.render("index", { tasks: tasks });
};

//guardando tareas
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSave = await task.save();
    console.log(taskSave);
    res.redirect("/");
  } catch (error) {
    /* MongoServerError: E11000 duplicate key error collection: 
      db.tasks index: title_1 dup key: { title: "mi primera tarea" }*/
    console.log(error);
  }
};

//obteniendo el id de la tabla para psasarlo al fomrulario de editar
// Rennviar del index al form de edit
export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
    console.log(task);
  } catch (error) {
    console.log(error.message);
  }
};

//guaradr tareas con los datos ya cambiados UPDATE
export const editTask = async (req, res) => {


  try {
    const { id } = req.params;
    //buscar el id y actualizar  , req.body son los nuevos datos
    const task = await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

//elimar tareas - se trabaja con la accion GET en este caso
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    //buscar el id y eliminar
    const task = await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

//sasber si la traea esta hecha o no  de true a false
export const taskToggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    //buscar el id para cambiara el estado de done a true o false
    const task = await Task.findById(id);
    //cambiar el estado
    task.done = !task.done; //se le pone el contrario si esta en true cambia false
    await task.save();
    console.log(task);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};
