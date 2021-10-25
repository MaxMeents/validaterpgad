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
WF = ri(1,7);
if(WF == 1){
$('#copyme').css({"font-family": "Bubblegum Sans, cursive"})
}
if(WF == 2){
$('#copyme').css({"font-family": "Carter One, cursive"})
}
if(WF == 3){
$('#copyme').css({"font-family": "Goldman, cursive"})
}
if(WF == 4){
$('#copyme').css({"font-family": "Marck Script, cursive"})
}
if(WF == 5){
$('#copyme').css({"font-family": "Merienda, cursive"})
}
if(WF == 6){
$('#copyme').css({"font-family": "Oregano, cursive"})
}
if(WF == 7){
$('#copyme').css({"font-family": "Sirin Stencil, cursive"})
}

$('.code').val(rsa).select();
window.numtries = 0;
window.time = 1000;
var copytimer = setInterval(function(){
	window.numtries++
	copyText(rsa);	
}, window.time);


function copysuccess(){
	window.numtries = -1;
	clearInterval(copytimer);
	window.time = 99999999
	window.open('javascript:window.open("", "_self", "");window.close();', '_self');

}
function copyfailed(){
	//try again
	window.time = 500;
}


//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
  navigator.clipboard.writeText(text).then(function() {
  copysuccess();
}, function() {
  copyfailed();
});
}

})