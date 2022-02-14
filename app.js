// Main parts of html side for user interaction
const todoInput = document.getElementById('inputT');
const addButton = document.getElementById('addB');
const todoList = document.getElementById('todoList');
const activeMenu = document.getElementById('active');
const allMenu = document.getElementById('all');
const completedMenu = document.getElementById('completed');

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
      if (todoInput.value == ''){
        alert ('You have to type something');
      } else  {
        const todoTask = {
          id: randomId(),
          text: todoInput.value,
          isDone: false
        }
        const newTodo = document.createElement('div');
        newTodo.innerHTML =  
        `<li id="${todoTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
         <p class="pb-1 mb-1"><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event); "/>${todoInput.value}</p>
        </li>`;
        
      todoList.appendChild(newTodo);
      activeList.push(todoTask);
      allTasks.push(todoTask);
      
      JSON.stringify(todoTask);
      localStorage.setItem('myProject', todoTask)

      todoInput.value = '';
    }
  }
);
        

  // Checked checkboxes make todo texts line through
function completeToDo(event) {
    
  let selectedText = event.target.parentNode;
  let selectedId = event.target.parentNode.parentNode.id;
  let selectedDiv = event.target.parentNode.parentNode.parentNode;
  selectedText.classList.toggle('text-decoration-line-through'); 
  
  let index = allTasks.map(todoTask => {
    return todoTask.id;}).indexOf(selectedId);
    if (allTasks[index].isDone == false){
    allTasks[index].isDone == false
    ? (allTasks[index].isDone = true) 
    : (allTasks[index].isDone = false);

    const completedTask = {
      id: selectedId,
      text: selectedText.innerText,
      isDone:allTasks[index].isDone
    };


    activeList.splice(index, 1);
    completedList.push(completedTask);

  // With timeout the selected task is removed from display
  setTimeout(function() {
    selectedDiv.classList.toggle('visually-hidden');
    // selectedDiv.remove(todoList);
      }, 3000);
    } else if (allTasks[index].isDone == true) {
      let index = allTasks.map(completedTask => {
        return completedTask.id;}).indexOf(selectedId);
      allTasks[index].isDone == true
    ? (allTasks[index].isDone = false) 
    : (allTasks[index].isDone = true);

      const completedTask = {
        id: selectedId,
        text: selectedText.innerText,
        isDone:allTasks[index].isDone
      };

      completedList.splice(index.completedTask, 1);
      activeList.push(completedTask);
    }
  }

// Display rendering based on the user's selected menu
function selectView(event)  {

  if (event.target.id == 'all' || 'active') {
    
  }

  // Show all tasks added by the user
  if (event.target.id == 'all') {
    allMenu.toggleAttribute('clicked');
    todoList.innerHTML = allTasks.map(todoTask => 
      `<div>
        <li id="${todoTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
          <p class="pb-1 mb-1 ${todoTask.isDone}"><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event); " />${todoTask.text}</p> 
          </li>
      </div>    
     `)
    console.log('all');
    let completed = document.querySelectorAll('.true');
    for(let i = 0; i < completed.length; i++) {
    completed[i].classList.add('text-decoration-line-through');
    completed[i].firstElementChild.checked = true;
    }
  }
  // Only show tasks which are not completed yet
  if (event.target.id == 'active') {
    activeMenu.toggleAttribute('clicked');
    todoList.innerHTML =activeList.map(todoTask => 
      `<div>
        <li id="${todoTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
          <p class="pb-1 mb-1"><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event); "/>${todoTask.text}</p>
        </li>
     </div>    

     `).join('');
    console.log('active');
  }
  // Only show tasks which are completed yet
  if (event.target.id == 'completed') {
  completedMenu.toggleAttribute('clicked');
  todoList.innerHTML =completedList.map(completedTask => 
    `<div>
      <li id="${completedTask.id}" class="list-group-item justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom pb-0 mb-0">
       <p class="pb-1 mb-1 text-decoration-line-through"><input class="form-check-input me-2" type="checkbox" onclick="completeToDo(event); " checked />${completedTask.text}</p>
      </li>
    </div>    
    `).join('');
    
    console.log('completed');
  }
}

