let daysItem = document.querySelector("#days");
let hourItem = document.querySelector("#hours");
let minuteItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");

let countDown = () => {
let futureDate = new Date("1 Aug 2026");
let currentDate = new Date();
let myDate = futureDate - currentDate;

let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
let hour = Math.floor(myDate / 1000 / 60 / 60) % 24;
let minute = Math.floor(myDate / 1000 / 60) % 60;
let seconds = Math.floor(myDate / 1000) % 60;

daysItem.innerHTML = days;
hourItem.innerHTML = hour;
minuteItem.innerHTML = minute;
secondsItem.innerHTML = seconds;
}

countDown();
setInterval(countDown,1000);
