const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');
let newTodo = [];


// Task added to list via input typed by user
addButton.addEventListener('click', addToDo => {
  event.preventDefault();
  if (todoInput.value == '') {
    alert ('You have to type something') 
  } else {
    newTodo = document.createElement('div');
    newTodo.innerHTML =  
  `<li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
       <p class="d-inline "><input class="form-check-input me-2" type="checkbox" onclick="deleteToDo(event)"/>${todoInput.value}</p>
    </li>`;
  todoList.appendChild(newTodo);
  todoInput.value = '';
  }
});

// Checked checkboxes make todo texts line through

function deleteToDo(event) {
  event.target.parentNode.classList.toggle('text-decoration-line-through');
  setTimeout(function() {event.target.parentNode.parentNode.remove();}, 3000);
  }
  