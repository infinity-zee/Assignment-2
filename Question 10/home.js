function calculateAge(){
    var cdate = new Date();
    var bdate = document.getElementById('bdate').value;

    cdate = [cdate.getFullYear()];
    bdate = bdate.split('-');

    console.log(cdate);
    console.log(bdate);

    var age = '';

    age = cdate[0] - bdate[0];
    
    document.getElementById('message').innerHTML = age;

}