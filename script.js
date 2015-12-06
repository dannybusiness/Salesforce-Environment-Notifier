var elem = document.createElement('img');
var host = window.location.host.substring(0,2);

if (host == 'na' || host == 'eu'){
	var imgUrl = "chrome-extension://" + chrome.runtime.id + "/resources/production.png"
} else {
	var imgUrl = "chrome-extension://" + chrome.runtime.id + "/resources/sandbox.png"
}

elem.setAttribute('src', imgUrl);
elem.setAttribute('style', 'position: fixed;top:0px;left:400px;')
var parent = document.getElementById('contentWrapper');
console.log(parent);
parent.appendChild(elem);

