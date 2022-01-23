const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');



// Task added to list via input typed by user
addButton.addEventListener('click', addToDo => {
  event.preventDefault();
  const newTodo = document.createElement('p')
  newTodo.innerHTML =  
  `<ul class="list-group mb-0" id="todoList">
    <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
     <div class="d-flex align-items-center" >
       <p id="" class="d-inline "><input class="form-check-input me-2" type="checkbox" onclick="deleteToDo(event)" />${todoInput.value}</p>
     </div>
     <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
       <i class="fas fa-times text-primary"></i>
     </a>
    </li>`;
  todoList.appendChild(newTodo);
  todoInput.value = '';
});

// Checked checkboxes make todo texts line through
function deleteToDo(event) {
  let checkbox = event.target;
  checkbox.parentNode.classList.toggle('text-decoration-line-through');
  }
