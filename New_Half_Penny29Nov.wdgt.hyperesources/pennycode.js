
function isIPad(){

IS_IPAD = navigator.userAgent.match(/iPad/i) != null;


return (IS_IPAD);


}

function isIOS6(){



if (isIPad() && iOSversion()[0]<=6)
	return true;
else
	return false;

}


function iOSversion() {



   
    
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
//  }

}
}