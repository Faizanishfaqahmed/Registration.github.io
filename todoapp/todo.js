
const form = document.querySelector('#form-input');
const input = document.querySelector('#input-txt');
const listEl = document.querySelector('#task-list');
var isDone = false
showTask();



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var taskBox = document.querySelector('#input-txt')
    
    
        if(taskBox.value.trim()!=0){
            let ls = localStorage.getItem('todo');
            if (ls == null){
                todo = []
                
            }
            else{
                todo = JSON.parse(ls);
            }
         var done = listEl.querySelectorAll('#done');
         console.log(done);

            todo.push(taskBox.value);
            
            localStorage.setItem('todo', JSON.stringify(todo));
            taskBox.value=[];
            showTask();
            
        }
        
    
    
    

})

function showTask(){
    let ls = localStorage.getItem('todo');
    if (ls == null){
        todo = []
    }
    else{
        todo = JSON.parse(ls);
    }
    var html =''

    todo.forEach((data, index)=>{
html += `
<input type="text" class="task-txt" id = "input-txt" value="${data}"readonly >
                    <input type="button" value="EDIT" class="tsk-btn edit" id="edit" onClick="Edit(${index})"/>
                    <input type="button" value="Delete" class="tsk-btn delete" id="delete" onClick="Delete(${index})"/>
                    <input type="button" value="DONE" class="tsk-btn done" id="done" onClick="Done(${index})"/>
`

    })
    listEl.innerHTML = html;
    
    
    

        }

    //Edit function
    function Edit(index){
        let ls = localStorage.getItem('todo');
        todo = JSON.parse(ls);
        var el = listEl.querySelectorAll('#edit')[index];
        var input = listEl.querySelectorAll('#input-txt')[index];
        console.log(input);
        var inputValue = input.value;
        console.log(inputValue);
        
        
        if (el.value.toUpperCase() === 'EDIT'){
            input.removeAttribute('readOnly');
            input.focus();
            input.select();
            el.value = 'SAVE';
            
            
             }
        else if (el.value.toUpperCase() === 'SAVE'){
            input.setAttribute('readOnly', true);
               todo[index]=inputValue;
            localStorage.setItem('todo',JSON.stringify(todo));
                       el.value = 'EDIT';
        }

           }


    //Delete Function

    function Delete(index){
        let ls = localStorage.getItem('todo');
        todo = JSON.parse(ls);
            
        todo.splice(index, 1);
        localStorage.setItem('todo',JSON.stringify(todo));
        showTask()
        
        

   }



        
    //Done Function
function Done(index){
    

    let el = listEl.querySelectorAll('#done')[index];
    let input = listEl.querySelectorAll('#input-txt')[index];
    let donTxt = el.value;
    ls = localStorage.getItem('donTxt');
    
    console.log(donTxt);
    console.log(el);
    var isDone = false
    
   if(el.value.toUpperCase() === 'DONE'){
    input.classList.add('don');
    el.value = "UNDONE"
    localStorage.setItem('donTxt',JSON.stringify(el.value));
    isDone = true;
    
}
else if (el.value.toUpperCase() === 'UNDONE'){
    input.classList.remove('don');
    el.value = 'DONE';
    localStorage.setItem('donTxt',JSON.stringify(el.value));
    isDone = false;
   
   

}
}

    

