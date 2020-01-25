function reverse(){
    var num = document.getElementById('value').value;
    
    num = num.split('');
    
    for(var indexI = 0, indexJ = num.length, temp; indexI < indexJ; indexI++, indexJ--){
        temp = num[indexI];
        num[indexI] = num[indexJ];
        num[indexJ] = temp;
    }

    num = num.join('');
    
    if (num == '')
        num = 'Reversed Number';

    document.getElementById('answer').innerHTML = num;
}