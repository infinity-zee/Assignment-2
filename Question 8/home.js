function word_count(){

    var cnt = 0;
    var str = document.getElementById('str').value;    
    if(str!=''){
        str = str.split('');
        cnt = str.length;
    }
    else
        cnt = 'Press to get Word Count';


    document.getElementById('count').innerHTML = cnt;
}