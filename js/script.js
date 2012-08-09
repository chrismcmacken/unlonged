$(function () {
	// NOTE:  Months in JS are 0-indexed.  January = 0.
	var lastAccident = new Date(2012, 7, 3, 16); // Year month day hour
	var now = new Date();
	var diff = now - lastAccident;
	var days = Math.floor(diff / 86400000);
	$('#counter').text(days);
	$('#counterNext').text(days + 1);
});
