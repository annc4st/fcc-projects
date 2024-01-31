const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");


const telReg1 = /^1\s5{3}-5{3}-5{4}$/;
const telReg2 = /^1\s\(5{3}\)\s5{3}-5{4}$/;
const telReg3 = /^1\(555\)5{3}-5{4}$/;//1(555)555-5555.
const telReg4 = /^1\s5{3}\s5{3}\s5{4}$/; 
const telReg5 = /^5{10}$/;
const telReg6 = /^5{3}-5{3}-5{4}$/;
const telReg7 = /^\(5{3}\)5{3}-5{4}$/;
const telReg8 = /^1\s5{3}\s5{3}-5{4}$/;
const telReg9 = /^1\s(\d{3})\s(\d{3})\s(\d{4})$/; //1 456 789 4444

const regexList = [telReg1, telReg2, telReg3, telReg4, telReg5, telReg6, telReg7, telReg8, telReg9]

const isValid = (tel) => regexList.some((regex) => regex.test(tel));

checkButton.addEventListener("click", () =>{

    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }

  resultDiv.textContent = isValid(input.value) ?
  "Valid US number: " + input.value : "Invalid US number: " + input.value;
})

clearButton.addEventListener("click", () => {
    resultDiv.textContent = '';
});