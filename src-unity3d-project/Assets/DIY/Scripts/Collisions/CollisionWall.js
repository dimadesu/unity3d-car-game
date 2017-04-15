//Applies to player
var wallExplosion : AudioClip;
function Start () {
	//var wall = GameObject.FindWithTag("Wall");
	var walls = GameObject.FindGameObjectsWithTag("Wall");
	for (var wall in walls) {
		wall.audio.volume = 3 * GUIMainMenu.effectsVolume;
		wall.audio.maxVolume = 3;
		wall.audio.loop=false;
		wall.audio.clip = wallExplosion;
	}
}

function OnCollisionEnter(theObject : Collision) {
	if(theObject.gameObject.name == "Wall"){
		theObject.gameObject.audio.Play();
	}
}

//@script RequireComponent(AudioSource)