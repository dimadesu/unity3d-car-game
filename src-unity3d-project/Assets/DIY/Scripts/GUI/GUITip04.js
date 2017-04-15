var mySkin : GUISkin;

function OnGUI()
{
	if (GUITipTrigger.triggerTest04 && !GUITipTrigger.disableTip04) {
		GUI.skin = mySkin;
		GUI.Label(Rect(0,0,Screen.width,Screen.height),"COLLECT ALL\nALCOHOL");
	}

}