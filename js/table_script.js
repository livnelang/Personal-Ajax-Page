$(document).ready(function(){

	/**
	* This Function loads our DataTable 
	*/
	function loadDataTable() {
		var newTable = '<table id="example" class="display" cellspacing="0" width="100%">'+
			'<thead>'+
				'<tr><th>Name</th><th>Position</th><th>Office</th><th>Extn.</th><th>Start date</th><th>Salary</th></tr>'+
			+'</thead></table>';
			
			// Empty data-content div
			$('.data-content').empty();
			// Append data-content div with new table
			$('.data-content').append(newTable);
			
			
			$('#example').dataTable( {
			"ajax": "table_info.txt"
			} ); 
			
			//$('#example').DataTable();
	}
	
	//Once DataTable id href is clicked
	$('#data_table').click(loadDataTable);

}); 