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