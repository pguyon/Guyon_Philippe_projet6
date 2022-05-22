const btnCloseModal = document.getElementById("close__modal__btn");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  document.getElementById("main").setAttribute("aria-hidden", "true");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "false");
  btnCloseModal.focus();
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  document.getElementById("main").setAttribute("aria-hidden", "false");
  document.getElementById("contact_modal").setAttribute("aria-hidden", "true");
  modal.style.display = "none";
}

const btnSubmit = document.getElementsByClassName("contact_button")[0];
const firstname = document.getElementById("prenom");

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
