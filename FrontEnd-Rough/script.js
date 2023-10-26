// JavaScript for showing/hiding Login and registration forms

const loginOption = document.getElementById("login-option");
const registerOption = document.getElementById("register-option");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginOption.addEventListener("click", () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  loginOption.style.backgroundColor = "#292b2c";
  registerOption.style.backgroundColor = "#555";
});

registerOption.addEventListener("click", () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  registerOption.style.backgroundColor = "#292b2c";
  loginOption.style.backgroundColor = "#555";
});

function toggleMobileMenu() {
  const navLinks = document.getElementById("nav-links");
  const bars = document.querySelectorAll(".bar");

  navLinks.classList.toggle("active");
  bars[0].classList.toggle("active1");
  bars[1].classList.toggle("active2");
  bars[2].classList.toggle("active3");
}

//
