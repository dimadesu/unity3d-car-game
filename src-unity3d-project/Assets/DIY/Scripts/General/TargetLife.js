var targetLife = 10;
var hitTargetElephant : AudioClip;
var hitTargetElephantVolume = 1.0;
var TargetDestroy : AudioClip;
var TargetDestroyVolume = 2.0;
var explosion2 : Transform;
var CameraInside;

function Start() {
	if(transform.Find("TextTargetLife")) {
		targetLife = Random.Range(1,8);
		transform.Find("TextTargetLife").GetComponent(TextMesh).text = "" + targetLife;
	}
	CameraInside = GameObject.FindWithTag("CameraInside");
}

function ApplyDamage () {
	targetLife -= 1;
	transform.Find("TextTargetLife").GetComponent(TextMesh).text = "" + targetLife;
	gameObject.audio.clip = hitTargetElephant;
	gameObject.audio.volume = hitTargetElephantVolume * GUIMainMenu.effectsVolume;
	gameObject.audio.maxVolume = hitTargetElephantVolume;
	gameObject.audio.Play();
	if (targetLife == 0) {
		gameObject.audio.clip = TargetDestroy;
		gameObject.audio.volume = TargetDestroyVolume * GUIMainMenu.effectsVolume;
		gameObject.audio.maxVolume = gameObject.audio.volume;
		gameObject.audio.Play();
		var explosion2 = Instantiate(explosion2, transform.position, Quaternion.identity);//more thick-looking one
		Destroy(transform.Find("TargetMonster").gameObject);
		Destroy(transform.Find("TextTargetLife").gameObject);
		yield WaitForSeconds(3);
		Destroy(gameObject);
	}
}

function Update () {
	if(CameraInside && transform.Find("TextTargetLife")) {
		transform.Find("TextTargetLife").eulerAngles.y = CameraInside.transform.eulerAngles.y;
	}
}