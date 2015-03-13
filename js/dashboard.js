//dashboard.js
(function($) {
	
	var spinner = {
		show: function(selector) {
			window.kendo.ui.progress($(selector), true);
			
		},
		hide: function(selector){
			window.kendo.ui.progress($(selector), false);			
		}
		
	};
	var config = {
		
		Categories: [ "Not Started", "Pending", "Pending Modification", "Waiting on Review", 
			"Review Pending Recertification", "Waiting on Approval", "Approval Pending Recertification",
			"Complete"	
		],
		Series: [			
			{
				name: "Due Prior",
				data: [ 
					100, 
					150, 
					200, 
					250, 
					300, 
					350, 
					400, 
					450
				]
			},
			{
				name: "Today",
				data: [ 
					90, 
					190, 
					45, 
					521, 
					300, 
					350, 
					444, 
					500
				]
			},
			{
				name: "This week",
				data: [ 
					190, 
					140, 
					451, 
					51, 
					301, 
					135, 
					144, 
					54
				]
			},
			{
				name: "After This week",
				data: [ 
					190, 
					140, 
					451, 
					51, 
					301, 
					135, 
					144, 
					54
				]
			}
		]
	};
	
	var chartConfig =  {
                title: {
                    text: "Chart for"
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
                  	stack: true,
					
                },
				render: function(e) {
					
					/*setTimeout(function() {
						spinner.hide("#chart");
					}, 1000);*/
					
				},
				seriesClick: function(e) {					
					console.log("Category = ", e.category, " Series.name", e.series.name);
					
				},
				seriesColors: [ "#96172e", "#2e64a7", "#c0d0e4", "#e1e8f2"],
                series: config.Series,
                valueAxis: {
                    max: 700,
					color: "#5d5d5d",
                    line: {
                        visible: false
                    },
                    minorGridLines: {
                        visible: true
                    }
                },
                categoryAxis: {
                    categories: config.Categories,
					color: "#5d5d5d"
                },
                tooltip: {
                    visible: true,
                    template: "#= series.name #: #= value #"
                }
            };
	
          $(document).ready(function() {
			spinner.show("#chart");
			spinner.show("#newsInfo .loading");
			
			$.get("data/alerts.json")
				.done(function(data) {
					console.log(data);
					
				});
			$("#chart").kendoChart(chartConfig);	
			
            
          });
})($)