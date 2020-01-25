function check_vowel(){

    var cnt = 0;
    var str = document.getElementById('str').value;    
    if(str!=''){
        str = str.split('');

        for(var index = 0; index < str.length; index++){
            switch(str[index]){
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u': cnt++;
            }
        }
    }
    else
        cnt = 'Press to get Vowel Count';


    document.getElementById('count').innerHTML = cnt;
}