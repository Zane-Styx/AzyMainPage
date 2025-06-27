// 🗓️ Change this to the date you met:
const startDate = new Date("2025-04-17"); // example date

function updateDaysTogether() {
  const today = new Date();
  const diffTime = today - startDate;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById('days').textContent = days;
}

updateDaysTogether();
