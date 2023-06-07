jQuery(document).ready(function () {
		alert('applepay');
		var iosDevicce = iOS();
		var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        
		if(iosDevicce && isSafari) {
			alert("show");
			location.reload();
		} else {
			alert("hide");
			location.reload();
		}
           
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

