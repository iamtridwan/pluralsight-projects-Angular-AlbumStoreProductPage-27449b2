const [name, email] = document.querySelectorAll("input");
const btn = document.querySelector("button");
url = "https://api.zerodepression.org/v1/ge/newsletter";
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let formData = Object.create(null);
  formData.first_name = name.value;
  formData.email = email.value;

  //   fetch(url, {
  //     method: "post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.message))
  //     .catch((err) => console.error(err));
});

const [days, hours, mins, secs] = document.querySelectorAll(".right span");

const launchDate = new Date("1/31/2022").getTime();
const oneSecs = 1000;
const oneMin = oneSecs * 60;
const oneHour = oneMin * 60;
const oneDay = oneHour * 24;

function countDown() {
  let now = new Date().getTime();
  let timeLeft = launchDate - now;
  let remainingDays = Math.floor(timeLeft / oneDay);
  let remainingHours = Math.floor((timeLeft % oneDay) / oneHour);
  let remainingMins = Math.floor((timeLeft % oneHour) / oneMin);
  let remainingSecs = Math.floor((timeLeft % oneMin) / oneSecs);

  if (timeLeft < 0) {
    clearInterval(counter);
    return;
  }



  days.textContent = formatTime(remainingDays);
  hours.textContent = formatTime(remainingHours);
  mins.textContent = formatTime(remainingMins);
  secs.textContent = formatTime(remainingSecs);
}

let counter = setInterval(countDown, 1000);

countDown();

function formatTime(val) {
  if (val < 10) {
    return `0${val}`;
  } else {
    return val;
  }
}
