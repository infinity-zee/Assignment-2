var arrList = {
    list: '<div class="box"><input type="number" class="array"></div><div class="remove" onclick="remove()"><button>-</button></div><div class="add" onclick="add()"><button>+</button></div>',
    size: 1
};
var box = '<div class="box"><input type="number" class="array"></div>';
var option = '<div class="remove" onclick="remove()"><button>-</button></div><div class="add" onclick="add()"><button>+</button></div>';
function start(){
    document.getElementById('array-container').innerHTML = arrList.list;
}

function add(){
    arrList.list = box + arrList.list;
    arrList.size++;
    document.getElementById('array-container').innerHTML = arrList.list;
}

function remove(){
    arrList.size--;
    arrList.list = '';
    for(var count = 0; count < arrList.size; count++)
        arrList.list = box + arrList.list;

    arrList.list = arrList.list + option;
    document.getElementById('array-container').innerHTML = arrList.list;
    
}

function compute(){
    var arr = document.getElementsByClassName('array');
    var sum = 0;
    var min = arr[0].value, max = arr[0].value;
    var temp;

    for(var index = 0; index < arr.length; index++){
        temp = Number(arr[index].value)
        sum += temp;
        if(temp > max)
            max = temp;
        if(temp < min)
            min = temp;
    }

    document.getElementById('min').innerHTML = 'Minimum: ' + min;
    document.getElementById('max').innerHTML = 'Maximum: ' + max;
    document.getElementById('sum').innerHTML = 'Sum: ' + sum;


}