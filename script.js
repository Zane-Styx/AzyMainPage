// 🇵🇭 Start date: April 17, 2025 in Philippine local time
const startDate = new Date("2025-04-17T00:00:00+08:00");

// ⏱ Update the days counter
function updateDaysTogether() {
  const now = new Date();
  
  // Create start of today in PH time (local time)
  const localToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = localToday.getTime() - startDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById('days').textContent = days;
}

// ⌛ Schedule next update at 11:59 PM local time
function scheduleDailyUpdate() {
  const now = new Date();
  const next = new Date();

  next.setHours(23, 59, 0, 0); // Today at 11:59 PM

  // If it’s already past 11:59 PM, set to tomorrow
  if (now > next) {
    next.setDate(next.getDate() + 1);
  }

  const timeUntilUpdate = next.getTime() - now.getTime();

  setTimeout(() => {
    updateDaysTogether();
    scheduleDailyUpdate(); // Repeat daily
  }, timeUntilUpdate);
}

// 🔁 Run once now, and schedule next update
updateDaysTogether();
scheduleDailyUpdate();
