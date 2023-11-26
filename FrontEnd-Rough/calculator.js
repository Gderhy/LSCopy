
function openCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = "block";
}

function closeCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = "none";
}


export function toggleCalculator() {
  const calculatorPopup = document.getElementById("mortgage-calculator-popup");
  calculatorPopup.style.display = (calculatorPopup.style.display === 'none' ? 'block' : 'none');
}

function calculateMonthlyPayment() {
  
  var propertyAmount = parseFloat(document.getElementById('property-amount').value);
  var downPayment = parseFloat(document.getElementById('down-payment').value);
  var annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value) / 100;
  var amortizationPeriod = parseFloat(document.getElementById('amortization-period').value);

  var principal = propertyAmount - downPayment;

  var monthlyInterestRate = annualInterestRate / 12;

  var numberOfPayments = amortizationPeriod * 12;

  var monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  var resultElement = document.getElementById('monthly-payment-result');
  if(isFinite(monthlyPayment)){
      resultElement.innerText = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
  } else {
      resultElement.innerText = 'Please check the values entered.';
  }
}



