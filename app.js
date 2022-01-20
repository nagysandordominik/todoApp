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
  const newTodo = document.createElement('p')
  newTodo.innerHTML =  `<p id="here" class="d-inline"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />${text}</p>`;
  todoList.appendChild(newTodo);
}
