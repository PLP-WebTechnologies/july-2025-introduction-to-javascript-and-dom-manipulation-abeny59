
// Basics
function checkAge() {
  let age = document.getElementById("ageInput").value; // variable & input
  let result = "";

  // conditionals
  if (age >= 18) {
    result = "You are an adult ";
  } else if (age > 0) {
    result = "You are a minor ";
  } else {
    result = "Please enter a valid age ⚠️";
  }

  document.getElementById("ageResult").innerText = result;
}


//  Functions
function greetUser(name) {
  return "Hello, "+ name +" !"+" Welcome to JavaScript" ;
}

function showGreeting() {
  let message = greetUser("Abeny"); // calling reusable function
  document.getElementById("greetingResult").innerText = message;
}


//  Loops
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old numbers

  let items = "";
  for (let i = 1; i <= 5; i++) {
    items += "<li>Number:" + i + "</li>";
  }
  list.innerHTML = items;

  // Example of while loop
  let count = 5;
  while (count > 0) {
    console.log("Countdown: " + count);
    count--;
  }
}


//  DOM Manipulation
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  let message = document.getElementById("domMessage");
  if (document.body.classList.contains("dark-mode")) {
    message.innerText = "Dark mode is ON ";
  } else {
    message.innerText = "Light mode is ON ";
  }
}
