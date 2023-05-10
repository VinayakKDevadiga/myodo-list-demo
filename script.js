const input=document.querySelector(".input-box");
const button=document.querySelector(".add-button");
const todolist=document.querySelector(".todolist");


button.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodo);

function addTodo(event){
   event.preventDefault();

   //console.log(input.value);
   const TodoDiv=document.createElement("div")
   TodoDiv.classList.add("todo-container")

   const todoitem=document.createElement("li")
   todoitem.classList.add("todo-item")
   todoitem.innerText=input.value;
   //To push created todo-item to an TodoDiv
   TodoDiv.appendChild(todoitem)


   const deleteButton=document.createElement("button")
   deleteButton.classList.add("delete-btn")
    //To push created deletebutton to an TodoDiv
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    TodoDiv.appendChild(deleteButton)


   const completebutton=document.createElement("button")
   completebutton.classList.add("complete-btn")
   completebutton.innerHTML='<i class="fa-solid fa-check"></i>'
    //To push created completebutton to an TodoDiv
    TodoDiv.appendChild(completebutton)

   //To apppend created todo-list item to an ul
   todolist.appendChild(TodoDiv)
   input.value='';
}

function deleteTodo(event){
   console.log(event.target);
   const item=event.target
    if(item.classList[0]==="delete-btn"){
      delelem=item.parentElement;
       delelem.remove();
    }
    if(item.classList[0]==="complete-btn"){
      completedelem=item.parentElement;
       completedelem.classList.toggle("completed");
    }
}