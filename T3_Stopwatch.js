let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to start or pause the stopwatch
function startStopwatch() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
}

// Function to update time every 10 milliseconds
function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // Format the time to be 2 digits (e.g., 01:05:09)
    const formattedTime = formatTime(minutes, seconds, milliseconds);
    timeDisplay.textContent = formattedTime;
}

// Function to format time into MM:SS:MS
function formatTime(minutes, seconds, milliseconds) {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMilliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timeDisplay.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}
