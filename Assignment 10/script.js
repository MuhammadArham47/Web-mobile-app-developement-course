const datas = document.getElementById("datas");
datas.innerHTML = new Date();

const clearOutput = document.getElementById("clear-output");

clearOutput.addEventListener("click", () => {
  output.innerHTML = "";
});

const clears = document.getElementById("clears");

clears.addEventListener("click", () => {
  inputData.value = "";
});

const output = document.getElementById("output");
const getNameOfToday = document.getElementById("getNameOfToday");

getNameOfToday.addEventListener("click", () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  output.innerHTML = days[new Date().getDay()];

  let Hours = new Date().getHours();
  let Minutes = new Date().getMinutes();
  let Seconds = new Date().getSeconds();

  let paragraph = `<p>You clicked the button @ ${Hours} : ${Minutes} : ${Seconds}</p>`;
  output.innerHTML += paragraph;
});

const inputData = document.getElementById("inputData");
const calculateDaysPassedSinceIBorn = document.getElementById(
  "calculateDaysPassedSinceIBorn",
);

calculateDaysPassedSinceIBorn.addEventListener("click", () => {
  let dob = inputData.value;
  if (!dob) {
    Toastify({
      text: "Please enter your date of birth.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #870000 0%, #190A05 100%)",
      },
    }).showToast();
  } else {
    let today = new Date();
    let bornDate = new Date(dob);

    let monthDiff = today.getTime() - bornDate.getTime();
    let daysSinceIBorn = Math.floor(monthDiff / (1000 * 60 * 60 * 24));

    output.innerHTML = `${daysSinceIBorn} days has been passed since you born.`;

    let Hours = new Date().getHours();
    let Minutes = new Date().getMinutes();
    let Seconds = new Date().getSeconds();

    let paragraph = `<p>You clicked the button @ ${Hours} : ${Minutes} : ${Seconds}</p>`;
    output.innerHTML += paragraph;
  }
});

const whenIsYourNextBirthday = document.getElementById(
  "WhenIsYourNextBirthday",
);

whenIsYourNextBirthday.addEventListener("click", () => {
  let dob = inputData.value;
  if (!dob) {
    Toastify({
      text: "Please enter your date of birth.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #870000 0%, #190A05 100%)",
      },
    }).showToast();
  } else {
    let today = new Date();
    let bornDate = new Date(dob);

    let monthDiff = today.getTime() - bornDate.getTime();
    let daysSinceIBorn = Math.floor(monthDiff / (1000 * 60 * 60 * 24));

    // let daysLeft = 365 - daysSinceIBorn;
    // let monthsLeft = Math.floor(daysLeft / 30);
    // let yearsLeft = Math.floor(monthsLeft / 12);

    output.innerHTML = `Your next birth day is ${daysSinceIBorn} days away.`;

    let Hours = new Date().getHours();
    let Minutes = new Date().getMinutes();
    let Seconds = new Date().getSeconds();

    let paragraph = `<p>You clicked the button @ ${Hours} : ${Minutes} : ${Seconds}</p>`;
    output.innerHTML += paragraph;
  }
});

const greatUser = document.getElementById("greatUser");

greatUser.addEventListener('click', ()=> {
    let name = prompt("Enter your name");
    let hours = new Date().getHours();

    if (hours < 12) {
        output.innerHTML = `Good Morning ${name}`;
    } else if (hours < 17) {
        output.innerHTML = `Good Afternoon ${name}`;
    } else if (hours < 20) {
        output.innerHTML = `Good Evening ${name}`;
    } else {
        output.innerHTML = `Good Night ${name}`;
    }
});

const tellTime1 = document.getElementById("tellTime1");
const tellTime2 = document.getElementById("tellTime2");
const tellTime3 = document.getElementById("tellTime3");

tellTime1.addEventListener('click', ()=> {
    tellTime();
})
tellTime2.addEventListener('click', ()=> {
    tellTime();
})
tellTime3.addEventListener('click', ()=> {
    tellTime();
})

function tellTime() {
    let now = new Date();
    let thHour = now.getHours();
    let thMinuts = now.getMinutes();
    let thSeconds = now.getSeconds();

    output.innerHTML += `<p>You clicked the button @ ${thHour} : ${thMinuts} : ${thSeconds}</p>`;
}

const calculateTax = document.getElementById("calculateTax");

calculateTax.addEventListener('click', ()=> {
    let getAmount = prompt("Enter your amount");
    let tax = 17;
    let calculateing = getAmount * tax / 100;
    output.innerHTML = `Tax is: ${calculateing}`

});

const calculateTotal = document.getElementById("calculateTotal");

calculateTotal.addEventListener('click', ()=> {
    let getAmount = prompt("Enter your amount");
    
    if (getAmount < 1000) {
        var tax = 8
    } else {
        var tax = 16
    }

    let calculateing = getAmount * tax / 100;


    let total = calculateing + Number(getAmount);
    output.innerHTML = `Total: ${total}`
})

document.getElementById("updateYear").innerHTML = new Date().getFullYear();
