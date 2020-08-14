// const loginBtn = document.getElementById("login");
// loginBtn.addEventListener("click", function() {
//     const loginArea = document.getElementById("login-area");
//     loginArea.style.display = "none";
// });


const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transacArea = document.getElementById("transaction-area");
    transacArea.style.display = "block";
});