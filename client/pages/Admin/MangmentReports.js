
	var serie1 = [['share 1',25],['share 2',75]];
	var serie2 = [['share 1',10],['share 2',30],['share 3',60]];

	var serieToDisplay= 1;

	function buildData(){
	    return serieToDisplay === 1?serie1:serie2;
	}

	Template.MangmentReports.helpers({
	    chartMultiSeries: function () {
	        return {
	            series: [{
	                type: 'pie',
	                data: buildData()
	            }]
	        };
	    }
	})

	Template.MangmentReports.events({
	    "click .displaySerie1": function () {
	        serieToDisplay=1;
	        var series =$('#chart').highcharts().series[0];
	        series.setData(buildData());
	    },
	    "click .displaySerie2": function () {
	        serieToDisplay=2;
	        var series = $('#chart').highcharts().series[0];
	        series.setData(buildData());
	    },
	    "click .displaySerie3": function () {
	        serieToDisplay=3;
	        var series = $('#chart').highcharts().series[0];
	        series.setData(buildData());
	    },
	    "click .displaySerie4": function () {
	        serieToDisplay=4;
	        var series = $('#chart').highcharts().series[0];
	        series.setData(buildData());
	    }
	})


	function builtColumn() {

		 $('#container-column').highcharts({

				 chart: {
						 type: 'column'
				 },

				 title: {
						 text: 'Monthly Average DownTime'
				 },



				 credits: {
						 enabled: false
				 },

				 xAxis: {
						 categories: [
								 'Jan',
								 'Feb',
								 'Mar',
								 'Apr',
								 'May',
								 'Jun',
								 'Jul',
								 'Aug',
								 'Sep',
								 'Oct',
								 'Nov',
								 'Dec'
						 ]
				 },

				 yAxis: {
						 min: 0,
						 title: {
								 text: 'DownTime (min)'
						 }
				 },

				 tooltip: {
						 headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						 pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								 '<td style="padding:0"><b>{point.y:.1f} min</b></td></tr>',
						 footerFormat: '</table>',
						 shared: true,
						 useHTML: true
				 },

				 plotOptions: {
						 column: {
								 pointPadding: 0.2,
								 borderWidth: 0
						 }
				 },

				 series: [{
						 name: 'Cairo East',
						 data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

				 }, {
						 name: 'Cairo West',
						 data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

				 }]
		 });
	}

	/*
	* Call the function to built the chart when the template is rendered
	*/
	Template.MangmentReports.rendered = function() {
		 builtColumn();
	}

	var seriesData = [];
	  var reportData = SiteAlarmAdd.find({});

	  reportData.forEach(function(countryData) {
	    var dataPoint = [countryData.type, countryData.name];
	    seriesData.push(dataPoint);
	    console.log(countryData.name);
	  });
