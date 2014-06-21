$(document).ready(
	function() {
    	function scrollToAnchor(sec_id){
        	var anchor = $("h2[id='"+ sec_id +"']");
        	console.log(anchor);
        	$('html,body').animate({scrollTop: anchor.offset().top},'slow');
    	}
    $("a").click(function() {
        var href = $(this).attr('href').replace('#', '')
        scrollToAnchor(href);
    });            
});