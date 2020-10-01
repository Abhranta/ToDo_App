//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);

//Functions

function addTodo(event)
{
    //Prevent form from submitting
    event.preventDefault();
    //ToDo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear the text in the todoInput
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //Delete the todo
    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend" , function(){
            todo.remove();
        })
    }

    //Check mark
    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}