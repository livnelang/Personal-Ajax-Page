$(document).ready(function(){
	/**
	* Auto Fill Wrapper Div
	*/
	function appendText() {
		
		var newp = document.createElement("p");
		newp.innerHTML = "Hello World";
		$("#wrapper").append("<h2>Test Appending</h2>");
		$('#wrapper').append(newp);
		}
		//appendText();
		
		
		$(function () {
    // Get the CSV and create the chart
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {

        $('#container').highcharts({

            data: {
                csv: csv
            },

            title: {
                text: 'Daily visits at www.highcharts.com'
            },

            subtitle: {
                text: 'Source: Google Analytics'
            },

            xAxis: {
                tickInterval: 7 * 24 * 3600 * 1000, // one week
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left',
                    x: 3,
                    y: -3
                }
            },

            yAxis: [{ // left y axis
                title: {
                    text: null
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }, { // right y axis
                linkedTo: 0,
                gridLineWidth: 0,
                opposite: true,
                title: {
                    text: null
                },
                labels: {
                    align: 'right',
                    x: -3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }],

            legend: {
                align: 'left',
                verticalAlign: 'top',
                y: 20,
                floating: true,
                borderWidth: 0
            },

            tooltip: {
                shared: true,
                crosshairs: true
            },

            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function (e) {
                                hs.htmlExpand(null, {
                                    pageOrigin: {
                                        x: e.pageX || e.clientX,
                                        y: e.pageY || e.clientY
                                    },
                                    headingText: this.series.name,
                                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                        this.y + ' visits',
                                    width: 200
                                });
                            }
                        }
                    },
                    marker: {
                        lineWidth: 1
                    }
                }
            },

            series: [{
                name: 'All visits',
                lineWidth: 4,
                marker: {
                    radius: 4
                }
            }, {
                name: 'New visitors'
				}]
			});
		});
		
	});
	
	/**
	* Function retrieves updated weather casts using Ajax
	*/
	function getWeatherCasts() {
			$.ajax({
				type: "GET",
				url: "currency.xml",
				dataType: 'xml',
				success: function(xml) {
					var table = '<table class="table table-hover t_coins"><thead><tr><th>Name</th>'+
								'<th>Currency Code</th><th>Country</th><th>Rate</th></tr></thead>'+
								'<tbody></tbody></table>';
						// Empty data-content div
						$('.data-content').empty();
						// Append data-content div with new table
						$('.data-content').append(table);
						$('.t_coins').addClass("table-hover");
						$(xml).find('CURRENCY').each(function(){
							$('.t_coins > tbody').append("<tr>");
							$('.t_coins > tbody').append("<td>" + $(this).find("NAME").text() + "</td>");
							$('.t_coins > tbody').append("<td>" + $(this).find("CURRENCYCODE").text() + "</td>");
							$('.t_coins > tbody').append("<td>" + $(this).find("COUNTRY").text() + "</td>");
							$('.t_coins > tbody').append("<td>" + $(this).find("RATE").text() + "</td></tr>");
						})
			},
			error: function(xhr,err){
				console.log("readyState: "+xhr.readyState+"\nstatus: "+xhr.status);
				console.log("responseText: "+xhr.responseText);
			}
		});
	}
	//Once Weather id href is clicked
	$('#weather').click(getWeatherCasts);
	
}); 