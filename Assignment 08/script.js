const datas = document.getElementById("datas");

const array = [
  "I love my country Pakistan",
  "I like my city Faisalabad",
  "I love my Homeland",
];

datas.innerHTML = array.join("</br>");

const inputData = document.getElementById("inputData");

const clears = document.getElementById("clears");

clears.addEventListener("click", () => {
  inputData.value = "";
});

const clearOutput = document.getElementById("clear-output");

clearOutput.addEventListener("click", () => {
  output.innerHTML = "";
  output.style.height = "264px";
});

const output = document.getElementById("output");

const convertLowerCase = document.getElementById("convertLowerCase");

convertLowerCase.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your text",
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
    return false;
  }
  let values = inputData.value;
  let toLowerCase = values.toLowerCase();
  output.innerHTML = toLowerCase;
});

const convertUpperCase = document.getElementById("convertUpperCase");

convertUpperCase.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your text",
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
    return false;
  }
  let values = inputData.value;
  let toUpperCase = values.toUpperCase();
  output.innerHTML = toUpperCase;
});

const convertCapitalize = document.getElementById("convertCapitalize");

convertCapitalize.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your text",
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
    return false;
  }
  let final = inputData.value;
  output.style.textTransform = "capitalize";
  output.innerHTML = final;
});

const betterFormatting = document.getElementById("betterFormatting");

betterFormatting.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your text",
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
    return false;
  }
  let values = inputData.value;
  let final = values
    .toLowerCase()
    .split(" ")
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    .join(" ");
  output.innerHTML = final;
});

const printAllCities = document.getElementById("printAllCities");

const cities = [
  "Faisalabad",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Burewala",
  "Sheikupura",
  "Kashmir",
];

function citiesUpdate() {
  cities.push(inputData.value);
}

printAllCities.addEventListener("click", () => {
  output.style.height = "auto";
  output.innerHTML = `
  ${cities
    .map(
      (item, index) =>
        `<p style="margin: 0px; text-align: center;">${index + 1}) ${item}</p>`,
    )
    .join("")}
  `;
});

const addYourCity = document.getElementById("addYourCity");

addYourCity.addEventListener("click", () => {
  let word = inputData.value.toLowerCase();
  let exist = cities.some((city) => city.toLowerCase() === word);
  if (inputData.value === "") {
    Toastify({
      text: "Please type your text",
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
  } else if (exist) {
    output.innerHTML = `
    <p><span style="color: red;">"${inputData.value}"</span> is already in list</p>
    `;
    return;
  }
  output.style.height = "264px";
  array.push(inputData.value);
  output.innerHTML = `
    <p><span style="color: green;">"${inputData.value}"</span> has been successfully added into list</p>
    `;
  citiesUpdate();
});

const checkYourCity = document.getElementById("checkYourCity");

checkYourCity.addEventListener("click", () => {
  let word = inputData.value.toLowerCase();
  let exist = cities.some((item) => item.toLowerCase() === word);

  if (inputData.value === "") {
    Toastify({
      text: "Please type your text",
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
  } else if (exist) {
    output.style.height = "264px";
    output.innerHTML = `
    <p><span style="color: green;">"${inputData.value}"</span> found in the list 💗</p>
    `;
    return;
  }
  output.innerHTML = `
    <p style="margin: 0;">SORRY 😔 We couldn't find your city<span style="color: red;">"${inputData.value}"</span> in list.</p>
    <p>Click <span style="color: green;">"Add Your City In List"</span> to add your city 😊</p>
    `;
});

const findThisWord = document.getElementById("findThisWord");

findThisWord.addEventListener("click", () => {
  let word = inputData.value.trim();
  let value = word.split("").filter((word) => word.length > 0);
  if (word === "") {
    Toastify({
      text: "Please type your word to find",
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
  } else if (value.length > 1) {
    Toastify({
      text: "Please type one word to find",
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
  } else if ((value.length = 1)) {
    let val = inputData.value.trim();
    let value1 = "I love my country Pakistan";
    let check = value1.indexOf(val);
    output.innerHTML = `<p>Index found at <span style="color: green;">${check}</span></p>`;
    return
  }
});

const replaceWord = document.getElementById("replaceWord");

replaceWord.addEventListener('click', ()=> {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your word to replace",
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
  let value = "I love my country Pakistan";
  let check = inputData.value;
  let checkIndex = value.replace(check, "****");
  output.innerHTML = `<p>Updatted sentense I love my country "<span style="color: green;">${check}</span>"</p>`
});