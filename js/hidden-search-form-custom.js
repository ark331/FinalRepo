(function(jQuery) {
	jQuery(document).ready(function(){
			jQuery('.hidden-search-form-toggler').click(function(e){
			e.preventDefault();
			jQuery('.hidden-search-form').fadeIn();			
		});
		jQuery('.hidden-search-form .form-close').click(function(e){
			e.preventDefault();
			jQuery('.hidden-search-form').fadeOut();
		});	
			});
})(jQuery);