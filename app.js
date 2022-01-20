const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');
const here = document.getElementById('here');

if(addButton){
  addButton.addEventListener('click', addToDo);
}

function addToDo(event) {
  event.preventDefault();
  let text = todoInput.value;
  here.innerHTML = text;
}
