
function openCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = "block";
}

function closeCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = "none";
}


function toggleCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  if (calculatorPopup.style.display === "block") {
    closeCalculator();
  } else {
    openCalculator();
  }
}




