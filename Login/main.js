export let users = [];

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users.push(
    {
      id: 1,
      firstName: "John",
      lastName: "Travolta",
      username: "john",
      password: "john12",
      email: "john@yahoo.com",
      accountType: "1",
    },
    {
      id: 2,
      firstName: "Billy",
      lastName: "Boy",
      username: "billy",
      password: "boy",
      email: "billy@gmail.com",
      accountType: "2",
    }
  );
  localStorage.setItem("users", JSON.stringify(users));
}
