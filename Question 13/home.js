function calculate(){
    var emp = document.getElementsByClassName('details');

    var sal = Number(emp[3].value) + Number(emp[4].value) + Number(emp[5].value);

    document.getElementById('salary').innerHTML = sal;
}