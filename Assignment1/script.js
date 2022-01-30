/*
	WEB 303 Assignment 1 - jQuery
	{Vishva Shah - 0784026}
*/

$(document).ready(function() {

	/* Ans 3 */
	$("input").on("keyup", function() {
		var getSalary = $('#yearly-salary').val();
		var getPercent = $('#percent').val();
		
		/* Ans 4 */
		var resultVal =  `$` + (getSalary * getPercent / 100).toFixed(2);
		$('#amount').text(resultVal);
	});
});

