// Digital Clock - Improved JavaScript

// Get DOM elements
const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");

// Function to format numbers with leading zero
const formatNumber = (num) => {
  return num < 10 ? "0" + num : num;
};

// Function to get formatted time
const getFormattedTime = () => {
  const now = new Date();
  const hours = formatNumber(now.getHours());
  const minutes = formatNumber(now.getMinutes());
  const seconds = formatNumber(now.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};

// Function to get formatted date
const getFormattedDate = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return now.toLocaleDateString("en-US", options);
};

// Function to update the clock
const updateClock = () => {
  if (timeDisplay) {
    timeDisplay.textContent = getFormattedTime();
  }
  if (dateDisplay) {
    dateDisplay.textContent = getFormattedDate();
  }
};

// Update clock on page load
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
