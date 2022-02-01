const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');
let todoTaskList  = [];
let completedList = [];
let allTasks = [];

function randomId() {
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
      text: todoInput.value,
      isDone: false
    }
    const newTodo = document.createElement('div');
    newTodo.innerHTML =  
    `<li id="${todoTask.id}" class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
     <p class="d-inline "><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event)"/>${todoInput.value}</p>
    </li>`
    
    
  todoList.appendChild(newTodo);
  todoTaskList.push(todoTask);
  allTasks.push(todoTask);
  todoInput.value = '';
  }
});
// Checked checkboxes make todo texts line through
function completeToDo(event) {
  let selectedText = event.target.parentNode;
  selectedText.classList.toggle('text-decoration-line-through');
  let selectedId = event.target.parentNode.parentNode.id;
  let selectedDiv = event.target.parentNode.parentNode.parentNode;
  // With timeout the selected task is removed from display and todoTaskList, than it is added to completedList array 
  setTimeout(function() {
    let index = todoTaskList.map(todoTask => {
      return todoTask.id;}).indexOf(selectedId);
      todoTaskList[index].isDone
      ? (todoTaskList[index].isDone = false)
      : (todoTaskList[index].isDone = true);
    
      const completedTask = {
        id: selectedId,
        text: selectedText.innerText,
        isDone:todoTaskList[index].isDone
      };
    
    todoTaskList.splice(index, 1);
    completedList.push(completedTask);
    selectedDiv.remove(todoList);
  }, 3000);
  }
  