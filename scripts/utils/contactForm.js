// Variables du prénom
const firstName = document.getElementById("firstName");
const firstnameError = document.getElementById("firstName__error");
const firstnameRegexError = document.getElementById("firstName__regex__error");

// Variables du nom
const lastName = document.getElementById("lastName");
const lastnameError = document.getElementById("lastName__error");
const lastnameRegexError = document.getElementById("lastName__regex__error");

// Variables de l'email
const Email = document.getElementById("email");
const emailError = document.getElementById("email__error");
const emailRegexError = document.getElementById("email__regex__error");

// Variables du message
const Message = document.getElementById("message");
const textAreaError = document.getElementById("textarea__error");

// Création des REGEX
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexText = /^[A-Za-z]+$/;

// Vérification du prénom
function checkFirstname() {
  const firstname = document.getElementById("firstName").value.trim();
  if (!firstname) {
    firstnameError.classList.remove("error");
    firstnameRegexError.classList.add("regex__error");
    firstName.setAttribute("aria-invalid", "true");
    return false;
  } else if (firstname.length <= 2) {
    firstnameError.classList.remove("error");
    firstnameRegexError.classList.add("regex__error");
    firstName.setAttribute("aria-invalid", "true");
    return false;
  } else if (!regexText.test(firstname)) {
    firstnameError.classList.add("error");
    firstnameRegexError.classList.remove("regex__error");
    firstName.setAttribute("aria-invalid", "true");
    return false;
  } else {
    firstnameError.classList.add("error");
    firstnameRegexError.classList.add("regex__error");
    firstName.removeAttribute("aria-invalid");
    return true;
  }
}

// Vérification du nom
function checklastname() {
  const lastname = document.getElementById("lastName").value.trim();
  if (!lastname) {
    lastnameError.classList.remove("error");
    lastnameRegexError.classList.add("regex__error");
    lastName.setAttribute("aria-invalid", "true");
    return false;
  } else if (lastname.length <= 2) {
    lastnameError.classList.remove("error");
    lastnameRegexError.classList.add("regex__error");
    lastName.setAttribute("aria-invalid", "true");

    return false;
  } else if (!regexText.test(lastname)) {
    lastnameError.classList.add("error");
    lastnameRegexError.classList.remove("regex__error");
    lastName.setAttribute("aria-invalid", "true");

    return false;
  } else {
    lastnameError.classList.add("error");
    lastnameRegexError.classList.add("regex__error");
    lastName.removeAttribute("aria-invalid");
    return true;
  }
}

// Vérification du message
function checkMessage() {
  const textValue = document.getElementById("message").value.trim();
  if (!textValue || textValue.length <= 10) {
    textAreaError.classList.remove("error");
    Message.setAttribute("aria-invalid", "true");
    return false;
  } else {
    textAreaError.classList.add("error");
    Message.removeAttribute("aria-invalid");
    return true;
  }
}

// Vérification de l'email
function checkEmail() {
  const emailValue = document.getElementById("email").value.trim();
  if (!emailValue) {
    emailError.classList.remove("error");
    emailRegexError.classList.add("regex__error");
    Email.setAttribute("aria-invalid", "true");
    return false;
  } else if (!regexEmail.test(emailValue)) {
    emailRegexError.classList.remove("regex__error");
    emailError.classList.add("error");
    Email.setAttribute("aria-invalid", "true");
    return false;
  } else {
    emailRegexError.classList.add("regex__error");
    emailError.classList.add("error");
    Email.removeAttribute("aria-invalid");
    return true;
  }
}

// Vérification dynamique des données
firstName.addEventListener("keyup", checkFirstname);
lastName.addEventListener("keyup", checklastname);
Email.addEventListener("keyup", checkEmail);
Message.addEventListener("keyup", checkMessage);

// Ouverture du modal
const openModal = () => {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.getElementById('main').setAttribute('aria-hidden', "true")
};

// Fermeture du modal
const closeModal = () => {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.getElementById('main').setAttribute('aria-hidden', "false")

};

const addModalEvents = () => {
  document.getElementById("openModal").addEventListener("click", openModal);
  document.getElementById("closeModal").addEventListener("click", closeModal);

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    const textValue = document.getElementById("message").value.trim();
    const lastname = document.getElementById("lastName").value.trim();
    const firstname = document.getElementById("firstName").value.trim();
    const emailValue = document.getElementById("email").value.trim();

    checkFirstname();
    checklastname();
    checkEmail();
    checkMessage();

    if (checkFirstname() && checklastname() && checkEmail() && checkMessage()) {
      e.preventDefault();
      console.log("Prénom : ", firstname);
      console.log("Nom : ", lastname);
      console.log("Email : ", emailValue);
      console.log("Message : ", textValue);
      closeModal();
    } else {
      e.preventDefault();
    }
  });
};
