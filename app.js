
$('#button').click(function(){

	var first = $("#first_name").val();
	var last = $("#last_name").val();
	var city = $("#city").val();
	
	$('#username').html (first +" "+" "+last + " " + city);

})
