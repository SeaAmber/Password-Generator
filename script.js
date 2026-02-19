
const passwordOutput = document.getElementById("passwordOutput");
const lengthInput = document.getElementById("lengthInput");
const includeUpper = document.getElementById("includeUpper");
const includeLower = document.getElementById("includeLower");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/";

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let chars = "";

  if (includeUpper.checked) chars += upperChars;
  if (includeLower.checked) chars += lowerChars;
  if (includeNumbers.checked) chars += numberChars;
  if (includeSymbols.checked) chars += symbolChars;

  if (chars.length === 0) {
    passwordOutput.value = "Select options!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordOutput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordOutput.value) return;

  navigator.clipboard.writeText(passwordOutput.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});
