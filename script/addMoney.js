document.getElementById('add-money-btn')
    .addEventListener('click',function(){
        const bank = getValueFromInput('add-money-bank');
        if(bank=="Select bank"){
            alert('Please select a bank...');
            return;
        }
        const acNo = getValueFromInput('ac-number');
        if(acNo.length != 11) {
            alert('Invalid AC No...');
            return;
        }
        const amount = getValueFromInput('add-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(amount);
        
        const pin = getValueFromInput('pin-input');
        if(pin=='1234'){
            alert(`Add money successful 
                form ${bank}
                at ${new Date()}`);
            setBalance(newBalance);

            // transaction
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="bg-base-100 p-5 rounded-lg">
            <p>Add money successful 
                form ${bank}
                at ${new Date()}</p>
            </div>
            `;
            history.appendChild(newHistory);
        }
        else{
            alert('Invalid PIN...');
            return;
        }
    });