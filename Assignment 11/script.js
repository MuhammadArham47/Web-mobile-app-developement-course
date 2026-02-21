const output = document.getElementById("output");
const ifElse = document.getElementById("ifElse");

ifElse.addEventListener('click', ()=> {
    let date = new Date();
    let now = date.getDay();

    if (now === 0) {
        alert("It's Sunday")
        output.innerHTML = "It's Sunday";
    } else if (now === 1) {
        alert("It's Monday")
        output.innerHTML = "It's Monday";
    } else if (now === 2) {
        alert("It's Tuesday")
        output.innerHTML = "It's Tuesday";
    } else if (now === 5) {
        alert("It's Friday")
        output.innerHTML = "It's Friday";
    } else {
        alert("It's Some other day")
        output.innerHTML = "It's Some other day";
    }
});

const clearOutput = document.getElementById("clear-output");

clearOutput.addEventListener("click", ()=> {
    output.innerHTML = ""
});

const switchStatement = document.getElementById("switch");

switchStatement.addEventListener("click", ()=> {
    let date = new Date();
    let now = date.getDay();

    switch (now) {
        case 0:
        case 6: output.innerHTML = "It's Sunday or Saturday"
            break;
        case 1: output.innerHTML = "It's Monday"
            break;
        case 2: output.innerHTML = "It's Tuesday"
            break;
        case 5: output.innerHTML = "It's Friday"
            break;
        default: output.innerHTML = "It's Some other day"
            break;
    }
});

const keepAskingTheName = document.getElementById("keepAskingTheName");

keepAskingTheName.addEventListener('click', ()=> {
    do {
        var name = prompt("Enter your name");
    } while (name === "" || name === null ) {
        output.innerHTML = name
    }
})