document.getElementById('cashout-btn')
    .addEventListener('click',function(){
        const agentNumber = document.getElementById('agent-input').value;

        if(agentNumber.length != 11) {
            alert("Invalid Agent Number...");
            return;
        }

        const mainBalance = document.getElementById('balance');
        const balance = mainBalance.innerText;
        const cashoutAmount = document.getElementById('amount-input').value;
        const newBalance = Number(balance) - Number(cashoutAmount);
        
        if(newBalance < 0) {
            alert("Invalid amount...");
            return;
        }

        const pin = document.getElementById('pin-input').value;

        if(pin == '1234') {
            alert('Cashout successful...');
            mainBalance.innerText = newBalance;
        }
        else {
            alert('Invalid PIN...');
            return;
        }
    });