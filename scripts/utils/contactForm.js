function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
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
  checkFirstname();
}

firstname.addEventListener("keyup", checkFirstname);
