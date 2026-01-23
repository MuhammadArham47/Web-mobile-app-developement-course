const inputData = document.getElementById("inputData");
const outPut = document.getElementById("output");
const clearOutput = document.getElementById("clear-output");

const simpleAlert = document.getElementById("simpleAlert");

const clears = document.getElementById("clears");

clears.addEventListener("click", () => {
  inputData.value = "";
});

simpleAlert.addEventListener("click", () => {
  alert("This is simple alert");
});

const printMyName = document.getElementById("printMyName");

printMyName.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your name",
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
    outPut.style.textAlign = "center";
    outPut.innerHTML = inputData.value;
  }
});

clearOutput.addEventListener("click", () => {
  outPut.innerHTML = "";
  outPut.style.height = "176px";
});

const printAllCities = document.getElementById("printAllCities");

const array = [
  "Faisalabad",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Burewala",
  "Sheikupura",
  "Kashmir",
];

printAllCities.addEventListener("click", () => {
  outPut.style.height = "auto";
  outPut.innerHTML = `
    ${array
      .map(
        (item, index) =>
          `<p style="margin: 0px; text-align: center;">${index + 1}) ${item}</p>`,
      )
      .join("")}
    `;
});

const datass = document.getElementById("datas");

function arrayUpdata() {
  datass.innerHTML = "";

  array.forEach((item, index) => {
    let p = document.createElement("p");
    p.textContent = `${index + 1}) ${item}`;
    datass.appendChild(p);
  });
}

arrayUpdata();

const addYourCity = document.getElementById("addYourCity");

addYourCity.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type your city name",
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
    array.push(inputData.value);
    outPut.style.textAlign = "center";
    outPut.style.height = "176px";
    outPut.innerHTML = `<p>
    <span style="color: green;">"${inputData.value}"</span> has been successfully added into list
    </p>`;
    arrayUpdata();
  }
});

const generateTable = document.getElementById("generateTable");

generateTable.addEventListener("click", () => {
  if (inputData.value === "") {
    Toastify({
      text: "Please type a number",
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
    outPut.innerHTML = "";
    const num = inputData.value;

    for (let i = 1; i <= 10; i++) {
      const element = document.createElement("p");
      element.style.margin = "0px";
      outPut.style.textAlign = "center";
      outPut.style.height = "auto";
      element.textContent = `${num} X ${i} = ${num * i}`;
      outPut.appendChild(element);
    }
  }
});
