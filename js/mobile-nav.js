(function ($) {

        // Variables
        var navContainer = jQuery('.bahon-nav-container');
        var navbarToggler = jQuery('.bahon-navbar-toggler');
        var closeIcon = jQuery('.bahoncloseIcon');
        var navToggler = jQuery('.navbarToggler');
        var bahonMenu = jQuery('.bahon-menu');
        var var_window = jQuery(window);
        var bahon_nav = jQuery('.bahonnav ul');
        var bahon_navli = jQuery('.bahonnav > ul > li');
            // navbar toggler
            navbarToggler.on('click', function () {
                navToggler.toggleClass('active');
                bahonMenu.toggleClass('menu-on');
            });

            // close icon
            closeIcon.on('click', function () {
                bahonMenu.removeClass('menu-on');
                navToggler.removeClass('active');
            });
            var_window.on('scroll', function () {    
            if (var_window.scrollTop() > 0) {
                navContainer.addClass('bahon-sticky');
            } else {
                navContainer.removeClass('bahon-sticky');
            }
            });

            // add dropdown & megamenu class in parent li class
            bahon_navli.has('.dropdown').addClass('cn-dropdown-item');

            // adds toggle button to li items that have children
            bahon_nav.find('li a').each(function () {
                if (jQuery(this).next().length > 0) {
                    jQuery(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                }
            });

            // expands the dropdown menu on each click
            bahon_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                jQuery(this).parent('li').children('ul').stop(true, true).slideToggle(350);
                jQuery(this).parent('li').toggleClass('active');
            });            
}(jQuery));