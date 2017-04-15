var mySkin : GUISkin;

function OnGUI()
{
	if (GUITipTrigger.triggerTest03 && !GUITipTrigger.disableTip03) {
		GUI.skin = mySkin;
		GUI.Label(Rect(0,0,Screen.width,Screen.height),"SMASH\nthe\nDOOR");
	}

}