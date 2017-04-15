static var fadeIn = true;
static var fadeOut = false;
private var alphaFadeValue : float = 1.0;
var blackTexture : Texture2D;
var timeCounter = 0.0;
static var timeInitial = 0.0;

function Start() {
	fadeIn = true;
	alphaFadeValue = 1;//100% black
	timeCounterSet = false;
	timeInitial = Time.time;
}

function OnGUI () {
	timeCounter = Time.time - timeInitial;
	GUI.depth = 50;
	if (fadeIn) {//to transparency. black from alpha 1 to 0
		fadeOut = false;
		if (alphaFadeValue >= 0.0 && timeCounter < 1) {
			GUI.color = Color(0, 0, 0, alphaFadeValue);
			GUI.DrawTexture( Rect(0, 0, Screen.width, Screen.height ), blackTexture );
		} else if (alphaFadeValue >= 0.0 && timeCounter > 1) {
			alphaFadeValue -= Mathf.Clamp01(Time.deltaTime * 0.5);
			GUI.color = Color(0, 0, 0, alphaFadeValue);
			GUI.DrawTexture( Rect(0, 0, Screen.width, Screen.height ), blackTexture );
		} else if (alphaFadeValue < 0.0) {
			fadeIn = false;
		}
	}
	if (fadeOut) {//to black from alpha 0 to 1
		if (alphaFadeValue <= 1.0 && Time.time > 1) {
			alphaFadeValue += Mathf.Clamp01(Time.deltaTime * 0.5);
			GUI.color = Color(0, 0, 0, alphaFadeValue);
		}
		GUI.DrawTexture( Rect(0, 0, Screen.width, Screen.height ), blackTexture );
	}
}