const outPut = document.getElementById("output");
const btn2 = document.getElementById("askName");

btn2.addEventListener("click", () => {
  let firstName = prompt("Enter you first name");
  alert("Good Evening " + firstName);
  outPut.innerHTML = firstName;
  outPut.style.textAlign = "center";
});

const clear = document.getElementById("clear-output");

clear.addEventListener("click", () => {
  outPut.innerHTML = "";
});

const ifElseIf = document.getElementById("ifElseIfCondition");

ifElseIf.addEventListener("click", () => {
  let num1 = prompt("Please enter num1 value for checking condition.");
  let num2 = 15;

  if (num1 > num2) {
    alert("Yes, your condition is true");
  } else if (num1 == num2) {
    alert("Yes, your second condition is true");
  } else if (num1 < num2) {
    alert("Yes, your third condition is true");
  } else {
    alert("No, your condition is false");
  }
});

const testingSets = document.getElementById("testingSets");

testingSets.addEventListener("click", () => {
  let age = prompt("Enter your age");

  if (age >= 18) {
    let weight = prompt("Enter your weight");

    if (age >= 18 && weight <= 70) {
      alert("you're a smart man.");
    } else if (age >= 18 && weight > 70) {
      alert("You're a fat guy");
    } else {
      alert("No, your value is false");
    }
  } else {
    alert("You're a baby");
  }
});

const login = document.getElementById("login");

login.addEventListener("click", () => {
  let userName = prompt("Enter your name");
  let userPassword = prompt("Enter your password");

  if (userName == "admin" && userPassword == "admin") {
    alert("User logged in");
  } else {
    alert("Invalid user name or password");
  }
});

const concatination = document.getElementById("concatination");

concatination.addEventListener("click", () => {
  let one = "Good ";
  let two = "Morning ";
  let three = "Arham ";
  let four = " !";
  alert(one + two + three + four);
});

const comparison = document.getElementById("comparisonOperator");

comparison.addEventListener("click", () => {
  let num1 = prompt("Enter any number => Hint: ('15')");
  let num2 = 15;

  if (num1 == num2) {
    alert("You're value is correct");
  } else {
    alert("You're value is not correct");
  }
});

const ifStarementNested = document.getElementById("ifStatementNested");

ifStarementNested.addEventListener("click", () => {
  let number = prompt("Enter you're marks");
  if (number >= 50) {
    if (number <= 90 && number >= 85) {
      alert("You got A+");
    } else if (number < 85 && number >= 80) {
      alert("You got A");
    } else if (number < 80 && number >= 75) {
      alert("You got B+");
    } else if (number < 75 && number >= 70) {
      alert("You got B");
    } else if (number < 70 && number >= 65) {
      alert("You got C+");
    } else if (number < 65 && number >= 60) {
      alert("You got C");
    } else if (number < 60 && number >= 55) {
      alert("You got D+");
    } else if (number < 55 && number >= 50) {
      alert("You got D");
    } else {
      alert("You're fail");
    }
  } else {
    alert("You're fail");
  };
});

// let variable = 123
