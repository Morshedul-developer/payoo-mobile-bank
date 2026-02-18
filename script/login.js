document.getElementById('login-btn')
    .addEventListener('click',function(){
        const number = document.getElementById('number-input').value;
        const pin = document.getElementById('pin-input').value;
        if(number=='01792988812' && pin=='1234') {
            alert('Login successful...!');
            window.location.assign("/home.html");
        }
        else {
            alert('Login failed...!');
        }
    });