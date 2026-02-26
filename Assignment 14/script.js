const textInput = document.getElementById("text");

const buttons = document.querySelectorAll(".buttons");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // dataset.value se hum HTML ka data-value uthate hain
        const value = e.target.dataset.value;

        if (value === "C") {
            // Screen clear karein
            currentInput = "";
            textInput.value = "";
        } 
        else if (value === "=") {
            try {
                // eval use karke calculate karein
                // textInput.value hi hamari string hai
                const result = eval(currentInput); 
                textInput.value = result;
                currentInput = result.toString(); 
            } catch (error) {
                textInput.value = "Error";
                currentInput = "";
            }
        } 
        else {
            // Numbers aur operators ko add karein
            currentInput += value;
            textInput.value = currentInput;
        }
    });
});