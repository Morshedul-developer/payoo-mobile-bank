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
        }
        else{
            alert('Invalid PIN...');
            return;
        }
    });