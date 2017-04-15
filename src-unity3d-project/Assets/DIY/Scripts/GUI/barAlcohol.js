static var progress : float;
var customStyle : GUIStyle;
var customStyleHurry : GUIStyle;
var showHurry = false;
var stopper = false;
var wait = false;

function Start ()
{
	progress = 50;
	GameObject.FindWithTag("MainCamera").GetComponent("MotionBlur").enabled = false;
	GameObject.FindWithTag("CameraInside").GetComponent("MotionBlur").enabled = false;
}

function OnGUI()
{
	if (CollisionItem.boringCarDrinked) {
		GUI.depth = 100;
		GUI.BeginGroup (Rect (0, 40, Screen.width - Screen.width * 0.01 * progress, 25));
			// Define progress bar texture within customStyle under Normal > Background
			GUI.Box (Rect (0,0, 1980, 25),"Alcohol level", customStyle);
			//GUI.Label (Rect(0,0,600,25),"",customStyle);
		GUI.EndGroup ();
		GameObject.FindWithTag("MainCamera").GetComponent("MotionBlur").enabled = true;
		GameObject.FindWithTag("CameraInside").GetComponent("MotionBlur").enabled = true;
	}
	if (progress >= 70 && showHurry) {
		//GUI.skin = customStyleHurry;
		GUI.Label(Rect(0,0,Screen.width,Screen.height),"HURRY UP!",customStyleHurry);
	}
} 

function Update()
{
	AlcoVaporiser();
	ShowHurry();
}

function AlcoVaporiser () {
	if (progress < 100 && !CollisionItem.gameEnded && CollisionItem.boringCarDrinked && !wait && Time.timeScale) {//Time.timeScale means "if not paused"
		wait = true;
		progress += 0.1;
		GameObject.FindWithTag("MainCamera").GetComponent("MotionBlur").blurAmount = (100-progress*2)*0.01;
		GameObject.FindWithTag("CameraInside").GetComponent("MotionBlur").blurAmount = (100-progress*2)*0.01;
		yield WaitForSeconds(0.25);
		wait = false;
	}
	
}

function ShowHurry () {
	if (progress >= 80 && !CollisionItem.gameEnded && !stopper) {
		GameObject.FindWithTag("SoundTrack").audio.pitch = 1.2;
		stopper = true;
		showHurry = true;
		yield WaitForSeconds(.5);
		showHurry = false;
		yield WaitForSeconds(.5);
		stopper = false;
	} else if (CollisionItem.gameEnded) {
		showHurry = false;
		GameObject.FindWithTag("SoundTrack").audio.pitch = 1.0;
	} else if (progress < 80) {
		GameObject.FindWithTag("SoundTrack").audio.pitch = 1.0;
	}
}