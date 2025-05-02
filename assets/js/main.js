// Initialize any ApexCharts if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example chart initialization (can be customized based on needs)
    if (document.getElementById('productivityChart')) {
        var options = {
            series: [{
                name: 'Average Engineer',
                data: [30, 40, 35, 50, 49, 60]
            }, {
                name: 'Elite Engineer',
                data: [300, 400, 350, 500, 490, 600]
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Code Quality', 'Problem Solving', 'System Design', 'Innovation', 'Leadership', 'Overall'],
            },
            yaxis: {
                title: {
                    text: 'Performance Score'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " points"
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#productivityChart"), options);
        chart.render();
    }
}); 