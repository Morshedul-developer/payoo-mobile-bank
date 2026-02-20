document.getElementById('get-bonus-btn')
    .addEventListener('click',function(){
        const coupon = getValueFromInput('get-bonus-input');

        const currentBalance = getBalance();
        const coupon1 = currentBalance + 100;
        const coupon2 = currentBalance + 1000;
        const coupon3 = currentBalance + 2000;
        if(coupon == "hundred") {
            setBalance(coupon1);
        }
        else if(coupon == "thousand") {
            setBalance(coupon2);
        }
        else if(coupon == "two-thousand") {
            setBalance(coupon3);
        }
        else {
            alert("Wrong coupon");
        }

        // transaction
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="bg-base-100 p-5 rounded-lg">
            <p class="text-blue-500">'${coupon}' coupon added successfully done.</p>
            </div>
            `;
            history.appendChild(newHistory);
    });