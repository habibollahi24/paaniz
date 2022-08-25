const form = document.querySelector(".form");
const username = document.getElementById("name");
const family = document.getElementById("family");
const city = document.getElementById("city");
const country = document.getElementById("country");
const email = document.getElementById("email");
const alertText = document.querySelector(".alert-text");
const alertContainer = document.querySelector(".alert-container");
const inputsValidation = document.querySelectorAll(".input-validation");
const textEmailValidation = document.querySelector(".text-email-validation");
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  let validation = true;
  const nameValue = username.value.trim();
  const familyValue = family.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const emailValue = email.value.trim();

  if (
    nameValue === "" ||
    familyValue === "" ||
    cityValue === "" ||
    countryValue === "" ||
    emailValue === ""
  ) {
    validation = false;
    inputsValidation.forEach((input) => {
      if (input.value === "") {
        input.style.border = "2px solid #f43f5e";
      }
    });
    alertText.textContent = "Please Fill in The Marked Fields";
    alertContainer.classList.add("alert-container-transform");
    alertContainer.classList.add("danger");
    setTimeout(() => {
      alertContainer.classList.remove("alert-container-transform");
      alertContainer.classList.remove("danger");
    }, 4000);
  }

  if (!validateEmail(emailValue)) {
    validation = false;
    if (emailValue !== "") {
      textEmailValidation.textContent = "Email Not Valid ...";
    }
  }

  if (validation) {
    alertText.textContent = "Thank You For Your Message...";
    alertContainer.classList.add("alert-container-transform");
    alertContainer.classList.add("sucsses");
    setTimeout(() => {
      alertContainer.classList.remove("alert-container-transform");
      alertContainer.classList.remove("sucsses");
    }, 4000);
    username.value = "";
    family.value = "";
    city.value = "";
    country.value = "";
    email.value = "";
  }
}

inputsValidation.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      input.style.border = "2px solid #aaa";
    }
  });
});

email.addEventListener("input", (e) => {
  if (validateEmail(e.target.value)) {
    textEmailValidation.textContent = "";
  }
});
