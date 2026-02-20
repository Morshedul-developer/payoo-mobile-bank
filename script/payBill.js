document.getElementById('pay-biller-btn')
    .addEventListener('click',function(){
        const bank = getValueFromInput('pay-bill-bank');
        if(bank=="Select bank") {
            alert("Please select a bank...");
            return;
        }

        const billerAc = getValueFromInput('biller-ac-number');
        if(billerAc.length != 11) {
            alert("Invalid AC no...");
            return;
        }

        const amount = getValueFromInput('biller-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance - amount;
        if(newBalance<0) {
            alert('Invalid amount...');
            return;
        }

        const pin = getValueFromInput('pin-biller');
        if(pin == "1234") {
            alert(`${amount} tk bill paid successful from
                AC : ${billerAc}`)
            setBalance(newBalance);
        }
        else {
            alert('Invalid PIN...')
        }

        // transaction
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="bg-base-100 p-5 rounded-lg">
            <p class="text-blue-500">Bill paid successful ${amount} tk
                form ${bank}
                at ${new Date()}</p>
            </div>
            `;
            history.appendChild(newHistory);
    });