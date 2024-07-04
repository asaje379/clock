initRouter();

const addAlarmButton = document.getElementById('add-alarm-button');
addAlarmButton.addEventListener('click', () => {
  addAlarm(getRandomAlarm());
});
