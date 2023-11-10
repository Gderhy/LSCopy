// JavaScript for the mortgage calculator

// Function to open the calculator popup
function openCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = "block";
}

// Function to close the calculator popup
function closeCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = "none";
}

// Function to toggle the calculator popup
function toggleCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  if (calculatorPopup.style.display === "block") {
    closeCalculator();
  } else {
    openCalculator();
  }
}

// We need to add code to make calc actually calculate



