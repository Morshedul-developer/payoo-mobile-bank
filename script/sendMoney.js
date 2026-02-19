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
    });