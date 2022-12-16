export default class ToDoList {

  toDoArray = []
  addToDo(todo) {
    this.toDoArray.push(todo)
  }

  renderToDo() {
    let newArr = this.toDoArray.map((item, index) => {
      let { id, content, status } = item
      if(status == 0) {
        return `<li>${content}
        <div><i class="fa-sharp fa-solid fa-trash" onclick="removeToDo(${index})"></i >
        <i class="fa-regular fa-circle-check" onclick="updateToDo(${index})"></i>
        </div>
       </li>`
      }

      })

    document.getElementById('todo').innerHTML = newArr.join('')

  }

  updateToDoMain (){
    let newArr = this.toDoArray.map((item, index) => {
      let { id, content, status } = item
       if(status == 1){
        return `<li>${content}
        <div><i class="fa-sharp fa-solid fa-trash" onclick="removeToDo(${index})"></i >
        <i class="fa-solid fa-circle-check" style="color:green"></i>
                </div>
       </li>`
       }

      })
        document.getElementById('completed').innerHTML = newArr.join('')
  }
}



