function getValueFromInput (id) {
    const value = document.getElementById(id).value;
    return value;
}
function getBalance () {
    const balance = document.getElementById("balance").innerText;
    return Number(balance);
}
function setBalance (value) {
    const balance = document.getElementById('balance');
    balance.innerText = value;
}
function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const transaction = document.getElementById("transaction");
    const sendMoney = document.getElementById('send-money');
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transaction.classList.add("hidden");
    sendMoney.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}