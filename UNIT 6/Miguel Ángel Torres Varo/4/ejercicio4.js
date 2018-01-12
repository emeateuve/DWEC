google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Año', 'Poblacion',{role: 'style'}],
        ['2011', 1452,'color: green;opacity:0.2'],
        ['2012', 2360,'color: yellow;opacity:0.4'],
        ['2013', 4021,'color: red;opacity:0.619'], /*Rey Misterio 4ever <3*/
        ['2014', 1300,'color: pink;opacity:0.8']
    ]);

    var options = {'title':'Evolución de la población zurda en Badajoz',
        'width':600,
        'height':300,
        'backgroundColor':'#d3d3d3',
        animation: {
            "startup": true,
            duration: 6000,
            easing: 'out'
        }};

    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
}