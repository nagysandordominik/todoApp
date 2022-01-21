const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');
let checkBoxes = document.querySelectorAll('input[type=checkbox]');

  addButton.addEventListener('click', addToDo);
function addToDo(event) {
  event.preventDefault();
  const newTodo = document.createElement('p')
  newTodo.innerHTML =  
  `<ul class="list-group mb-0" id="todoList">
    <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
     <div class="d-flex align-items-center" id="here">
       <p id="here" class="d-inline"><input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />${todoInput.value}</p>
     </div>
     <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
       <i class="fas fa-times text-primary"></i>
     </a>
    </li>`;
  todoList.appendChild(newTodo);
  todoInput.value = '';
}

for (let i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].addEventListener("change", checkedOrNot);
}

//Define separate function
function checkedOrNot() {
  let isChecked = this.checked;

  if (isChecked) { //checked
    console.log('checked');
  } else { //unchecked
    console.log('unchecked');
  }
}


  

