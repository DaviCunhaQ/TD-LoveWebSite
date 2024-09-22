function updateTimer() {
  const startDate = new Date('2024-01-25T00:00:00Z');
  const now = new Date();
  const difference = now - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('time').textContent = 
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

updateTimer();
setInterval(updateTimer, 1000);