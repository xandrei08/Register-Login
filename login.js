import { users } from "main.js";
import User from "users.js";

let loginForm = document.querySelector("#loginForm");
let usserLoggedIn;

loginForm.addEventListener("submit", (e) => {
  let emailInput = document.querySelector("#email").value;
  let passwordInput = document.querySelector("#password").value;

  if (User.confirmUserExistence(emailInput, passwordInput)) {
    usserLoggedIn = User.getUsedIdByEmailInput(emailInput);

    sessionStorage.setItem("loggedUserID", JSON.stringify(usserLoggedIn));
  } else {
    alert("You missed the credentials");
  }

  for (let user of users) {
    if (
      User.getUsedIdByEmailInput(emailInput) === user.id &&
      user.accountType === "1"
    ) {
      window.location = "../views/dailyUser.html";
    } else if (
      User.getUsedIdByEmailInput(emailInput) === user.id &&
      user.accountType === "2"
    ) {
      window.location = "../views/admin.html";
    }
  }

  loginForm.reset();
  e.preventDefault();
});
