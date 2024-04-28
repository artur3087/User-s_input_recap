let username;
let abc = document.getElementById("youarewelcome");
let nameBtn = document.getElementById("nameBtn").addEventListener("click", inputTaken);

function inputTaken() {
   username = document.getElementById("nameInput").value;
   console.log(username);
    // document.getElementById("youarewelcome").textContent = `Hello ${username}`
    abc.innerHTML = `hello ${username}`;
}
