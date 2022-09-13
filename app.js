//Selecors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(Event) {
  Event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);

  //completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completedBtn");
  todoDiv.appendChild(completedButton);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
  deleteBtn.classList.add("deleteBtn");
  todoDiv.appendChild(deleteBtn);

  //append to list
  todoList.appendChild(todoDiv);
  //clear todo input
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "deleteBtn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //check
  if (item.classList[0] === "completedBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
