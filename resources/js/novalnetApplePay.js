jQuery(document).ready(function () {
	
	var mopId = jQuery('#nn_apple_pay_mop').val();
	alert(mopId);
	jQuery('li[data-id="'+mopId+'"]').hide();
	 jQuery('li[data-id="'+mopId+'"]').click(function() {
		 <button name="button" type="button">Click Here</button>  
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

