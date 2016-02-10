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
var data = [ {
  "id" : 4,
  "index" : 1.76,
  "river" : "р.Буктырма (ВКО)"
}, {
  "id" : 9,
  "index" : 12.46,
  "river" : "р.Красноярка (ВКО)"
}, {
  "id" : 11,
  "index" : 1.64,
  "river" : "р. Емель (ВКО)"
}, {
  "id" : 16,
  "index" : 0,
  "river" : "р. Жайык (Атырауская)"
}, {
  "id" : 23,
  "index" : 2.3,
  "river" : "р. Елек (ЗКО)"
}, {
  "id" : 28,
  "index" : 1.29,
  "river" : "р. Каргалы (Актюбинская)"
}, {
  "id" : 30,
  "index" : 1.39,
  "river" : "р. Ыргыз (Актюбинская)"
}, {
  "id" : 35,
  "index" : 5.07,
  "river" : "р.Тобыл (Костанайская)"
}, {
  "id" : 42,
  "index" : 2.48,
  "river" : "р.Беттыбулак (Акмолинская)"
}, {
  "id" : 47,
  "index" : 5.28,
  "river" : "р.Нура (Карагандинская)"
} ];

$(document).ready(function() {

  $.each(data, function (i, point) {
      point.y = point.index;
      point.name = point.river;
  });

      // First chart initialization
  var chart1 = new Highcharts.Chart({

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
          data: data
      }]
  });
  
});


// --------------------------------------------------------------------------------
    // Switchers (of the Chart1 type) - onclick handler
    /*
    $('.switcher').click(function () {
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
    */
