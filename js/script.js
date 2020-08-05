$(document).ready(function () {

	function json(file) {
		$.getJSON(file, function(data) {
			return data;
		});
	};

	const char_data = json('js/char.json');

});

function doit() {
	$('#result').html("Test!");
};