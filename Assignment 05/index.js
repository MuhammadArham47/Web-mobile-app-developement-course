const data = document.getElementById("datas");
const butt1 = document.getElementById("altName");

butt1.addEventListener("click", () => {
  // const value = data.value.trim();
  // const lettersOnly = /^[A-Za-z]+$/;
  // if (value === "") {
  //   alert("Please use Value 😠");
  // } else if (!lettersOnly.test(value)) {
  //   alert("Please use Aplhabets only !");
  // } else {
  //   alert(value);
  //   outPut.value = value;
  // }
  alert('Muhammad Arham Sanaullah');
  data.innerHTML = "alert('Muhammad Arham Sanaullah')";
  data.style.padding = '20px 0px'
  outPut.innerHTML = ""
});

const clear = document.getElementById("clear-state");
clear.addEventListener("click", () => {
  data.innerHTML = "";
  data.style.padding = '8px'
});

const butt2 = document.getElementById("altNumb");

butt2.addEventListener("click", () => {
  // const value = data.value.trim();
  // const numbersOnly = /^[0-9]+$/;

  // if (value === "") {
  //   alert("Please use Value 😠");
  // } else if (!numbersOnly.test(value)) {
  //   alert("Please use Numbers only !");
  // } else {
  //   alert(value);
  //   outPut.value = value;
  // }
  alert(123);
  data.innerHTML = "alert(123)";
  data.style.padding = '20px 0px'
  outPut.innerHTML = ""
});

const outPut = document.getElementById("output");
const clrOut = document.getElementById("clear-output");

clrOut.addEventListener("click", () => {
  outPut.innerHTML = "";
});

const showVariableName = document.getElementById("showVariable");

showVariableName.addEventListener("click", () => {
  // const value = data.value.trim();

  // if (value === "") {
  //   outPut.value = "";
  // } else if (value) {
  //   outPut.value = "showVariableName";
  // }
  data.innerHTML = ""
  let html = "<ul><li>A variable name can't contain any space</li><li>A variable can contain only letters, numbers, dollar signs, and underscores.</li><li>Through a variable name can't be any of javascript's keywords, it can contain keywords, for example, <span style='color: red'>userAlert</span> and <span style='color: red'>myVar</span> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <span style='color: red'>rose</span> is not a <span style='color: red'>Rose</span>. if you assign the string 'Floribunds' to the variable <span style='color: red'>Rose</span>, and than ask JavaScript for the value assigned to <span style='color: red'>Rose</span>, you'll come up empty.</li></ul>";
  outPut.innerHTML = html;
  outPut.style.textAlign = "start"
});

const camelCase = document.getElementById("shoeCamelcase");

camelCase.addEventListener("click", () => {
  // const value = data.value

  //  const camelCase = value
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word, index) => {
  //     if (index === 0) {
  //       return word;
  //     }
  //     return word.charAt(0).toUpperCase() + word.slice(1);
  //   })
  //   .join("");

  //   if (camelCase === "") {
  //       outPut.value = ""
  //   } else {
  //       outPut.value = camelCase
  //   };
  data.innerHTML = ""
  let html = "<h1>Examples</h1><ul><li><span style='color: red'>user</span style='color: red'></li><li><span style='color: red'>userResponse</span></li><li><span style='color: red'>userResponseTime</span></li><li><span style='color: red'>userResponseTimeLimit</span></li></ul>";
  outPut.innerHTML = html;
  outPut.style.textAlign = "start"
});

const sumNumber = document.getElementById("sumNumbers");

sumNumber.addEventListener("click", ()=> {
    // const value = data.value;

    // const numbers = value.split(/[\s,]+/).filter(n => n);

    // if (numbers.length < 2) {
    //     alert("please Use Tow Number e.g. [{ 10 10 }]")
    //     return;
    // }

    // const num1 = parseFloat(numbers[0]);
    // const num2 = parseFloat(numbers[1]);

    //  if (isNaN(num1) || isNaN(num2)) {
    //     alert("Please enter only numbers");
    //     return;
    // }

    // const sum = num1 + num2;

    // outPut.value = `${num1} + ${num2} = ${sum}`;
    let html = "<p>let num1 = 10;</p><p>let num2 = 5;</p><p>let sum = num1 + num2;</p>";
    data.innerHTML = html;
    outPut.style.textAlign = "center"
    outPut.innerHTML = 15;
});

const substractNumb = document.getElementById("substractNumb");

substractNumb.addEventListener("click", ()=> {
    // const value = data.value;

    // const numbers = value.split(/[\s,]+/).filter(n => n);

    // if (numbers.length < 2) {
    //     alert("Please Use Two Number e.g. [{ 3 2 }]")
    // }

    // const num1 = parseFloat(numbers[0]);
    // const num2 = parseFloat(numbers[1]);

    //  if (isNaN(num1) || isNaN(num2)) {
    //     alert("Please enter only numbers");
    //     return;
    // }

    // const subtract = num1 - num2;

    // outPut.value = `${num1} + ${num2} = ${subtract}`;
    let html = "<p>let num1 = 10;</p><p>let num2 = 5;</p><p>let sum = num1 - num2;</p>";
    data.innerHTML = html;
    outPut.style.textAlign = "center"
    outPut.innerHTML = 5;
});

const multiplyNumbers = document.getElementById("multiplyNumbers");

multiplyNumbers.addEventListener("click", ()=> {
    // const value = data.value;

    // const numbers = value.split(/[\s,]+/).filter(n=> n);

    // if (numbers.length < 2) {
    //     alert("Please Use Two Number e.g. [{ 5 5 }]");
    // };

    // const num1 = parseFloat(numbers[0]);
    // const num2 = parseFloat(numbers[1]);

    // if (isNaN(num1) || isNaN(num2)) {
    //     alert("Please Enter Onlu Numbers")
    // };

    // const multiply = num1 * num2;

    // outPut.value = `${num1} * ${num2} = ${multiply}`;
    let html = "<p>let num1 = 10;</p><p>let num2 = 5;</p><p>let sum = num1 * num2;</p>";
    data.innerHTML = html;
    outPut.style.textAlign = "center"
    outPut.innerHTML = 50;
});

const divideNumbers = document.getElementById("divideNumbers");

divideNumbers.addEventListener("click", ()=> {
    // const value = data.value;

    // const numbers = value.split(/[\s,]+/).filter(n=> n);

    // if (numbers.length < 2) {
    //     alert("Please Use Two Number e.g. [{ 5 5 }]");
    // };

    // const num1 = parseFloat(numbers[0]);
    // const num2 = parseFloat(numbers[1]);

    // if (isNaN(num1) || isNaN(num2)) {
    //     alert("Please Enter Onlu Numbers")
    // };

    // const divide = num1 / num2;

    // outPut.value = `${num1} / ${num2} = ${divide}`;
    let html = "<p>let num1 = 10;</p><p>let num2 = 5;</p><p>let sum = num1 / num2;</p>";
    data.innerHTML = html;
    outPut.style.textAlign = "center"
    outPut.innerHTML = 2;
});

const calculateNumbers = document.getElementById("calculateNumbers");

calculateNumbers.addEventListener("click", ()=> {
    // const value = data.value;

    // if (!value) {
    //     alert("Please use some value for calculations !")
    // };

    // try {
    //     const results = eval(value);

    //     outPut.value = results
    // } catch (error) {
    //     alert("Invalid calculation. Please check your input !")
    // }
    let html = "<p>let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);</p>";
    data.innerHTML = html;
    outPut.style.textAlign = "center"
    outPut.innerHTML = 26;
});