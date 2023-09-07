const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDynamicData() {
  const currentDate = new Date();

  const currentDay = dayNames[currentDate.getUTCDay()];
  currentDayElement.textContent = `Current Day: ${currentDay}`;

  const currentUTCTime = currentDate.getTime();
  currentUTCTimeElement.textContent = `Current UTC Time (ms): ${currentUTCTime}`;
}

updateDynamicData();

setInterval(updateDynamicData, 1000);
