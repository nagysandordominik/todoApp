// Main parts of html side for user interaction
const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');

// Arrays for 3 types of tasks 
let activeList  = [];
let completedList = [];
let allTasks = [];

// Random generated id for tasks
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
    alert ('You have to type something');
  } else {
    const todoTask = {
      id: randomId(),
      text: todoInput.value,
      isDone: false
    }
    const newTodo = document.createElement('div');
    newTodo.innerHTML =  
    `<li id="${todoTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
     <p class="pb-1 mb-1"><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event)"/>${todoInput.value}</p>
    </li>`;
    
  todoList.appendChild(newTodo);
  activeList.push(todoTask);
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
    let index = activeList.map(todoTask => {
      return todoTask.id;}).indexOf(selectedId);
      activeList[index].isDone
      ? (activeList[index].isDone = false) 
      : (activeList[index].isDone = true);
    
      const completedTask = {
        id: selectedId,
        text: selectedText.innerText,
        isDone:activeList[index].isDone
      };
    
    activeList.splice(index, 1);
    completedList.push(completedTask);
    selectedDiv.classList.toggle('visually-hidden');
    // selectedDiv.remove(todoList);
  }, 3000);
  };

// Display rendering based on the user's selected menu
function selectView(event)  {
  // Show all tasks added by the user
  if (event.target.id == 'all') {
    todoList.innerHTML = allTasks.map(todoTask => 
      `<li id="${todoTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
      <p class="pb-1 mb-1"><input class="form-check-input me-2" type="checkbox" />${todoTask.text}</p>
     </li>`).join('');
    console.log('all');
  }
  // Only show tasks which are not completed yet
  if (event.target.id == 'active') {
    todoList.innerHTML =activeList.map(todoTask => 
      `<li id="${todoTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
      <p class="pb-1 mb-1"><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event)"/>${todoTask.text}</p>
     </li>`).join('');
    console.log('active');
  }
  // Only show tasks which are completed yet
  if (event.target.id == 'completed') {
   todoList.innerHTML =completedList.map(completedTask => 
    `<li id="${completedTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
    <p class="pb-1 mb-1 text-decoration-line-through"><input class="form-check-input me-2" type="checkbox" checked />${completedTask.text}</p>
   </li>`).join('');
    console.log('completed');
  }
}