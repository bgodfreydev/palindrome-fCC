const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultBlock = document.getElementById("result");

const isPalindrome = (input) => {
  
  if (input === '') {
    alert("Please input a value");
    return;
  } else if (input === "A") {
    console.log("A is a palindrome.")
    return;
  }
}

checkButton.addEventListener("click", () => {
  isPalindrome(textInput.value);
  textInput.value = '';
  console.log("work work")
})

textInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    isPalindrome(textInput.value);
    textInput.value = '';
  }
})