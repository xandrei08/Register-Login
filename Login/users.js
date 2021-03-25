import { users } from "../models/main.js";

export default class User {
  constructor(id, firstName, lastName, username, password, email, accountType) {
    this.id = User.getLastId(id);
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.accountType = accountType;
  }

  static getLastId(id) {
    if (users.length > 0) {
      return users[users.length - 1].id + 1;
    } else {
      return 1;
    }
  }

  static confirmUserExistence(email, password) {
    return users.some(
      (user) => user.email === email && user.password === password
    );
  }

  static getUsedIdByEmailInput(email) {
    let id = -1;
    users.filter((user) => {
      if (user.email === email) {
        id = user.id;
      }
    });
    return id;
  }

  static confirmUserExistenceRegistering(email, username) {
    return users.some(
      (user) => user.email === email && user.username === username
    );
  }
}
