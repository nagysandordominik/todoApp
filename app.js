const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');


if(addButton){
  addButton.addEventListener('click', addToDo);
}

function addToDo(event) {
  event.preventDefault();
  let text = todoInput.value;
  const newTodo = document.createElement('p')
  newTodo.innerHTML =  
  `<ul class="list-group mb-0" id="todoList">
    <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
     <div class="d-flex align-items-center" id="here">
       <p id="here" class="d-inline"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />${text}</p>
     </div>
     <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
       <i class="fas fa-times text-primary"></i>
     </a>
    </li>`;
  todoList.appendChild(newTodo);
}
