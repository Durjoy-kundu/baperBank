document.getElementById('btn-submit').addEventListener('click',function(){
    // get the email address inside the email input
    // always remember to use .value to get text from an input field
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    console.log(email);

    // get password

    const passField = document.getElementById('user-password');
    const pass = passField.value;
    console.log(pass);

    // varify email and password 
    //"do not varify in this way"
    if(email === 'sontan@baap.com' && pass === 'secret'){
        //to jump another page
       window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gechos!!!');
    }



})