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

        const pin = getValueFromInput('pin-cashout');
        console.log(pin);

        if(pin == '1234') {
            alert('Cashout successful...');
            setBalance(newBalance);

            // transaction
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="bg-base-100 p-5 rounded-lg">
            <p class="text-red-500">CashOut successful ${newBalance} tk form ${agentNumber} at ${new Date()}</p>
            </div>
            `;
            history.appendChild(newHistory);
        }
        else {
            alert('Invalid PIN...');
            return;
        }
    });