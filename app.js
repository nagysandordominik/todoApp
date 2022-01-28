const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');
const todoTaskList  = [];
const completedToDo = [];

function randomId(item) {
  let S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4());
}

// Task added to list via input typed by user
addButton.addEventListener('click', addToDo => {
  event.preventDefault();
  if (todoInput.value == '') {
    alert ('You have to type something') 
  } else {
    const todoTask = {
      id: randomId(),
      todoText: todoInput.value,
    }
    const newTodo = document.createElement('div');
    newTodo.innerHTML =  
    `<li id="${todoTask.id}" class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
     <p class="d-inline "><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event)"/>${todoInput.value}</p>
    </li>`
    
    
  todoList.appendChild(newTodo);
  todoTaskList.unshift(todoTask);
  todoInput.value = '';
  }
});

// Checked checkboxes make todo texts line through
function completeToDo(event) {
  const selectedText = event.target.parentNode;
  const selectedTask = event.target.parentNode.parentNode;
  selectedText.classList.toggle('text-decoration-line-through');
  // With timeout the selected task is removed from display and todoTaskList, than it is added to completedTodo array 
  setTimeout(function() {
    const selectedId = event.target.parentNode.parentNode.id;
    selectedTask.remove(todoList);
    const completedTask = todoTaskList.splice(selectedTask[selectedId],1);
    completedToDo.push(completedTask)
  }, 3000);
  }
  