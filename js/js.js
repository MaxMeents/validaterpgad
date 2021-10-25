$(document).ready(function(){
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

abc = ["$","F","G","b","1","z","u","6","X","H","B","r","U","T","c","7","l","x","P","8","3","L","2","q","N","R","k","v","S","W","i","E","Q","f","I","0","e","A","Z","n","V","g","C","p","K","M","j","o","d","t","a","J","Y","5","m","D","y","O","h","9","w","4","s"]
function evc(letter){
	var evcrt = 0;
	evcs = getUrlParameter(letter)
	for(var i = 0; i < evcs.length;i++){
			for(var i2 = 1; i2 <= 62;i2++){
				if(evcs[i] == abc[i2]){
					evcrt += i2	
				}
			}
	}	
	window.rtmax = evcrt
}
window.rsa = "";
function G(letter, multi){
	rtmax = rtmax * multi;
	rt = 0;
	rs = "";
	while(rt <= rtmax - 62){
		rn = ri(1,62)
	rt += rn;
	rs += abc[rn]	
	}
	rn = rtmax - rt
	rt += rn;
	rs += abc[rn]	
	rsa += rs;
	
	//$(".code"+letter).html(rs)
	//$(".rt"+letter).html(rt);

}
evc("z");
G("z",750);
evc("x");
G("x",500);
evc("b");
G("b",250);

function ri(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.t = 0;
window.c = 0;
for(var i = 0; i < rsa.length;i++){
	for(var abci = 1;abci <= 62;abci++){
		
		if(rsa[i] == abc[abci]){
			c += abci;
			if(i > 0){
				t += c * abci
			}
			if(i > 5){
				 
                t = Math.floor(t-(i * abci));
                    

			}
		}
	}
}
//alert(t);
//alert(t);
t = t.toString();
for(var i = t.length - 6;i < t.length;i++){
	
	for(var i2 = 0;i2 <= 9;i2++){
			
		if(i2 == t[i]){
			//alert(t[i]);
			rsa += abc[i2];
		}
	}
}
$('.code').val(rsa).select();
setTimeout(function(){
	copyText(rsa);	
}, 3000);
setTimeout(function(){
	alert("Text Copied!");
}, 5000);




//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
  navigator.clipboard.writeText(text);
}

})