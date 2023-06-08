jQuery(document).ready(function () {
	
	var mopId = jQuery('#nn_apple_pay_mop').val();
	 jQuery('li[data-id="'+mopId+'"]').click(function() {
		alert('Not Supported');
	});
	
	 jQuery('.method-list-item').on('click',function() {
                var clickedId = jQuery(this).attr('data-id');
                if(clickedId !== undefined && clickedId != mopId) {
                  alert('NO');
               } else {
		  alert('yes');
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

