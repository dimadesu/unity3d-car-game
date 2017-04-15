var mySkin : GUISkin;
var SkinButtonOutgoing : GUISkin;
var background : Texture2D;
var displayMenu : int = 0;
var displayControls = false;
var displaySoundSettings = false;
var obja : GameObject;
var objaScript : GlobalAudioVolume;

function Start() {
	obja = GameObject.FindWithTag("GlobalVolume");
	objaScript = obja.GetComponent(typeof(GlobalAudioVolume)) as GlobalAudioVolume;
}

function OnGUI()
{
	GUI.skin = mySkin;
	if (displayMenu == 1) {
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		GUI.BeginGroup (Rect (Screen.width / 2 - 400 / 2,Screen.height / 2 - 400 / 2 ,400,400));
			GUI.Box(Rect(0,0,400,400),"");
			if (GUI.Button (Rect (10, 10, 380, 30), "resume")) {
				Time.timeScale = 1;
				displayMenu = 0;
				var sources5 = FindObjectsOfType(AudioSource);
				for (var source : AudioSource in sources5) {
					if( source == GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
						source.Play();
					} else if ( source !== GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
						source.enabled = true;
						source.volume = source.maxVolume * GUIMainMenu.effectsVolume;
					}
				}
			}
			if (GUI.Button (Rect (10, 50, 380, 30), "restart")) {
				Time.timeScale = 1.0;
				Application.LoadLevel("level01");
			}
			if (GUI.Button (Rect (10, 90, 380, 30), "controls")) {
				displayMenu = 0;
				displayControls = true;
			}
			if (GUI.Button (Rect (10, 130, 380, 30), "sound settings")) {
				displayMenu = 0;
				displaySoundSettings = true;
			}
			GUI.skin = SkinButtonOutgoing;
			if (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer)
			{
				if (GUI.Button (Rect (10, 170, 380, 30), "2$ desktop version")) {
					Application.OpenURL ("http://www.dadadagames.com/drunk-car/donate/");
				}
				GUI.skin = mySkin;
				if (GUI.Button (Rect (10, 210, 380, 30), "main menu")) {
					Application.LoadLevel("level00");
					Time.timeScale = 1;
				}
			}
			if (Application.platform == RuntimePlatform.WindowsPlayer || 
			Application.platform == RuntimePlatform.WindowsEditor ||
			Application.platform == RuntimePlatform.OSXPlayer ||
			Application.platform == RuntimePlatform.OSXEditor ||
			Application.platform == RuntimePlatform.OSXDashboardPlayer)
			{
				GUI.skin = mySkin;
				if (GUI.Button (Rect (10, 170, 380, 30), "main menu")) {
					Application.LoadLevel("level00");
					Time.timeScale = 1;
				}
			}
			
		GUI.EndGroup();
	}
	if (displayControls) {
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
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
	if (displaySoundSettings) {
		var sources2 = FindObjectsOfType(AudioSource);
		for (var source : AudioSource in sources2) {
			if( source == GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
				if(!source.isPlaying) {
					source.Play();
				}
			} else if ( source !== GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
				source.enabled = true;
				source.volume = source.maxVolume * GUIMainMenu.effectsVolume;
			}
		}
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		GUI.BeginGroup (Rect (Screen.width / 2 - 400 / 2,Screen.height / 2 - 400 / 2 ,400,400));
			GUI.Box(Rect(0,0,400,400),"");
			GUI.Label(Rect(10,70,380,30),"music");
			
			GUIMainMenu.musicVolume = GUI.HorizontalSlider (Rect (10, 105, 380, 30), GUIMainMenu.musicVolume, 0.0, 1.0);
			GUI.Label(Rect(10,145,380,30),"sound effects");
			GUIMainMenu.effectsVolume = GUI.HorizontalSlider (Rect (10, 180, 380, 30), GUIMainMenu.effectsVolume, 0.0, 1.0);
			if (GUI.Button (Rect (10, 360, 380, 30), "back to menu")) {
				displaySoundSettings = false;
				displayMenu = 1;
				var sources4 = FindObjectsOfType(AudioSource);
				for (var source : AudioSource in sources4) {
					if( source == GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
						source.Pause();
					} else if ( source !== GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
						source.enabled = false;
						source.volume = 0;
					}
				}
			}
		GUI.EndGroup();
		if (GUI.changed) {
			objaScript.GlobalVolume();
		}
	}
}
function Update() {
	if (Input.GetButtonDown("Esc") && !displayControls && !displaySoundSettings && !GUITitlesEnd.displayLabel) {
		Time.timeScale = 1.0 - Time.timeScale; //pause/unpause the game
		displayMenu = 1 - displayMenu;
		var sources = FindObjectsOfType(AudioSource);
		for (var source : AudioSource in sources) {
			if (displayMenu == 1) {
				if( source == GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
					source.Pause();
				} else if ( source !== GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
					source.enabled = false;
					source.volume = 0; //for looped ones
				}
			} else if (displayMenu == 0) {
				if( source == GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
					source.Play();
				} else if ( source !== GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
					source.enabled = true;
					source.volume = source.maxVolume * GUIMainMenu.effectsVolume;
				}
			}
		}
	} else if (Input.GetButtonDown("Esc") && displayControls) {
		displayControls = false;
		displayMenu = 1;
	} else if (Input.GetButtonDown("Esc") && displaySoundSettings) {
		displaySoundSettings = false;
		displayMenu = 1;
		var sources3 = FindObjectsOfType(AudioSource);
		for (var source : AudioSource in sources3) {
			if( source == GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
				source.Pause();
			} else if ( source !== GameObject.FindWithTag("SoundTrack").GetComponent(typeof(source)) ) {
				source.enabled = false;
				source.volume = 0;
			}
		}
	}
	if(Time.timeScale == 0) {
		
	}
}