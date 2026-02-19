document.getElementById('cashout-btn')
    .addEventListener('click',function(){
        const agentNumber = getValueFromInput("agent-input");

        if(agentNumber.length != 11) {
            alert("Invalid Agent Number...");
            return;
        }

        const mainBalance = getBalance();
        const cashoutAmount = getValueFromInput('amount-input');

        const newBalance = mainBalance - Number(cashoutAmount);
        
        if(newBalance < 0) {
            alert("Invalid amount...");
            return;
        }

        const pin = getValueFromInput('pin-input');

        if(pin == '1234') {
            alert('Cashout successful...');
            setBalance(newBalance);
        }
        else {
            alert('Invalid PIN...');
            return;
        }
    });