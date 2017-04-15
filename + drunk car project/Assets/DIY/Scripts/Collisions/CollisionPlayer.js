//Applies to the player and add explosion effect

var explosion : Transform;

function OnCollisionEnter(theObject : Collision) {
	if(theObject.gameObject.name == "Wall"){
		//audio.PlayOneShot(hitWallSound);
		Instantiate(explosion,transform.position, transform.rotation);
	}
}

@script RequireComponent(AudioSource)