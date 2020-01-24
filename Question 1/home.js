function validate(){
    var firstPass = document.getElementsByClassName('firstPass')[0].value;
    var secondPass = document.getElementsByClassName('secondPass')[0].value;

    console.log(firstPass);
    console.log(secondPass);
    if ( firstPass == secondPass )
        document.getElementById('message').innerHTML = 'Passwords match';
    else
        document.getElementById('message').innerHTML = 'Passwords don\'t match';
        
}