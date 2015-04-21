(function($) {
    
  var allPanels = $('.accordion > li .detail').hide();
    
  $('.accordion > li > a.accord').click(function() {
	  if($(this).hasClass('act')){
		  $(this).next().slideUp();
		  $(this).removeClass('act');
	  }else{
		  $('.accordion > li .detail').slideUp();
		  $('.accordion > li a.act').removeClass('act');
		  $(this).next().slideDown();
		  $(this).addClass('act');
	  }
    return false;
  });

})(jQuery);
$(document).ready(function(){
	$('a[href="#menu"]').click(function(){
		$('#menu').fadeIn(0).animate({'right':0},500);
		return false;
	});
	$('a[href="#filter"]').click(function(){
		$('.overlay').fadeIn(500);
		$('#filter').fadeIn(500);
		return false;
	});
	
});
$(window).load(function(){
	$('.loading').fadeOut(500);
});