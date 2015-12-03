var elem = document.createElement('img');
console.log(window.location.host);
//console.log(window.location.href);
var host = window.location.host.substring(0,2);
console.log(host);
if (host == 'na'){
	var imgUrl = "chrome-extension://" + chrome.runtime.id + "/resources/production.png"
	console.log("img url = " + imgUrl);
	elem.setAttribute('src', imgUrl);
} else {
	var imgUrl = "chrome-extension://" + chrome.runtime.id + "/resources/sandbox.png"
	console.log("img url = " + imgUrl);
	elem.setAttribute('src', imgUrl);
}

document.getElementById('globalHeaderBar').appendChild(elem);

