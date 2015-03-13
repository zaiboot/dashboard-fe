//dashboard.js

function createChart() {
    var config = {

        Categories: ["Not Started", "Pending", "Pending Modification", "Waiting on Review", "Review Pending Recertification",
                        "Waiting on Approval", "Approval Pending Recertification", "Complete"],
        Series: [
            {
                name: "Due Prior",
                data: [100, 150, 200, 250, 300, 350, 400, 450]
            },
            {
                name: "Today",
                data: [90, 190, 45, 521, 300, 350, 444, 500]
            },
            {
                name: "This week",
                data: [190, 140, 451, 51, 301, 135, 144, 54]
            },
            {
                name: "After This week",
                data: [190, 140, 451, 51, 301, 135, 144, 54]
            }
        ]
    };


    $("#chart").kendoChart({
        title: {
            text: "Reconciliation Statistics"
        },
        chartArea: {
            background: "transparent"

        },
        legend: {
            labels: {
                color: "#5d5d5d"
            },
            position: "bottom",
            orientation: "horizontal",
            visible: true
        },
        seriesDefaults: {
            type: "bar",
            stack: true
        },
        seriesClick: function(e) {
            console.log("Category = ", e.category, " Series.name", e.series.name);

        },
        seriesColors: ["#96172e", "#2e64a7", "#c0d0e4", "#e1e8f2"],
        //series: config.Series,
        dataSource: {
            transport: {
                read: {
                    url: "../data/statistics",
                    dataType: "json"
                }
            },
            sort: {
                field: "name",
                dir: "asc"
            }
        },
        valueAxis: {
            max: 700,
            color: "#5d5d5d",
            line: {
                visible: false
            },
            minorGridLines: {
                visible: false
            }
        },
        categoryAxis: {
            categories: config.Categories,
            color: "#5d5d5d",
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: false,
            format: "{0}"
        }
    });
}

$(document).ready(function () {
    createChart();
    $(document).bind("kendo:skinChange", createChart);
    $(".options").bind("change", refresh);
});

function refresh() {
    var chart = $("#chart").data("kendoChart"),
        series = chart.options.series,
        type = $("input[name=seriesType]:checked").val(),
        stack = $("#stack").prop("checked");

    for (var i = 0, length = series.length; i < length; i++) {
        series[i].stack = stack;
        series[i].type = type;
    };

    chart.refresh();
}
