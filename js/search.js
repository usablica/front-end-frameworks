$(document).ready(function(){
	$("input#search").keyup(function(){
		var query = $(this).val();
		if (!query) {
			$("#comparisonTable div.parent").show();
			$("#noSearch").hide();
			return;
		}
		var regex = new RegExp(query, "ig"), count = 0;
		$("#comparisonTable div.parent:not(#noSearch)").each(function(){
			if ($(this).text().search(regex) < 0) {
				$(this).hide();
			} else {
				$(this).show();
				count += 1
			}
		});
		if (count == 0) {
			$("#noSearch span").text(query)
			$("#noSearch").show();
		} else {
			$("#noSearch").hide();
		}
	});
});