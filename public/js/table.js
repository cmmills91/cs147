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
		htmlToAdd += '<li class="machine"><div class="machinestatus">' + result[i].name + " : " + result[i].occupied + '</div></li>';
	}
	machineList.html(htmlToAdd);
}