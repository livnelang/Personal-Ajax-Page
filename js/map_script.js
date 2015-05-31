$(document).ready(function(){

	/**
	* The Function loads MapBox Details
	* On data-content DIV
	*/
	function loadMap() {
		console.log('MapBox Clicked');
		var newMap = '<div id="my_map"></div>';
		// Empty data-content div
		$('.data-content').empty();
		// Append data-content div with new table
		$('.data-content').append(newMap);
				L.mapbox.accessToken = 'pk.eyJ1IjoibGl2bmVsYW5nIiwiYSI6IjM1NmM5NTgyZjMyZWE0YjA2MmEzYjMyZWQ5ZTA1ZmNjIn0.VknY9ttje73yuueZsNoR4g';
				var map = L.mapbox.map('my_map', 'livnelang.maji3a55')
							.setView([ 45.602, -122.645], 11 );
	}
	
	//Once MapBox id href is clicked
	$('#mapbox').click(loadMap);
}); 