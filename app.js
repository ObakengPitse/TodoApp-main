//Selecors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

//Event listeners
todoButton.addEventListener("click", addTodo);

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
