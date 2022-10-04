"use strict";
// DOM elements
const inputTodo = document.querySelector("#todo_input");
const addTodoButton = document.querySelector("#todo_add_button");
const todoForm = document.querySelector("#todo_form");
const todoList = document.querySelector("#todoList");
// load todos
let todos = [];
loadTodos();
// main events
todoForm.addEventListener("submit", submitEvent);
// functions
function submitEvent(event) {
    event.preventDefault();
    const newTodo = {
        text: inputTodo.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    inputTodo.value = "";
}
function createTodo(todo) {
    const todoLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = !todo.completed;
        saveTodos();
    });
    todoLi.append(todo.text, checkbox);
    todoList.append(todoLi);
}
function loadTodos() {
    const todosStore = localStorage.getItem("todos");
    if (todosStore) {
        todos = JSON.parse(todosStore);
        todos.forEach(todo => createTodo(todo));
    }
    else {
        todos = [];
    }
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
