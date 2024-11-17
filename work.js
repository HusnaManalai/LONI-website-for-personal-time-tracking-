// Timer variables
let timerDuration = 25 * 60; // 25 minutes in seconds
let timerInterval;

// DOM elements
//hi this is a change
const timerDisplay = document.getElementById('timer');
const startTimerBtn = document.getElementById('start-timer');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const doneContainer = document.getElementById('done-container');
const doneInput = document.getElementById('done-input');
const doneList = document.getElementById('done-list');

// Start the timer
startTimerBtn.addEventListener('click', () => {
  if (timerInterval) return; // Prevent multiple timers from running
  startTimer();
});

function startTimer() {
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timerDuration / 60);
    let seconds = timerDuration % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (timerDuration > 0) {
      timerDuration--;
    } else {
      clearInterval(timerInterval);
      timerEnded();
    }
  }, 1000);
}

function timerEnded() {
  alert('Time is up! Now, write down what you did.');
  doneContainer.style.display = 'block';
}

// Add to-do task
document.getElementById('add-todo').addEventListener('click', () => {
  const task = todoInput.value;
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});

// Add done task
document.getElementById('add-done').addEventListener('click', () => {
  const doneTask = doneInput.value;
  if (doneTask) {
    const li = document.createElement('li');
    li.textContent = doneTask;
    doneList.appendChild(li);
    doneInput.value = '';
  }
});
