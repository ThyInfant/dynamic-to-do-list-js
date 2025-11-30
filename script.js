document.addEventListener('DOMContentLoaded', function () {

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const STORAGE_KEY = 'tasks';

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    storedTasks.forEach(taskText => {
      addTask(taskText, false);
    });
  }

  function saveTasksToStorage(tasksArray) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksArray));
  }

  function getStoredTasks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  function addTask(taskText = null, save = true) {
    if (taskText === null) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
      taskList.removeChild(li);
