const element = document.getElementById('remaining-time');
const availabilityDate = new Date('2021-04-01');

setInterval(() => {
  const currentDate = new Date();
  let remainingTime = (availabilityDate - currentDate) / 1000;

  const days = Math.floor(remainingTime / 86400);
  remainingTime -= days * 86400;

  const hours = Math.floor(remainingTime / 3600) % 24;
  remainingTime -= hours * 3600;

  const minutes = Math.floor(remainingTime / 60) % 60;
  remainingTime -= minutes * 60;

  const seconds = (remainingTime % 60).toFixed(0); 

  element.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
