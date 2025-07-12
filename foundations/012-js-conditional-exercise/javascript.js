let userLogin = prompt("Who's there?");

userLogin = userLogin.trim().toLowerCase();

if (userLogin === "admin") {
  let userPassword = prompt("Password?");
  if (userPassword === "TheMaster") {
    alert("Welcome!");
  } else if (userPassword === null || userPassword === "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userLogin === null || userPassword === "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}
