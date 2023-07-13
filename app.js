const inputRef = document.getElementById("input-palindrome");
const checkButton = document.getElementById("check");
const resultRef = document.querySelector(".result");

checkButton.addEventListener("click", () => {
  const isPalindrome =
    inputRef.value.toLowerCase() ==
    inputRef.value
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
      .split(" ")
      .reverse()
      .join(" ");

  //
  if (inputRef.value.split("").length <= 1) {
    return alert("Invalid Input");
  }

  //
  resultRef.classList.remove(!isPalindrome ? "correct" : "inccorect");
  resultRef.classList.add(isPalindrome ? "correct" : "inccorect");

  //
  resultRef.textContent = isPalindrome
    ? `Yes. It's a palindrome!`
    : `Nope. Not a palindrome!`;

  animate(resultRef);
});

//
function animate(elem) {
  elem.classList.add("animate");
  setTimeout(() => {
    elem.classList.remove("animate");
  }, 300);
}
