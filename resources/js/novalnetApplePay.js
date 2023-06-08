jQuery(document).ready(function () {
	
	var mopId = jQuery('#nn_google_pay_mop').val();
	 jQuery('li[data-id="'+mopId+'"]').click(function() {
		alert('Not Supported');
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

