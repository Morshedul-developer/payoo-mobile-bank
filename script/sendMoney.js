document.getElementById('send-money-btn')
    .addEventListener('click',function(){
        const acNo = getValueFromInput('send-money-ac');
        if(acNo.length != 11) {
            alert("Invalid AC No...");
            return;
        }

        const amount = getValueFromInput('send-money-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance - Number(amount);
        if(newBalance<0) {
            alert('Invalid amount...');
            return;
        }

        const pin = getValueFromInput('send-money-pin');
        if(pin=="1234") {
            alert(`Send ${amount} tk successful...`);
            setBalance(newBalance);
        }
        else{
            alert('Invalid PIN...');
            return;
        }

        // transaction
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="bg-base-100 p-5 rounded-lg">
            <p class="text-blue-500">Money send ${amount} tk successfully done.</p>
            </div>
            `;
            history.appendChild(newHistory);
    });