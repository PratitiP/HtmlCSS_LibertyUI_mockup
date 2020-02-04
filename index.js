//load area chart
document.addEventListener('DOMContentLoaded',function(){
    Highcharts.chart('area-graph-container', {
        chart: {
            type: 'areaspline',
            renderTo:"container"
        },
        title: {
            text: null
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 75,
            y: 50,
            floating: true
        },
        yAxis: {
            title: {
                text: null
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
    });
})

//load line chart
document.addEventListener('DOMContentLoaded',function(){
Highcharts.chart('line-chart-container', {

    title: {
        text: null
    },
    yAxis: {
        title: {
            text: null
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Manufacturing',
        data: [25, 50, 75, 30, 35, 60, 70]
    }, {
        name: 'Sales & Distribution',
        data: [0, 75, 30, 40, 70, 75]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});
})

//load bar chart
document.addEventListener('DOMContentLoaded',function(){
Highcharts.chart('bar-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'The Current Chart'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 300 to 600'
        }
    },
    legend: {
        enabled: false
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

    series: [
        {
            name: "Browsers",
            colorByPoint: false,
            data: [
                {
                    name: "Mon",
                    y: 330,
                },
                {
                    name: "Tue",
                    y: 380,
                },
                {
                    name: "Wed",
                    y: 230,
                },
                {
                    name: "Thu",
                    y: 400,
                },
                {
                    name: "Fri",
                    y: 309,
                },
                {
                    name: "Sat",
                    y: 530,
                },
                {
                    name: "Sun",
                    y: 340,
                }
            ]
        }
    ]
});
})