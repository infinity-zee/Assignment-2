function validate(){
    var name = (document.getElementById('name').value).split('');
    var num = (document.getElementById('pnumber').value).split('');

    for(var index = 0; index < name.length; index++){
        if(parseInt(name[index]) || parseInt(name[index]) == '0')
            alert('Please Enter a valid Name')
    }

    if(num.length != 10)
        alert('Please Enter a value Number');

}