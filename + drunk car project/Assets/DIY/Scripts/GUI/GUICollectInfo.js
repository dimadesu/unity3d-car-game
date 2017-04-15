var myStyle : GUIStyle;
var myStylePercent : GUIStyle;
static var show = false;
private var timer = 0.0;

function OnGUI()
{
	if (show) {
		GUI.depth = 90;
		if(CollisionItem.progressValue > 0) {
			GUI.Label(Rect(0,0,Screen.width,Screen.height),"+"+CollisionItem.progressValue,myStyle);
		} else if(CollisionItem.progressValue < 0) {
			GUI.Label(Rect(0,0,Screen.width,Screen.height),""+CollisionItem.progressValue,myStyle);
		}
		GUI.Label(Rect(0,0,Screen.width,Screen.height),"%",myStylePercent);
	}
}

function Update() {
	if (show) {
		timer += Time.deltaTime;
	}
	if (timer >= 2) {
		show = false;
		timer = 0.0;
	}
}