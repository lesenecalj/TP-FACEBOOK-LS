FbApp.ChartView = Backbone.View.extend({

 	 events:{
    'click #chartbyRelationShip':'chartbyRelationShip',
    'click #chartbySexe':'chartbySexe',
    'click #chartbyAge':'chartbyAge',
    'click #chartbyLike':'chartbyLike'
    },

	initialize:function(options){
        _.extend(this,options || {});
		this.model.on('change:chartData',this.render,this);
	},

	render:function(){
            // Build the chart
        $('#chartByRelationShip').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'RelationShip Statut'
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage}%</b>',
              percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Pourcentage ',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    ['Chrome', 12.8],
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        });
	}
  

});