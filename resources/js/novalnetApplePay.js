jQuery(document).ready(function () {
	
	var mopId = jQuery('#nn_apple_pay_mop').val();
	 jQuery('li[data-id="'+mopId+'"]').click(function() {
		alert('Not Supported');
	});
	
	 jQuery('.method-list-item').on('click',function() {
                var clickedId = jQuery(this).attr('data-id');
                if(clickedId == mopId) {
		     var iosDevicce = iOS();
                     var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			 if(iosDevicce && isSafari) {
			    jQuery('li[data-id="'+mopId+'"]').show();
			 } else {
			  alert('Not allowed');
			  location.reload();
			 }	 
               } 
	});	 
		 
           
function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
});

