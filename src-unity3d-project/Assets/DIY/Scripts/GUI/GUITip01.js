var mySkin : GUISkin;

function OnGUI()
{
	if (GUITipTrigger.triggerTest01) {
		GUI.skin = mySkin;
		GUI.Label(Rect(0,0,Screen.width,Screen.height),"WRONG\nWAY");
	}

}