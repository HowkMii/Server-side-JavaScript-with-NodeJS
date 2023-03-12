const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(todolist);
            }, 2000);
          });
    
}
// Define a function to add a todo to the todolist array
createTodo = async (todo) => {
  await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todo && todo.title && todo.due_on && todo.status) {
          todolist.push(todo);
          resolve(todolist);
          

        } else {
          reject("No data to be added");
          

          console.log('err')
        }
      }, 1000);
    });
    return todolist;
  }
  
module.exports ={
    createTodo,getAllTodos
}