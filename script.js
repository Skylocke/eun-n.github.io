var arr = ['assets/exo.mp4', 'assets/taeyeon.mp4', 'assets/FantasticBaby.mp4', 'assets/ptdemo1.mp4', 'assets/ptdemo2.mp4', 'assets/ptdemo3.mp4'];
var aa = 0;


function vid (a) {
	document.querySelector("#coaster").src = arr[a];	
	document.querySelector("#currentvid").load();
	play1();
	toggle();
	aa = a;
}

function toggle() {
	document.getElementById('test').setAttribute('visible', !document.getElementById('test').getAttribute('visible'));
	document.getElementById('test1').setAttribute('visible', !document.getElementById('test1').getAttribute('visible'));
	document.getElementById('baby').setAttribute('visible', !document.getElementById('baby').getAttribute('visible'));
	document.getElementById('pt').setAttribute('visible', !document.getElementById('pt').getAttribute('visible'));
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
	document.getElementById('mute').setAttribute('visible', true);
	document.getElementById('sound').setAttribute('visible', false);
}

function mute() {
	document.getElementById('coaster').muted = false;
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

		play1();
}

function start () {
	vid(3);
	pause1();
}

function loop() {
	document.getElementById('coaster').setAttribute('loop', true);
	document.getElementById('loop').setAttribute('visible', true);
	document.getElementById('noloop').setAttribute('visible', false);
}

function noloop() {
	document.getElementById('coaster').setAttribute('loop', false);
	document.getElementById('loop').setAttribute('visible', false);
	document.getElementById('noloop').setAttribute('visible', true);

}

function shrink() {
	document.getElementById('currentvid').setAttribute('height', 13.5);
	document.getElementById('currentvid').setAttribute('width', 24);
	document.getElementById('expand').setAttribute('visible', true);
	document.getElementById('shrink').setAttribute('visible', false);
}

function expand() {
	document.getElementById('currentvid').setAttribute('height', 27);
	document.getElementById('currentvid').setAttribute('width', 48);
	document.getElementById('expand').setAttribute('visible', false);
	document.getElementById('shrink').setAttribute('visible', true);

}