function check(){
    var str1 = document.getElementById('string1').value;
    var str2 = document.getElementById('string2').value;
    var fpos;
    var lpos;

    str1 = str1.split('');
    str2 = str2.split('');


    if(str1.length > str2.length){
        for(var first = 0, last = str2.length; last <= str1.length; first++, last++){
            if(str2.join('') == (str1.slice(first,last)).join('')){
                if(fpos == undefined)
                    fpos = first + 1;
                else
                    lpos = first + 1;    
            }
        }
    }


    if(str1.length < str2.length){
        for(var first = 0, last = str1.length; last <= str2.length; first++, last++){
            if(str1.join('') == (str2.slice(first,last)).join('')){
                if(fpos == undefined)
                    fpos = first + 1;
                else
                    lpos = first + 1;    
            }
        }
    }



    document.getElementById('output').innerHTML = 'First: ' + fpos + 'Last: ' + lpos;
}
