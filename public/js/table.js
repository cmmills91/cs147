'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('#gymselect').change(function() {
		var selectedGym = $('#gymselect').val();
		var url = "/gym/" + selectedGym;
		$.get(url, callbackFn);
	});
	$.get("/gym/tresfit", callbackFn);
}

function callbackFn(result) {
	var machineList = $('#list');
	var htmlToAdd = "";
	for (var i = 0; i < result.length; i++) {
		if (result[i].occupied == "Available") {
			htmlToAdd += '<li><div class="available">' + result[i].name + '</div></li>';
		} else {
			htmlToAdd += '<li><div class="occupied">' + result[i].name + '</div></li>';
		}
	}
	machineList.html(htmlToAdd);
}