window.onload = displayClock;

function displayClock() {
  const monthNames = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];

  var format_12hour = false;

  // Получаем текущее время в UTC и прибавляем 3 часа для МСК
  var nowUTC = new Date();
  var nowMSK = new Date(nowUTC.getTime() + 3 * 60 * 60 * 1000);

  var mm = monthNames[nowMSK.getMonth()];
  var dd = nowMSK.getDate();
  var hh = nowMSK.getHours();
  var min = ('0' + nowMSK.getMinutes()).slice(-2);
  var sec = ('0' + nowMSK.getSeconds()).slice(-2);
  var ampm = '';

  if (format_12hour) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  document.getElementById('hour').innerText = hh;
  document.getElementById('separator').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min;
  // Если есть элемент для секунд, обновляем его
  var secondsElement = document.getElementById('seconds');
  if (secondsElement) {
    secondsElement.innerText = sec;
  } else {
    // Если элемента нет, можно добавить его динамически, но лучше создать в HTML
    // Например, добавим к минутам через пробел
    document.getElementById('minutes').innerText = min + ':' + sec;
  }
  // Если нужно добавить AM/PM, можно добавить к минутам или секундам
  if (ampm) {
    document.getElementById('minutes').innerText += ampm;
  }

  document.getElementById('day').innerText = dd;
  document.getElementById('month').innerText = mm;

  setTimeout(displayClock, 1000);
}
