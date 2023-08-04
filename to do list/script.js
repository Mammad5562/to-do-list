// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
  
    // Add a delete button to the task item
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function () {
      taskList.removeChild(taskItem);
    };
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    // Clear the input field after adding the task
    taskInput.value = '';
  }
  
  // Bind the "Enter" key to add a task
  document.getElementById('taskInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
  