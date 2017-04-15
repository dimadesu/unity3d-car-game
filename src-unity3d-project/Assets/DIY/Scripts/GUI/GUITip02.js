var mySkin : GUISkin;

function OnGUI()
{
	if (GUITipTrigger.triggerTest02 && !GUITipTrigger.disableTip02) {
		GUI.skin = mySkin;
		GUI.Label(Rect(0,0,Screen.width,Screen.height),"BURN\nthe\nMONSTER");
	}

}