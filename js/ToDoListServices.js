export default class ToDoListServices{
    getList = () => { 
        return axios({
            method: 'get',
            url: 'https://636a3c5ec07d8f936d974716.mockapi.io/TODO',

          })
     }

     addNote = (dataList) => { 
        return axios({
            method: 'POST',
            url: 'https://636a3c5ec07d8f936d974716.mockapi.io/TODO',
            data: dataList,
          })
     }

     deleteNoteMain = (id) => { 
        return axios({
            method: 'DELETE',
            url: `https://636a3c5ec07d8f936d974716.mockapi.io/TODO/${id}`,
          })
     }
}
