var sounds : AudioClip[];
//private var tempArray : Material[]; 

function Start() {
	audio.clip = sounds[Random.Range(0, sounds.Length)];
}