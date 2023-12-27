function updateTime(clockId, timeId) {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours} :${minutes}:${seconds}`;
  document.getElementById(timeId).textContent = timeString;
}

setInterval(() => updateTime('clock1', 'time1'), 1000);
setInterval(() => updateTime('clock2', 'time2'), 1000);

updateTime('clock1', 'time1');
updateTime('clock2', 'time2');
