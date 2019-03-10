
jQuery(document).ready(function() {
  jQuery("#slider").owlCarousel({
autoPlay: 5000,
      navigation : false, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 900,
      singleItem:true
  });
  jQuery('.grid').masonry({
      // options
      itemSelector: '.grid-item'
    });
});


jQuery('#cert_form').on("submit",function(e){
        jQuery('#uname').val(jQuery('#person_name span').text());
        jQuery('#usurname').val(jQuery('#person_surname span').text());

})
jQuery(document).ready(function(){
    jQuery('body').find('img').removeAttr('height');
    jQuery('#main-slider').find('img').removeAttr('width');
    jQuery('.first-face').find('img').removeAttr('width');
    jQuery('.news-cat').find('img').removeAttr('width');
    jQuery("a#to-top").click(function () {
destination = jQuery("header").scrollTop();
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
});
});



/* <![CDATA[ */
var _wpcf7 = {"loaderUrl":"http:\/\/mik163.ru\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif","recaptcha":{"messages":{"empty":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0412\u044b - \u043d\u0435 \u0440\u043e\u0431\u043e\u0442."}},"sending":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...","cached":"1"};
/* ]]> */




/* <![CDATA[ */
var pollsL10n = {"ajax_url":"http:\/\/mik163.ru\/wp-admin\/admin-ajax.php","text_wait":"\u0412\u0430\u0448 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0435\u0449\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 ...","text_valid":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442.","text_multiple":"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432:","show_loading":"1","show_fading":"1"};
/* ]]> */





/* <![CDATA[ */
var pum_vars = {"ajaxurl":"http:\/\/mik163.ru\/wp-admin\/admin-ajax.php","default_theme":"192"};
var ajaxurl = "http:\/\/mik163.ru\/wp-admin\/admin-ajax.php";
var popmake_default_theme = "192";
/* ]]> */
