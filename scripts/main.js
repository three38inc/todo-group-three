const dateEl = document.getElementById('date')
const timeEl = document.getElementById('time')

const headerClock = new Clock(dateEl, timeEl)
console.log("headerClock: ", headerClock)
headerClock.start()