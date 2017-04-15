var range = 10.0;
var explosion : Transform;
var BurningPeriod = 0.5;
private var hit : RaycastHit;
private var flameCounter = 0;

function Start () {
	transform.gameObject.Find("ShotFire").particleEmitter.emit = false;
	transform.gameObject.Find("ShotFire").audio.Stop();
}

function Update()
{
	if(Input.GetButton("Fire") && !CollisionItem.gameEnded && !PlayerControl.boring && Time.timeScale)//Time.timeScale means "if not paused"
	{
		if (!transform.gameObject.Find("ShotFire").audio.isPlaying)
		{
			transform.gameObject.Find("ShotFire").audio.Play();
		}
		transform.gameObject.Find("ShotFire").particleEmitter.emit = true;
		
		// Burn
		var direction = transform.forward;
		if (Physics.Raycast (transform.position, direction, hit, transform.gameObject.Find("ShotFire").particleEmitter.localVelocity.z))
		{
			Burn();
		}
	}
	else
	{
		transform.gameObject.Find("ShotFire").particleEmitter.emit = false;
		transform.gameObject.Find("ShotFire").audio.Stop();
	}
}

function Burn() {
	if (flameCounter == 0) {
		Instantiate(explosion, hit.point, Quaternion.identity);
		hit.collider.SendMessageUpwards("ApplyDamage",SendMessageOptions.DontRequireReceiver);
		flameCounter +=1;
		yield WaitForSeconds(BurningPeriod);//so every half a second it can burn
		flameCounter -= 1;
	}
}

@script RequireComponent(AudioSource)