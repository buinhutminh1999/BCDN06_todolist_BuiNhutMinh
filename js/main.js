import ToDo from './ToDo.js'
import ToDoList from './ToDoList.js';

let todolist = new ToDoList()

const sortAZ = () => {
  todolist.toDoArray.sort((a, b) => {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  todolist.renderToDo()
}

window.sortAZ = sortAZ

const sortZA = () => {
  todolist.toDoArray.sort((a, b) => {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });
  todolist.renderToDo()
}
window.sortZA = sortZA

const addNote = () => {
  let content = document.querySelector('#newTask').value;
  let id = 0
  for (const value of todolist.toDoArray) {
    if (id == value.id) {
      id++
    }
  }
  let todo = new ToDo(id, content, 0)
  todolist.addToDo(todo)
  todolist.renderToDo()
  console.log(todolist.toDoArray)
}

window.addNote = addNote;

const removeToDo = (id) => {
  todolist.toDoArray.splice(id, 1)
  console.log(todolist.toDoArray)
  todolist.renderToDo()
  todolist.updateToDoMain()
}
window.removeToDo = removeToDo

const updateToDo = (idArr) => {
  let { id, content, status } = todolist.toDoArray[idArr]
  let todo = new ToDo(id, content, 1)
  todolist.toDoArray[idArr] = todo
  todolist.updateToDoMain()
  todolist.renderToDo()
  console.log(idArr)
}

window.updateToDo = updateToDo

const getDate = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  d.getFullYear();
  document.querySelector('.card__title p').innerHTML = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}
window.getDate = getDate

getDate()