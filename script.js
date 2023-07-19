let taskInput = document.querySelector('#taskInput');
let addTaskButton = document.querySelector('#addTaskButton');
let taskList = document.querySelector('#taskList');

// Adding tasks
addTaskButton.addEventListener ('click', function() {
  let task = taskInput.value; // This get the new value (task)
  let listItem = document.createElement('li'); //Creates a new listed element for the task list 
  listItem.textContent = task; //set text content of the list item 
  taskList.appendChild(listItem); //Add list item to the task list
  taskInput.value = ''; // clear inout field

  // Removing tasks 
  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  listItem.appendChild(removeButton);
}); 

taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    let task = event.target.parentElement;
    taskList.removeChild(task);
  }
})

// Marking tasks as completed 
taskList.addEventListener ('click', function(event){
if (event.target.tagName === 'LI') {
  event.target.classList.toggle('completed')
}
});
