function reverse(){
    var num = document.getElementById('value').value;
    var sum = 0;
    
    num = num.split('');
    
    for(var indexI = 0; indexI < num.length; indexI++){
        sum += Number(num[indexI]);
    }
    
    if (sum == 0)
        sum = 'Sum of Digits';

    document.getElementById('answer').innerHTML = sum;
}