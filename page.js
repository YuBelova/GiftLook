const registrationBtn = document.querySelector("#registration");
const popupRegistartion = document.querySelector(".reg__popup");
const crossBtn = document.querySelector("#cross");
// const overlay = document.querySelector("#overlay");

registrationBtn.addEventListener("click", () => {
  popupRegistartion.classList.add("reg__popup--show");
});

crossBtn.addEventListener("click", () => {
  popupRegistartion.classList.remove("reg__popup--show");
});

// registrationBtn.addEventListener("click", () => {
//   overlay.classList.add("#overlay");
// });

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
