//login button event part
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transacArea = document.getElementById("transaction-area");
    transacArea.style.display = "block";
})

//deposit button event part
const depositBtn = document.getElementById("adddeposit");
depositBtn.addEventListener("click", function() {

    const depositNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currenBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

//withdraw button event part
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function() {

    const withdrawNumber = getInputNumber("withdrawamount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currenBalance", -1 * withdrawNumber);

    document.getElementById("withdrawamount").value = "";

});

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const curren = document.getElementById(id).innerText;
    const currenNumber = parseFloat(curren);
    const totalAmount = depositNumber + currenNumber;
    document.getElementById(id).innerText = totalAmount;
}