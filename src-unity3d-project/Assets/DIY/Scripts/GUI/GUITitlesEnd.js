static var displayLabel : boolean = false;
var styleLabelWon : GUIStyle;
static var GUIWon = "You\nWON\nthe game!";
var mySkin : GUISkin;
var SkinButtonOutgoing : GUISkin;
var background : Texture2D;
var driverLost1 : Texture2D;
var driverLost2 : Texture2D;
var driverLost3 : Texture2D;
var driverWon1 : Texture2D;
var driverWon2 : Texture2D;
var driverWon3 : Texture2D;
var frame : int = 1;
static var frameSet = false;
var Xpos : int;
var Ypos : int;
var Xlong : int;
var Ylong : int;
static var FadedOut = false;
static var smth = false;
static var continued = false;

function Start() {
	displayLabel = false;
	frameSet = false;
	smth = false;
	FadedOut = false;
	continued = false;
}

function OnGUI()
{
	GUI.depth = 0;
	DriverTimer();
	if (displayLabel) {
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background);
		Xpos = Screen.width * 0.1 * 4;
		Ypos = Screen.height * 0.1 * -0.2;
		Xlong = Screen.width * 0.1 * 7;
		Ylong = Screen.height * 0.1 * 10;
		if(CollisionItem.WinOrLostGlobal == "lost" && FadedOut) {
			if (frame == 1) GUI.DrawTexture(Rect(Xpos, Ypos, Xlong, Ylong), driverLost1);
			if (frame == 2) GUI.DrawTexture(Rect(Xpos, Ypos, Xlong, Ylong), driverLost2);
			if (frame == 3) GUI.DrawTexture(Rect(Xpos, Ypos, Xlong, Ylong), driverLost3);
		} else if(CollisionItem.WinOrLostGlobal == "win" && FadedOut) {
			if (frame == 1) GUI.DrawTexture(Rect(Xpos, Ypos, Xlong, Ylong), driverWon1);
			if (frame == 2) GUI.DrawTexture(Rect(Xpos, Ypos, Xlong, Ylong), driverWon2);
			if (frame == 3) GUI.DrawTexture(Rect(Xpos, Ypos, Xlong, Ylong), driverWon3);
		}
		GUI.BeginGroup (Rect (Screen.width / 2 - 460 / 2,Screen.height / 2 - 400 / 2 ,460,400));
			GUI.skin = mySkin;
			//GUI.Box(Rect(0,0,400,400),"");
			GUI.Label(Rect(0,10,400,280),GUIWon,styleLabelWon);//GUIwon
			if(CollisionItem.WinOrLostGlobal == "win") {
				if (GUI.Button (Rect (40, 280, 380, 30), "play again")) {
					Application.LoadLevel("level01");
				}
				GUI.skin = SkinButtonOutgoing;
				if (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer)
				{
					if (GUI.Button (Rect (40, 320, 380, 30), "2$ desktop version")) {
						Application.OpenURL ("http://www.dadadagames.com/drunk-car/donate/");
					}
					GUI.skin = mySkin;
					if (GUI.Button (Rect (40, 360, 380, 30), "main menu")) {
						Application.LoadLevel("level00");
					}
				}
				if (Application.platform == RuntimePlatform.WindowsPlayer || 
				Application.platform == RuntimePlatform.WindowsEditor ||
				Application.platform == RuntimePlatform.OSXPlayer ||
				Application.platform == RuntimePlatform.OSXEditor ||
				Application.platform == RuntimePlatform.OSXDashboardPlayer)
				{
					GUI.skin = mySkin;
					if (GUI.Button (Rect (40, 320, 380, 30), "main menu")) {
						Application.LoadLevel("level00");
					}
				}
			} else if(CollisionItem.WinOrLostGlobal == "lost") {
				if (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer)
				{
					GUI.skin = SkinButtonOutgoing;
					if (GUI.Button (Rect (40, 250, 380, 50), "just continue\n( 2$ desktop version )")) {
						Application.OpenURL ("http://www.dadadagames.com/drunk-car/donate/");
					}
					GUI.skin = mySkin;
					if (GUI.Button (Rect (40, 310, 380, 30), "restart")) {
						Application.LoadLevel("level01");
					}
					if (GUI.Button (Rect (40, 350, 380, 30), "main menu")) {
						Application.LoadLevel("level00");
					}
				}
				if (Application.platform == RuntimePlatform.WindowsPlayer || 
				Application.platform == RuntimePlatform.WindowsEditor ||
				Application.platform == RuntimePlatform.OSXPlayer ||
				Application.platform == RuntimePlatform.OSXEditor ||
				Application.platform == RuntimePlatform.OSXDashboardPlayer)
				{
					GUI.skin = mySkin;
					if (GUI.Button (Rect (40, 280, 380, 30), "continue")) {
						continued = true;
					}
					GUI.skin = mySkin;
					if (GUI.Button (Rect (40, 320, 380, 30), "restart")) {
						Application.LoadLevel("level01");
					}
					GUI.skin = mySkin;
					if (GUI.Button (Rect (40, 360, 380, 30), "main menu")) {
						Application.LoadLevel("level00");
					}
				}
			}
			
		GUI.EndGroup();
	}
}


function DriverTimer () {
	if(displayLabel && !frameSet) {
		frameSet = true;
		if (!smth) {
			smth = true;
			if (CollisionItem.WinOrLostGlobal == "lost") yield WaitForSeconds(2);
			if (CollisionItem.WinOrLostGlobal == "win") yield WaitForSeconds(2);
			FadedOut = true;
		}
		yield WaitForSeconds(1);
		frameSet = false;
		frame++;
		if (frame == 4) {
			frame = 1;
		}
	}
}