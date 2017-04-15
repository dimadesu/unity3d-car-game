var mySkin : GUISkin;
var SkinButtonOutgoing : GUISkin;
var styleVersion : GUIStyle;
//var background : Texture2D;
var displayMenu : int = 0;
var displayControls = false;
var displayCredits = false;
var displaySoundSettings = false;
static var musicVolume : float = 0.5;
static var effectsVolume : float = 1.0;
var testEffectsSound : GameObject;
var obja : GameObject;
var objaScript : GlobalAudioVolume;
var posY;


function Start() {
	testEffectsSound = GameObject.Find("Player");
	//all this hassle if for calling function in other script
	obja = GameObject.FindWithTag("GlobalVolume");
	objaScript = obja.GetComponent(typeof(GlobalAudioVolume)) as GlobalAudioVolume;
	if (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer)
	{
		posY = Screen.height / 1.3  - 400 / 2;
	} else if (Application.platform == RuntimePlatform.WindowsPlayer || 
	Application.platform == RuntimePlatform.WindowsEditor ||
	Application.platform == RuntimePlatform.OSXPlayer ||
	Application.platform == RuntimePlatform.OSXEditor ||
	Application.platform == RuntimePlatform.OSXDashboardPlayer)
	{
		posY = Screen.height / 1.35  - 400 / 2; //  400 / 2 = 200 +-
	}
}

function OnGUI()
{
	GUI.depth = 100;
	GUI.Label(Rect(0,0,Screen.width,Screen.height),"version 1.01 beta",styleVersion);
	GUI.skin = mySkin;
	if (displayMenu == 1) {
		//GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		GUI.BeginGroup (Rect (Screen.width / 2 - 400 / 2,posY,400,400));
			//GUI.Box(Rect(0,0,400,400),"");
			if (GUI.Button (Rect (10, 10, 300, 30), "play")) {
				//Application.LoadLevel("level01");
				FadeOutAndPlayLevel();
			}
			if (GUI.Button (Rect (10, 50, 300, 30), "controls")) {
				displayMenu = 0;
				displayControls = true;
			}
			if (GUI.Button (Rect (10, 90, 300, 30), "sound settings")) {
				displayMenu = 0;
				displaySoundSettings = true;
			}
			if (GUI.Button (Rect (10, 130, 300, 30), "credits")) {
				displayMenu = 0;
				displayCredits = true;
			}
			GUI.skin = SkinButtonOutgoing;
			if (GUI.Button (Rect (10, 170, 300, 30), "check for updates")) {
				Application.OpenURL ("http://www.dadadagames.com/drunk-car/update/");//create a special page on dadadagames.com like version "1.00.html"
			}
			if (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer)
			{
				if (GUI.Button (Rect (10, 210, 300, 30), "2$ desktop version")) {
					Application.OpenURL ("http://www.dadadagames.com/drunk-car/donate/");
				}
			}
			if (Application.platform == RuntimePlatform.WindowsPlayer || 
			Application.platform == RuntimePlatform.WindowsEditor ||
			Application.platform == RuntimePlatform.OSXPlayer ||
			Application.platform == RuntimePlatform.OSXEditor ||
			Application.platform == RuntimePlatform.OSXDashboardPlayer)
			{
				GUI.skin = mySkin;
				if (GUI.Button (Rect (10, 210, 300, 30), "quit")) {
					Application.Quit();
				}
			}
		GUI.EndGroup();
	}
	if (displayControls) {
		//GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		GUI.BeginGroup (Rect (Screen.width / 2 - 400 / 2,Screen.height / 2 - 400 / 2 ,400,400));
			GUI.Box(Rect(0,0,400,400),"");
			GUI.Label(Rect(10,10,380,310),"Arrows, A, S, W, D - control the car\n\n"+
			"Left Mouse, Space - fire\n\n"+
			"R - reset car position\n\n"+
			"C, Ctrl - camera\n\n"+
			"Esc - show/hide game menu, pause");
			if (GUI.Button (Rect (10, 360, 380, 30), "back to menu")) {
				displayControls = false;
				displayMenu = 1;
			}
		GUI.EndGroup();
	}
	if (displayCredits) {
		//GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		GUI.BeginGroup (Rect (Screen.width / 2 - 400 / 2,Screen.height / 2 - 400 / 2 ,400,400));
			GUI.Box(Rect(0,0,400,400),"");
			GUI.Label(Rect(10,10,380,310),"DADADA Games\n\n"+
			"Game by Dima Antonov\n\n"+
			"Support & Muse - Olga Novikova\n\n"+
			"Music by Freak Jam\n"+
			"Freak Jam is\n"+
			"Yura Ostapyuk,\nAlex Kasyanov,\nBogdan Vatulya,\nDima Antonov\n\n"+
			"Year 2010"
			);
			if (GUI.Button (Rect (10, 360, 380, 30), "back to menu")) {
				displayCredits = false;
				displayMenu = 1;
			}
		GUI.EndGroup();
	}
	if (displaySoundSettings) {
		testEffectsSound.audio.enabled = true;
		if(!testEffectsSound.audio.isPlaying) {
			testEffectsSound.audio.Play();
		}
		//GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		GUI.BeginGroup (Rect (Screen.width / 2 - 400 / 2,Screen.height / 2 - 400 / 2 ,400,400));
			GUI.Box(Rect(0,0,400,400),"");
			GUI.Label(Rect(10,70,380,30),"music");
			musicVolume = GUI.HorizontalSlider (Rect (10, 105, 380, 30), musicVolume, 0.0, 1.0);
			GUI.Label(Rect(10,145,380,30),"sound effects");
			effectsVolume = GUI.HorizontalSlider (Rect (10, 180, 380, 30), effectsVolume, 0.0, 1.0);
			if (GUI.Button (Rect (10, 360, 380, 30), "back to menu")) {
				displaySoundSettings = false;
				testEffectsSound.audio.Stop();
				displayMenu = 1;
			}
		GUI.EndGroup();
		if (GUI.changed) {
			objaScript.GlobalVolume();
		}
	}
}
function Update() {
	if (Input.GetButtonDown("Esc")) {
		displayControls = false;
		displayCredits = false;
		displaySoundSettings = false;
		testEffectsSound.audio.Stop();
		displayMenu = 1;
	}
}
function FadeOutAndPlayLevel() {
	GUIFade.fadeOut = true;
	yield WaitForSeconds(2);
	Application.LoadLevel("level01");
}