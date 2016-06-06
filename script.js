
function eye () {
	document.querySelector("#coaster").src = 'assets/taeyeon1.mp4';	
	document.querySelector("#currentvid").load();
	toggle();
}

function rain () {
	document.querySelector("#coaster").src = 'assets/taeyeon.mp4';
	document.querySelector("#currentvid").load();
	toggle();
}

function toggle() {
	document.getElementById('test').setAttribute('visible', !document.getElementById('test').getAttribute('visible'));
	document.getElementById('test1').setAttribute('visible', !document.getElementById('test1').getAttribute('visible'));
}