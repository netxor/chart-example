/*
// Change Chart type function
function ChangeChartType(chart, series, newType) {
    newType = newType.toLowerCase();
    for (var i = 0; i < series.length; i++) {
        var srs = series[0];
        try {
            srs.chart.addSeries({
                type: newType,
                stack: srs.stack,
                yaxis: srs.yaxis,
                name: srs.name,
                color: srs.color,
                data: srs.options.data
            },
            false);
            series[0].remove();
        } catch (e) {
        }
    }
}
*/

// Two charts definition
var chart1, chart2;

// Once DOM (document) is finished loading
$(document).ready(function() {

    // First chart initialization
    var options = {

    }
    chart1 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_1',
        type: 'column',
        height: 350,
     },
     title: {
        text: 'Изменения комплексного индекса загрязненности воды на реках Республики Казахстан'
     },
     xAxis: {
        categories: ['р. Буктырма (ВКО)', 'р. Красноярка (ВКО)', 'р. Емель (ВКО)', 'р. Жайык (Атырауская)', 'р. Елек (ЗКО)', 'р. Каргалы (Актюбинская)', 'р. Ыргыз (Актюбинская)', 'р. Тобыл (Костанайская)', 'р. Беттыбулак (Акмолинская)', 'р. Нура (Карагандинская)']
     },
     yAxis: {
        title: {
           text: 'Процент Загрязнения Реки'
        }
     },
     plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
     },
     tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
     },
     series: [{
       colorByPoint: true,
       /*
        name: 'Dev #1',
        data: [5, 10, 20, 22, 25, 28, 30, 40, 80, 90]
     }, {
        name: 'Dev #2',
        data: [15, 15, 18, 40, 30, 25, 60, 60, 80, 70]
     }, {
        name: 'Dev #3',
        data: [1, 3, 6, 0, 50, 25, 50, 60, 30, 100]
     }]
     */
        data: [{
            //"id" : 4,
            y : 1.76,
            name : "р. Буктырма (ВКО)"
          }, {
            //"id" : 9,
            y : 12.46,
            name : "р. Красноярка (ВКО)"
          }, {
            //"id" : 11,
            y : 1.64,
            name : "р. Емель (ВКО)"
          }, {
            //"id" : 16,
            y : 0,
            name : "р. Жайык (Атырауская)"
          }, {
            //"id" : 23,
            y : 2.3,
            name : "р. Елек (ЗКО)"
          }, {
            //"id" : 28,
            y : 1.29,
            name : "р. Каргалы (Актюбинская)"
          }, {
            //"id" : 30,
            y : 1.39,
            name : "р. Ыргыз (Актюбинская)"
          }, {
            //"id" : 35,
            y : 5.07,
            name : "р. Тобыл (Костанайская)"
          }, {
            //"id" : 42,
            y : 2.48,
            name : "р. Беттыбулак (Акмолинская)"
          }, {
            //"id" : 47,
            y : 5.28,
            name : "р. Нура (Карагандинская)"
          }]
        }]
    });
// --------------------------------------------------------------------------------
    // Switchers (of the Chart1 type) - onclick handler
    /*
    $('.switcher').click(function () {
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
    */
});
