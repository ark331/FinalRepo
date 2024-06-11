/*
* Bahon Elementor Kits
* Custom JS
* Version: 1.0
*/
jQuery(function(){

  // Trigger Video Popup Function
  jQuery('.bahon-elementor-video-popup-widget a').simpleLightboxVideo();

  // Call MailChimp Newsletter WP Ajax Function
    jQuery('.subscribe-btn').on('click', function(e){
      e.preventDefault();

      let email = jQuery('#mailchimp_email').val();
      let api = jQuery('#mailchimp_api').val();
      let list_id = jQuery('#mailchimp_listid').val();
      let double_optin = jQuery('#mailchimp_double_optin').val();

      jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: {
          'action' : 'bahon_subscribe_callback',
          'email' : email,
          'api' : api,
          'listid' : list_id,
          'double_optin' : double_optin
        },
        beforeSend: function(){
        jQuery('.subscribe-btn i').addClass('fa-circle-notch fa-spin');
        },
        complete: function(){
          jQuery('.bahon-newsletter-form')[0].reset();
          jQuery('.subscribe-btn i').removeClass('fa-circle-notch fa-spin');
        },   
        success: function(data){
          jQuery('.mailchimp_result').addClass('visible');
          jQuery('.mailchimp_result').text(data);
        },
        error: function(data){
          console.log(data);
        }
      });
    });
  // End Ajax Function

  // Call Contact Form WP Ajax Function
    jQuery('#vek_cf_btn').on('click', function(e){
      e.preventDefault();

      let name = jQuery('#vek_cf_name').val();
      let email = jQuery('#vek_cf_email').val();
      let message = jQuery('#vek_cf_message').val();
      let recipient = jQuery('#vek_cf_recipient').val();
      let subject = jQuery('#vek_cf_subject').val();

      jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'html',
        data: {
          'action' : 'bahon_contact_form_callback',
          'name' : name,
          'email' : email,
          'message' : message,
          'recipient' : recipient,
          'subject' : subject
        },
        beforeSend: function(){
          jQuery('#vek_cf_btn i').addClass('fa-circle-notch fa-spin');
        },
        complete: function(){
          jQuery('#bahon_contactform')[0].reset();
          jQuery('#vek_cf_btn i').removeClass('fa-circle-notch fa-spin');
        },   
        success: function(data){
          //jQuery('.vek_cf_result').addClass('alert alert-info');
          jQuery('.vek_cf_result').html(data);
        },
        error: function(data){
          console.log(data);
        }
      });
    });
  // End Ajax Function
});