private var timeCounter = 0.0;
private var timeOnStart = 0.0;
var timeCounterSet = false;
var SoundTrack;
var sourcesCounter : int = 0;

function Start () {
	timeOnStart = Time.time;
	SoundTrack = GameObject.FindWithTag("SoundTrack").audio;
	SoundTrack.volume = 0;//for fade in effect
	var sources = FindObjectsOfType(AudioSource);
	for (var source : AudioSource in sources) {
		if( source !== SoundTrack.GetComponent(typeof(source)) ) {
			source.maxVolume = source.volume;//set this only only start, we keep initial volume inside maxVolume
			source.volume = source.maxVolume * GUIMainMenu.effectsVolume;
		}
		else if ( source == SoundTrack.GetComponent(typeof(source)) ) {
			SoundTrack.maxVolume = 1;
		}
		sourcesCounter ++;
		if (sourcesCounter == sources.length) {
			maxVolumeSet = true;
		}
	}
}

function GlobalVolume()
{
	SoundTrack.volume = SoundTrack.maxVolume * GUIMainMenu.musicVolume;
	var sources = FindObjectsOfType(AudioSource);
	for (var source : AudioSource in sources) {
		if( source !== SoundTrack.GetComponent(typeof(source)) ) {
			source.volume = source.maxVolume * GUIMainMenu.effectsVolume;
		}
		else if ( source == SoundTrack.GetComponent(typeof(source)) ) {
			//source.volume = source.maxVolume * GUIMainMenu.musicVolume;
		}
	}
}

function Update () 
{
	//fade in effect
	if(GUIFade.fadeOut && !timeCounterSet) {
		timeOnStart = Time.time;
		timeCounterSet = true;
	}
	timeCounter = Time.time - timeOnStart;
	if(timeCounter <= 1.0) {
		SoundTrack.volume = Mathf.Lerp(0,SoundTrack.maxVolume * GUIMainMenu.musicVolume,timeCounter);
	}
	if(GUIFade.fadeOut && !GUITitlesEnd.displayLabel) {
		SoundTrack.volume = Mathf.Lerp(SoundTrack.maxVolume * GUIMainMenu.musicVolume,0,timeCounter);
	}
}