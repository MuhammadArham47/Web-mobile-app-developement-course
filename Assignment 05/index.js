const data = document.getElementById("datas");
const butt1 = document.getElementById("altName");

butt1.addEventListener("click", () => {
  const value = data.value.trim();
  const lettersOnly = /^[A-Za-z]+$/;
  if (value === "") {
    alert("Please use Value 😠");
  } else if (!lettersOnly.test(value)) {
    alert("Please use Aplhabets only !");
  } else {
    alert(value);
    outPut.value = value;
  }
});

const clear = document.getElementById("clear-state");
clear.addEventListener("click", () => {
  data.value = "";
});

const butt2 = document.getElementById("altNumb");

butt2.addEventListener("click", () => {
  const value = data.value.trim();
  const numbersOnly = /^[0-9]+$/;

  if (value === "") {
    alert("Please use Value 😠");
  } else if (!numbersOnly.test(value)) {
    alert("Please use Numbers only !");
  } else {
    alert(value);
    outPut.value = value;
  }
});

const outPut = document.getElementById("Output");
const clrOut = document.getElementById("clear-output");

clrOut.addEventListener("click", () => {
  outPut.value = "";
});

const showVariableName = document.getElementById("showVariable");

showVariableName.addEventListener("click", () => {
  const value = data.value.trim();

  if (value === "") {
    outPut.value = "";
  } else if (value) {
    outPut.value = "showVariableName";
  }
});

const camelCase = document.getElementById("shoeCamelcase");

camelCase.addEventListener("click", () => {
  const value = data.value

   const camelCase = value
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

    if (camelCase === "") {
        outPut.value = ""
    } else {
        outPut.value = camelCase
    };

});

const sumNumber = document.getElementById("sumNumbers");

sumNumber.addEventListener("click", ()=> {
    const value = data.value;

    const numbers = value.split(/[\s,]+/).filter(n => n);

    if (numbers.length < 2) {
        alert("please Use Tow Number e.g. [{ 10 10 }]")
        return;
    }

    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

     if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter only numbers");
        return;
    }

    const sum = num1 + num2;

    outPut.value = `${num1} + ${num2} = ${sum}`;

});

const substractNumb = document.getElementById("substractNumb");

substractNumb.addEventListener("click", ()=> {
    const value = data.value;

    const numbers = value.split(/[\s,]+/).filter(n => n);

    if (numbers.length < 2) {
        alert("Please Use Two Number e.g. [{ 3 2 }]")
    }

    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

     if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter only numbers");
        return;
    }

    const subtract = num1 - num2;

    outPut.value = `${num1} + ${num2} = ${subtract}`;
});

const multiplyNumbers = document.getElementById("multiplyNumbers");

multiplyNumbers.addEventListener("click", ()=> {
    const value = data.value;

    const numbers = value.split(/[\s,]+/).filter(n=> n);

    if (numbers.length < 2) {
        alert("Please Use Two Number e.g. [{ 5 5 }]");
    };

    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please Enter Onlu Numbers")
    };

    const multiply = num1 * num2;

    outPut.value = `${num1} * ${num2} = ${multiply}`;
});

const divideNumbers = document.getElementById("divideNumbers");

divideNumbers.addEventListener("click", ()=> {
    const value = data.value;

    const numbers = value.split(/[\s,]+/).filter(n=> n);

    if (numbers.length < 2) {
        alert("Please Use Two Number e.g. [{ 5 5 }]");
    };

    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please Enter Onlu Numbers")
    };

    const divide = num1 / num2;

    outPut.value = `${num1} / ${num2} = ${divide}`;
});

const calculateNumbers = document.getElementById("calculateNumbers");

calculateNumbers.addEventListener("click", ()=> {
    const value = data.value;

    if (!value) {
        alert("Please use some value for calculations !")
    };

    try {
        const results = eval(value);

        outPut.value = results
    } catch (error) {
        alert("Invalid calculation. Please check your input !")
    }
});