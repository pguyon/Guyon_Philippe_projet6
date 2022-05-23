const btnSubmit = document.getElementsByClassName("contact_button")[0];
const firstname = document.getElementById("prenom");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "false");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "true");
  modal.style.display = "none";
}

function checkFirstname() {
  const firstname = document.getElementById("prenom").value.trim();
  if (!firstname) {
    console.log("pas de saisie");
  } else if (firstname.length <= 4) {
    console.log("saisie trop courte");
  } else {
    console.log("good");
  }
}

function validate(e) {
  e.preventDefault();
  const firstValue = document.getElementById("prenom").value.trim();
  console.log(firstValue);
}

firstname.addEventListener("keyup", checkFirstname);

function getfocus() {
  document.getElementById('close__modal__btn').focus();
}

document.querySelector(".header__contact__button").addEventListener("click", getfocus);
