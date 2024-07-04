const Repeat = {
  once: 'Once',
  daily: 'Daily',
  mon_to_fri: 'Mon to Fri',
  custom: 'Custom',
};
let lastId = 1;

const alarms = [];

function getRandomAlarm() {
  const randomMoment = ['AM', 'PM'].at(Math.round(Math.random()));
  const randomHour = Math.floor(Math.random() * 11) + 1;
  const randomMin = Math.floor(Math.random() * 59);
  return {
    id: lastId++,
    moment: randomMoment,
    hour: randomHour,
    minute: randomMin,
    ringtone: '',
    repeat: [Repeat.once, Repeat.daily].at(Math.round(Math.random())),
    vibrate: false,
    deleteAfterGoesOff: 1,
    label: '',
  };
}

function handleZeroPrefix(value) {
  if (+value < 10) return `0${value}`;
  return String(value);
}

function renderAlarmItem(alarm) {
  const template = `<div class="alarm-item" id="${alarm.id}">
  <div>
    <div>
      <span class="display-hour">${handleZeroPrefix(
        alarm.hour,
      )}:${handleZeroPrefix(alarm.minute)}</span>
      <span>${alarm.moment}</span>
    </div>
    <span class="display-hour-info">
      ${alarm.repeat === Repeat.once ? '' : '<span>Daily</span>'}
      ${alarm.repeat === Repeat.once ? '' : '<span>|</span>'}
      <span>Alarm in 22 hours 21 minutes</span>
    </span>
  </div>

  <div
    class="toggle"
    id="${alarm.id}-toggle">
    <div class="toggle-bullet toggle-bullet-inactive"></div>
  </div>
</div>`;

  return template;
}

function addAlarm(alarm) {
  alarms.push(alarm);
  const alarmList = document.getElementById('alarm-list');
  alarmList.innerHTML = alarms.map((alarm) => renderAlarmItem(alarm)).join('');

  for (const alarm of alarms) {
    handleToggleStateChange(`${alarm.id}-toggle`, (value) => {
      console.log(`${alarm.id}-toggle:`, value);
    });
  }
}
