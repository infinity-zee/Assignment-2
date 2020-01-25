function checkPerfect(val){
    var sum = 0;

    for(var div = 1; div < val; div++){
        if((val % div) == 0)
            sum += div;
    }

    if(sum == val)
        return true;
    else
        return false;
}


function start(){
    var num = document.getElementById('num').value;

    var message;

    if(checkPerfect(num))
    {
        message = num + ' is Perfect';
    }
    else{
        if(num > 8127){
            message = num + ' is not Perfect';
        }
        else{
            for(var pre = num-1, post = num+1; 1; post++, pre--){
                if(checkPerfect(pre)){
                    message = num + ' is not Perfect, but ' + pre + ' is';
                    break;
                }
                if(checkPerfect(post)){
                    message = num + ' is not Perfect, but ' + post + ' is';
                    break;
                }
            }
        }
    }
    document.getElementById('message').innerHTML = message;
}
