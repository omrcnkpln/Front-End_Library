



$(function(){

var tab = $(".tab a");
var content = $(".tab_content");

// burası çalışmadı
tab.filter(":first").addClass('aktif');

content.filter(":not(:first)").hide();

tab.click(function(){

	var index = $(this).index();
	// alert( index );

	tab.removeClass('aktif').eq(index).addClass('aktif');
	// tab.removeClass('aktif');
	// $(this).addClass('aktif');
	content.hide().eq(index).fadeIn(500);

	// # gelmesin diye
	return false;
});


});