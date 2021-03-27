import { users } from "./main.js";
import User from "./users.js";

let registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (e) => {
  let firstNameInput = document.querySelector("#firstName").value;
  let lastNameInput = document.querySelector("#lastName").value;
  let usernameInput = document.querySelector("#username").value;
  let passwordInput = document.querySelector("#password").value;
  let emailInput = document.querySelector("#email").value;

  if (User.confirmUserExistenceRegistering(emailInput, usernameInput)) {
    alert("The username or email is already taken");
  } else {
    users.push(
      new User(
        User.getLastId(),
        firstNameInput,
        lastNameInput,
        usernameInput,
        passwordInput,
        emailInput,
        "1"
      )
    );
    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(() => {
      alert("Thank you for Registering");
      location.href = "Login/index.html";
    }, 500);
  }
  registerForm.reset();
  e.preventDefault();
});
