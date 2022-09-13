//Selecors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOpt = document.querySelector(".filterTodo");

//Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOpt.addEventListener("click", filterTodo);

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
  //Add todo to local storage
  saveTodos(todoInput.value);

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
    deleteFromStorage(todo);
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

//filter
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "not_completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}

//local storage
//save
function saveTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//retrieve
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
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
  });
}

//delete from local storage
function deleteFromStorage(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
