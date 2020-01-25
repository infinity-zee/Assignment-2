function greet(){
    var time = new Date();
    var message = '';

    if (time.getHours() >= 0 && time.getHours() < 6){
        message = 'Good Night';
        document.getElementById('message').style.color = 'black';
    }
    else if (time.getHours() >= 6 && time.getHours() < 12){
        message = 'Good Morning';
        document.getElementById('message').style.color = 'white';
    }
    else if (time.getHours() >= 12 && time.getHours() < 18){
        message = 'Good Afternoon';
        document.getElementById('message').style.color = 'orange';
    }
    else{
        message = 'Good Evening';
        document.getElementById('message').style.color = 'blue';
    }

    document.getElementById('message').innerHTML = message;
}