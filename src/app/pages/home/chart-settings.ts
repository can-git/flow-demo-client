
let chart1: ChartType = {
    series: [
        {
            name: 'series1',
            data: [2.3, 3.1, 4.0, 5.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 2],
        },
    ],
    chart: {
        height: 250,
        type: 'line',
        toolbar: {
            autoSelected: 'pan',
            show: false,
        },
        zoom:{
            enabled: false
        }
    },
    colors: ['#5156be', '#34c38f'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'straight',
    },
    xaxis: {
        type:'time',
        categories: [],
        time:{
            unit:'day',
            displayFormats:{
                day: 'MMM D',
            }
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm',
        },
    },
};
export {chart1};
