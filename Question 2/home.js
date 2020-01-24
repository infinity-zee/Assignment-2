function loop(){
    var multiplicant;
    multiplicant = document.getElementById('multiplicant').value;

    var multiplier;
    var table = ' ';


    for(multiplier = 1; multiplier <= 10; multiplier++)
    {
        table = table + '<tr>\n<td>' + multiplicant + ' x ' + multiplier  + '</td>\n<td>' + multiplicant * multiplier + '</td>\n</tr>\n';
    }

    document.getElementById('table').innerHTML = table;
}

function def(){
    var multiplicant = 1;
    var multiplier;
    var table = ' ';


    for(multiplier = 1; multiplier <= 10; multiplier++)
    {
        table = table + '<tr>\n<td>' + multiplicant + ' x ' + multiplier  + '</td>\n<td>' + multiplicant * multiplier + '</td>\n</tr>\n';
    }

    document.getElementById('table').innerHTML = table;
    console.log('works');

}