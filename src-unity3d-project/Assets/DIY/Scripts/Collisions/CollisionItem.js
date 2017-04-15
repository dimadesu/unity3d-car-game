//Applies only to the player
static var score : int;
static var countTreasures : int;
var SoundPlayed = 0;
var SoundCollectItemPrefab : Transform;
var SoundCollectItemCoffee : Transform;
var styleLabelDrinks : GUIStyle;
static var gameEnded : boolean;
static var progressValue : int;
static var WinOrLostGlobal : String;
var SoundTrackWin : AudioClip;
var SoundTrackLoose : AudioClip;
var SoundTrackContinued : AudioClip;
static var boringCarDrinked = false;
static var spiralInside = false;
static var spiralExited = false;

function Start () {
	gameEnded = false;
	score = 0;
	boringCarDrinked = false;
	WinOrLostGlobal = "";
	CountTreasures();
}

function OnGUI () {
	if (score >= 1) {
		GUI.depth = 101;
		GUI.BeginGroup (Rect (10, 10, Screen.width - 10, Screen.height - 10));
			GUI.Label(Rect(0,0,200,20),"Drinks: " + score + "/" + countTreasures,styleLabelDrinks);
		GUI.EndGroup ();
	}
}

function OnTriggerEnter(collisionInfo : Collider){
	if(collisionInfo.gameObject.tag == "Treasure") {
		var SoundCollectItemPrefabVariable = Instantiate(SoundCollectItemPrefab,collisionInfo.transform.position,Quaternion.identity);
		SoundCollectItemPrefabVariable.audio.volume = SoundCollectItemPrefabVariable.audio.volume * GUIMainMenu.effectsVolume;
		Destroy(collisionInfo.gameObject);
		Destroy(SoundCollectItemPrefabVariable.GetComponent (AudioSource),10);//better do this, or console gives warnings
		Destroy(SoundCollectItemPrefabVariable,10);
		//Have to count score this way, because player has 3 colliders, so sometimes Tiggger gets called more often, no use of formula: score+=1;
		score = countTreasures - gameObject.FindGameObjectsWithTag("Treasure").length + 1;
		boringCarDrinked = true;
		progressValue = 10;
		barAlcohol.progress -= progressValue;
		GUICollectInfo.show = true;
		if(barAlcohol.progress < 0) {
			barAlcohol.progress = 0;
		}
	}
	if(collisionInfo.gameObject.name == "Coffee" && boringCarDrinked) {
		var SoundCollectItemPrefabVariable2 = Instantiate(SoundCollectItemCoffee,collisionInfo.transform.position,Quaternion.identity);
		SoundCollectItemPrefabVariable2.audio.volume = SoundCollectItemPrefabVariable2.audio.volume * GUIMainMenu.effectsVolume;
		Destroy(collisionInfo.gameObject);
		Destroy(SoundCollectItemPrefabVariable2.GetComponent (AudioSource),10);//better do this, or console gives warnings
		Destroy(SoundCollectItemPrefabVariable2,10);
		progressValue = -10;
		barAlcohol.progress -= progressValue;
		GUICollectInfo.show = true;
	}
	if(collisionInfo.gameObject.name == "SpiralCameraTrigger") {
		spiralInside = true;
	}
}
/*
function OnTriggerStay (collisionInfo : Collider){
	if(collisionInfo.gameObject.name == "SpiralCameraTrigger") {
		spiralInside = true;
		spiralExited = false;
	}
}
*/
function OnTriggerExit(collisionInfo : Collider){
	if(collisionInfo.gameObject.name == "SpiralCameraTrigger") {
		spiralInside = false;
		spiralExited = true;
	}
}
/*
function CameraSpiral () {
	if (spiralInside) {
		SmoothFollow.distanceGlobal = Mathf.SmoothDamp(normalDistance, spiralDistance, mysteriousVelocity, smoothTime);
		SmoothFollow.heightGlobal = Mathf.SmoothDamp(normalHeight, spiralHeight, mysteriousVelocity, smoothTime);
	} else if (spiralExited) {
		SmoothFollow.distanceGlobal = Mathf.SmoothDamp(spiralDistance, normalDistance, mysteriousVelocity, smoothTime);
		SmoothFollow.heightGlobal = Mathf.SmoothDamp(spiralHeight, normalHeight, mysteriousVelocity, smoothTime);
	}
}*/

function Update () {
	//CameraSpiral ();
	//WIN script
	if (score == countTreasures && countTreasures) {
		EndGame("win");
	} else if (GUITitlesEnd.continued) {
		WinOrLostGlobal = "continued";
		GUITitlesEnd.continued = false;
		barAlcohol.progress = 50;
		gameEnded = false;
		boringCarDrinked = false;
		GUIFade.fadeOut = false;
		GUITitlesEnd.displayLabel = false;
		GameObject.FindWithTag("SoundTrack").audio.clip = SoundTrackContinued;
		if(!GameObject.FindWithTag("SoundTrack").audio.isPlaying) {
			GameObject.FindWithTag("SoundTrack").audio.Play();
		}
		PlayerControl.variablesSet = false;//it's for "lost animation", when player loose again
		SoundPlayed = 0;
		/*fade in part. start*/
		GUITitlesEnd.FadedOut = false;
		GUITitlesEnd.frameSet = false;
		GUITitlesEnd.smth = false;
		GUIFade.timeInitial = Time.time;
		GUIFade.fadeIn = true;
		/*fade in part. end*/
		WinOrLostGlobal = "";
	} else if (barAlcohol.progress >= 100 && !GUITitlesEnd.continued && WinOrLostGlobal == "") {
		EndGame("lost");
	}
}

function EndGame (winOrLost : String) {
	gameEnded = true;
	if (winOrLost == "win") {
		GameObject.FindWithTag("SoundTrack").audio.clip = SoundTrackWin;
		if(!GameObject.FindWithTag("SoundTrack").audio.isPlaying) {
			GameObject.FindWithTag("SoundTrack").audio.Play();
		}
		GUITitlesEnd.displayLabel = true;
		WinOrLostGlobal = "win";
		if(!GameObject.FindWithTag("SoundWin").audio.isPlaying && SoundPlayed == 0) {
			
			GameObject.FindWithTag("SoundWin").audio.Play();
			GameObject.FindWithTag("SSoundWinApplause").audio.Play();
			SoundPlayed = 1;
		}
		GUITitlesEnd.GUIWon = "You've drank\nALL ALCOHOL\nin the town!\n\nLIFE IS PERFECT\n(for a while)";
		GUIFade.fadeOut = true;
	} else if (winOrLost == "lost") {
		GameObject.FindWithTag("SoundTrack").audio.clip = SoundTrackLoose;
		if(!GameObject.FindWithTag("SoundTrack").audio.isPlaying) {
			GameObject.FindWithTag("SoundTrack").audio.Play();
		}
		WinOrLostGlobal = "lost";
		PlayerControl.boring = true;
		yield WaitForSeconds(3);
		GUITitlesEnd.displayLabel = true;
		if(!GameObject.FindWithTag("SSoundLost2").audio.isPlaying && SoundPlayed == 0) {
			GameObject.FindWithTag("SoundLost").audio.Play();
			GameObject.FindWithTag("SSoundLost2").audio.Play();
			SoundPlayed = 1;
		}
		GUITitlesEnd.GUIWon = "HANGOVER!\n\nLife sucks again\n\nCollect all alcohol\nbefore your alcohol\nlevel reaches zero\n\n\n\n"+
		"Drinks Collected: " + score +"/"+countTreasures;
		GUIFade.fadeOut = true;
	}
}

function CountTreasures()
{
	yield WaitForSeconds(1);
	countTreasures = gameObject.FindGameObjectsWithTag("Treasure").length;
}

@script RequireComponent(AudioSource)