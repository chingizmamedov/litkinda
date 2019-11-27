   let ctx = document.getElementById("chart").getContext('2d');

        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#013d34");
        gradientStroke.addColorStop(1, "#013d34");

        var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
        gradientBkgrd.addColorStop(0, "rgba(22, 69, 16, 0.2)");
        gradientBkgrd.addColorStop(1, "rgba(57, 168, 43, 0)");

        let draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line = Chart.controllers.line.extend({
            draw: function() {
                draw.apply(this, arguments);
                let ctx = this.chart.chart.ctx;
                let _stroke = ctx.stroke;
                ctx.stroke = function() {
                    ctx.save();
                    //                    ctx.shadowColor = 'rgba(244,94,132,0.8)';
                    ctx.shadowBlur = 8;
                    ctx.shadowOffsetX = 10;
                    ctx.shadowOffsetY = 6;
                    ctx.bezierCurve = true;
                    _stroke.apply(this, arguments)
                    ctx.restore();
                }
            }
        });



        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                datasets: [{
                    label: "Какой-то текст",
                    backgroundColor: gradientBkgrd,
                    borderColor: gradientStroke,
                    data: [26000, 20000, 26000, 20000, 23000, 35000, 45000, 40000, 35000, 55000, 60000, 43000, 48000, ],
                    pointBorderColor: "rgba(226, 178, 56)",
                    pointBackgroundColor: "#cf8e17",
                    pointBorderWidth: 14,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: gradientStroke,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 6,
                    pointRadius: 1,
                    borderWidth: 5,
                    pointHitRadius: 16,
                    lineTension: 0,
                }]
            },

            // Configuration options go here
            options: {
                tooltips: {
                    backgroundColor: '#fff',
                    displayColors: false,
                    titleFontColor: '#000',
                    bodyFontColor: '#000'

                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                //                                return (value) + 'K';
                                return (value / 1000) + 'K';
                            }
                        }
                    }],
                }
            }


        });