// Création des variables
const btnSubmit = document.getElementsByClassName("contact_button")[0];
// Variables du prénom
const firstname = document.getElementById("prenom");
const firstnameError = document.getElementById("prenom__error");
const firstnameRegexError = document.getElementById("prenom__regex__error");

// Variables du nom
const lastname = document.getElementById("nom");
const lastnameError = document.getElementById("nom__error");
const lastnameRegexError = document.getElementById("nom__regex__error");

// Création des REGEX
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexText = /^[A-Za-z]+$/;

// affichage et fermeture du modal
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

// Vérification des données
function checkFirstname() {
  const firstname = document.getElementById("prenom").value.trim();
  if (!firstname) {
    firstnameError.classList.remove("error");
    firstnameRegexError.classList.add("regex__error");
    return false;
  } else if (firstname.length <= 2) {
    firstnameError.classList.remove("error");
    firstnameRegexError.classList.add("regex__error");
    return false;
  } else if (!regexText.test(firstname)) {
    firstnameError.classList.add("error");
    firstnameRegexError.classList.remove("regex__error");
    return false;
  } else {
    firstnameError.classList.add("error");
    firstnameRegexError.classList.add("regex__error");
    console.log("Prénom : ", firstname);
    return true;
  }
}

function checklastname() {
  const lastname = document.getElementById("nom").value.trim();
  if (!lastname) {
    lastnameError.classList.remove("error");
    lastnameRegexError.classList.add("regex__error");
    return false;
  } else if (lastname.length <= 2) {
    lastnameError.classList.remove("error");
    lastnameRegexError.classList.add("regex__error");
    return false;
  } else if (!regexText.test(lastname)) {
    lastnameError.classList.add("error");
    lastnameRegexError.classList.remove("regex__error");
    return false;
  } else {
    lastnameError.classList.add("error");
    lastnameRegexError.classList.add("regex__error");
    console.log("Nom : ", lastname);
    return true;
  }
}

firstname.addEventListener("keyup", checkFirstname);
lastname.addEventListener("keyup", checklastname);

// Validation du formulaire
function validate(e) {
  e.preventDefault();
  const firstValue = document.getElementById("prenom").value.trim();
  console.log(firstValue);
}

// Focus sur le modal pour l'accessibilité
function getfocus() {
  document.getElementById("close__modal__btn").focus();
}

document
  .querySelector(".header__contact__button")
  .addEventListener("click", getfocus);
