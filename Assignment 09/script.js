const inputData = document.getElementById("inputData");
const clearOutput = document.getElementById("clear-output");

clearOutput.addEventListener("click", () => {
  output.innerHTML = "";
});

const output = document.getElementById("output");

const clears = document.getElementById("clears");

clears.addEventListener("click", () => {
  inputData.value = "";
});

const datas = document.getElementById("datas");

const array = [25.12345];

datas.innerHTML = array.join("");

const throwADice = document.getElementById("ThrowADice");

throwADice.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  output.style.fontSize = "35px";
  output.style.fontWeight = "600";
  output.innerHTML = randomNumber;
  let paragraph = `<p>Generating a random number from 1 to 6.</p>`;
  output.innerHTML += paragraph;
});

const roundANumber = document.getElementById("RoundANumber");

roundANumber.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please enter a floating point number.",
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
    const roundedNumber = Math.round(inputData.value);
    output.style.fontSize = "35px";
    output.style.fontWeight = "600";
    output.innerHTML = roundedNumber;
  }
});

const ceilANumber = document.getElementById("CeilANumber");

ceilANumber.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please enter a floating point number.",
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
    const ceiledNumber = Math.ceil(inputData.value);
    output.style.fontSize = "35px";
    output.style.fontWeight = "600";
    output.innerHTML = ceiledNumber;
  }
});

const floorANumber = document.getElementById("FloorANumber");

floorANumber.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please enter a floating point number.",
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
    const flooredNumber = Math.floor(inputData.value);
    output.style.fontSize = "35px";
    output.style.fontWeight = "600";
    output.innerHTML = flooredNumber;
  }
});

const generateARandomNumber = document.getElementById("GenerateARandomNumber");

generateARandomNumber.addEventListener("click", () => {
  const randomNumber = Math.random();
  output.style.fontSize = "35px";
  output.style.fontWeight = "600";
  output.innerHTML = randomNumber;
});

const generateAStrongPassword = document.getElementById(
  "GenerateAStrongPassword",
);

generateAStrongPassword.addEventListener("click", () => {
  let length = inputData.value;

  if (!length) {
    Toastify({
      text: "Please enter number to generate a strong password length.",
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
    return;
  }

  output.style.fontSize = "16px";
  output.style.fontWeight = "400";
  let randomNumber = "";
  let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LowerCase = "abcdefghijklmnopqrstuvwxyz";
  let Numbers = "0123456789";
  let Symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let allCharacters = UpperCase + LowerCase + Numbers + Symbols;
  for (let i = 0; i < length; i++) {
    const randomNumbers = Math.random();
    randomNumber += allCharacters.charAt(
      Math.floor(randomNumbers * allCharacters.length),
    );
    output.innerHTML = randomNumber;
    output.innerHTML += `<p>Generating a random string & length is: <span>${length}</span>.</p>`;
  }
});

const convertingStrings = document.getElementById("ConvertingStrings");

convertingStrings.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please enter a floating point number.",
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
    const number = inputData.value.toString();
    console.log(number);
    console.log(typeof number);
  }
});

const controlingLength = document.getElementById("ControlingLength");

controlingLength.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please enter a floating point number.",
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
    const number = Number(inputData.value);
    console.log(number);
    let newNumber = number.toFixed(2);
    console.log(newNumber);
    console.log(typeof newNumber);
  }
});

const calculateGST = document.getElementById("calculateGST");

calculateGST.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please enter amount of actual bill price.",
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
    let getAmout = Number(inputData.value);
    let calaculateGSTTax = (getAmout * 18) / 100;
    let tottalAmount = getAmout + calaculateGSTTax;
    output.style.fontSize = "35px";
    output.style.fontWeight = "600";
    output.innerHTML = tottalAmount;
  }
});

document.getElementById("updateYear").innerHTML = new Date().getFullYear();
