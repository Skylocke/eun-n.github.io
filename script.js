var arr = ['assets/taeyeon1.mp4', 'assets/taeyeon.mp4', 'assets/FantasticBaby.mp4', 'assets/Sober.mp4'];
var aa = 0;

function eye () {
	document.querySelector("#coaster").src = arr[0];	
	document.querySelector("#currentvid").load();
	play1();
	toggle();
	aa = 0;
}

function rain () {
	document.querySelector("#coaster").src = arr[1];
	document.querySelector("#currentvid").load();
	play1();
	toggle();
	aa = 1;
}

function fantastic () {
	document.querySelector("#coaster").src = arr[2];
	document.querySelector("#currentvid").load();
	play1();
	toggle();
	aa = 2;
}

function sober () {
	document.querySelector("#coaster").src = arr[3];
	document.querySelector("#currentvid").load();
	play1();
	toggle();
	aa = 3;
}

function toggle() {
	document.getElementById('test').setAttribute('visible', !document.getElementById('test').getAttribute('visible'));
	document.getElementById('test1').setAttribute('visible', !document.getElementById('test1').getAttribute('visible'));
	document.getElementById('baby').setAttribute('visible', !document.getElementById('baby').getAttribute('visible'));
	document.getElementById('sober').setAttribute('visible', !document.getElementById('sober').getAttribute('visible'));
}

function play1() {
	document.getElementById('coaster').play();
	document.getElementById('play').setAttribute('visible', false);
	document.getElementById('pause').setAttribute('visible', true);
}

function pause1() {
	document.getElementById('coaster').pause();
	document.getElementById('play').setAttribute('visible', true);
	document.getElementById('pause').setAttribute('visible', false);
}

function sound() {
	document.getElementById('coaster').muted = true;
	document.getElementById('coaster').volume=0;
	document.getElementById('mute').setAttribute('visible', true);
	document.getElementById('sound').setAttribute('visible', false);
}

function mute() {
	document.getElementById('coaster').muted = false;
	document.getElementById('coaster').volume = 1;
	document.getElementById('mute').setAttribute('visible', false);
	document.getElementById('sound').setAttribute('visible', true);
}

function rewind() {
	document.getElementById('coaster').currentTime = 0;

	if(document.getElementById('coaster').currentTime < 4) {
		if(aa-1 > -1) {
		document.getElementById("coaster").src = arr[aa-1];
		aa -= 1;
		} else {
		document.getElementById('coaster').src= arr[arr.length-1]; 
		aa = arr.length-1;
		}
	}
}

function forward() {
	if(aa+1 < arr.length) {
		document.getElementById("coaster").src = arr[aa+1];
		aa += 1;
		} else {
		document.getElementById('coaster').src= arr[0]; 
		aa = 0;
		}
}