var elem = document.createElement('img');
var host = window.location.host.substring(0,2);

if (host == 'na' || host == 'eu'){
	var imgUrl = "chrome-extension://" + chrome.runtime.id + "/resources/production.png"
	elem.setAttribute('src', imgUrl);
} else {
	var imgUrl = "chrome-extension://" + chrome.runtime.id + "/resources/sandbox.png"
	elem.setAttribute('src', imgUrl);
}

document.getElementById('globalHeaderBar').appendChild(elem);

