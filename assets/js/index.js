var options, chart;
$("#line_chart_datalabel").length && (options = {
    chart: {
        height: 380,
        type: "line",
        zoom: {
            enabled: !1
        },
        toolbar: {
            show: !1
        }
    },
    colors: ["#0db4d6", "#f1b44c"],
    dataLabels: {
        enabled: !0
    },
    stroke: {
        width: [3, 3],
        curve: "straight"
    },
    series: [{
        name: "High - 2018",
        data: [26, 24, 32, 36, 33, 31, 33]
    }, {
        name: "Low - 2018",
        data: [14, 11, 16, 12, 17, 13, 12]
    }],
    title: {
        text: "Average High & Low Temperature",
        align: "left"
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: .2
        },
        borderColor: "#f1f1f1"
    },
    markers: {
        style: "inverted",
        size: 6
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
            text: "Month"
        }
    },
    yaxis: {
        title: {
            text: "Temperature"
        },
        min: 5,
        max: 40
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        floating: !0,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: !1
                }
            },
            legend: {
                show: !1
            }
        }
    }]
}, (chart = new ApexCharts(document.querySelector("#spline_area"), options)).render()), $("#column_chart").length && (options = {
    chart: {
        height: 300,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "45%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    series: [{
        name: "Anı hızlanma",
        data: [42, 57, 59, 59, 61, 59, 62, 60, 65]
    }, {
        name: "Anı yavaşlanma",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
    }, {
        name: "Anı dönüş",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
    }, {
        name: "test",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
    }, {
        name: "Cagin Cash Flow",
        data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
    }],
    colors: ["#008FFC", "#08DF90", "#FEB017", "#FF455E", "#7C5BD8"],
    xaxis: {
        categories: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    },
    yaxis: {
        title: {
            text: "$ (Kilomettre)"
        }
    },
    grid: {
        show: !0,
        borderColor: "#000000",
    },
    fill: {
        opacity: 10
    },
    tooltip: {
        y: {
            formatter: function (e) {
                return "$ " + e + " thousands"
            }
        }
    }
}, (chart = new ApexCharts(document.querySelector("#column_chart"), options)).render()), $("#column_chart_datalabel").length && (options = {

});