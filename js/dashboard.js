//dashboard.js
(function($) {
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
	$("#chart").kendoChart({
                title: {
                    text: "Dashboard for"
                },
                legend: {
                    visible: true
                },
                seriesDefaults: {
                    type: "bar",
                  	stack: true,
					
                },
                series: config.Series,
                valueAxis: {
                    max: 700,
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
            });
          $(document).ready(function() {
          	$("#panelbar").kendoPanelBar({
            	expandMode: "single"
            });
            
          });
})($)