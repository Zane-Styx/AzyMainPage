const startDatePH = new Date("2025-04-17T00:00:00+08:00");

// Converts current time to UTC+8 (Philippine time)
function getPhilippineNow() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + (8 * 60 * 60 * 1000)); // UTC+8
}

function updateDaysTogether() {
  const now = getPhilippineNow();
  const localToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const days = Math.floor((localToday - startDatePH) / (1000 * 60 * 60 * 24));
  document.getElementById('days').textContent = days;
}

function scheduleDailyUpdate() {
  const now = getPhilippineNow();
  const next = new Date(now);
  next.setHours(23, 59, 0, 0); // PH time

  if (now > next) {
    next.setDate(next.getDate() + 1);
  }

  const delay = next - now;

  setTimeout(() => {
    updateDaysTogether();
    scheduleDailyUpdate();
  }, delay);
}

// Start
updateDaysTogether();
scheduleDailyUpdate();
