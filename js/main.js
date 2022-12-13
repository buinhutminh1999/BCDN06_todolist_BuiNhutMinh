import ToDoListServices from "./ToDoListServices.js";
const toDoSV = new ToDoListServices()
import ToDoList from "./ToDoList.js";
let newArr = []
console.log(newArr)

const getList = () => { 
    toDoSV.getList().then((result) => { 
        renderList(result.data)
     })
 }

 getList()

 window.getList = getList

 const sortAZ = () => { 
    toDoSV.getList().then((result) => { 
        result.data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            return 0;
          });
          renderList(result.data)
     })
  }

  window.sortAZ = sortAZ

  const sortZA = () => { 
    toDoSV.getList().then((result) => { 
        result.data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            return 0;
          });
          renderList(result.data)
     })
  }

  window.sortZA = sortZA

 const renderList = (mang) => { 
    const newArr = mang.map((item) => { 
        let {name, id} = item
        return `<li id="doneNote-${id}">${name}
        <div><i class="fa-sharp fa-solid fa-trash" onclick="deleteNote(${id})"></i >
        <i class="fa-regular fa-circle-check" onclick="checkedNote('${id}','${name}')"></i>
        </div>
       </li>
        `        
     })

     document.querySelector('#todo').innerHTML = newArr.join('')
}
window.renderList = renderList

const setLocal = () => {
    localStorage.setItem('noteDone', JSON.stringify(newArr))
  }

  window.setLocal = setLocal
  

let deleteNote = (id) => { 
    toDoSV.deleteNoteMain(id).then((result) => { 
        getList(result.data.id)
     })
 }

window.deleteNote = deleteNote

const checkedNote = (id,name) => { 
   deleteNote(id)
   newArr = [...newArr,name]
   console.log(newArr)
   setLocal()
   getLocal()
 }
 window.checkedNote = checkedNote


 const renderNoteDone = () => {   
    let val = ''     
    for(const index in newArr){
        val += `<li>${newArr[index]} 
        <div><i class="fa-sharp fa-solid fa-trash" onclick="deleteArr(${index})"></i >
        <i class="fa-solid fa-circle-check" style="color:green"></i>
        </div>
       </li>`
   }
   document.querySelector('#completed').innerHTML = val
 }
 
  window.renderNoteDone = renderNoteDone

  const deleteArr = (id) => { 
    newArr.splice(id,1)
    setLocal()
    getLocal()
   }

   window.deleteArr = deleteArr

  const getLocal = () => {
    if (localStorage.getItem('noteDone') != null) {
        newArr = JSON.parse(localStorage.getItem('noteDone'))
        renderNoteDone()
    }
  }
  window.getLocal = getLocal
  getLocal()

  const addNote =  () => { 
    let valNote = document.querySelector('#newTask').value;
    let todolist = new ToDoList(valNote)
    toDoSV.addNote(todolist).then((result) => { 
        getList(result.data)
     })
}

    
window.addNote = addNote


const getDate = () => { 
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    d.getFullYear();
    document.querySelector('.card__title p').innerHTML = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
 }
 window.getDate = getDate

 getDate()
