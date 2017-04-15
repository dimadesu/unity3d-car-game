static var triggerTest01 = false;
static var triggerTest02 = false;
static var triggerTest03 = false;
static var triggerTest04 = false;
static var disableTip02 = false;
static var disableTip03 = false;
static var disableTip04 = false;

function Start() {
	disableTip02 = false;
	disableTip03 = false;
	disableTip04 = false;
	triggerTest01 = false;
	triggerTest02 = false;
	triggerTest03 = false;
	triggerTest04 = false;
}

function OnTriggerEnter(collisionInfo : Collider){
	if(collisionInfo.gameObject.name == "GUITipTrigger01") {
		triggerTest01 = true;
	}
	if(collisionInfo.gameObject.name == "GUITipTrigger02") {
		triggerTest02 = true;
	}
	if(collisionInfo.gameObject.name == "GUITipTrigger03") {
		triggerTest03 = true;
	}
	if(collisionInfo.gameObject.name == "GUITipTrigger04") {
		triggerTest04 = true;
	}
}
function OnTriggerExit(collisionInfo : Collider){
	if(collisionInfo.gameObject.name == "GUITipTrigger01") {
		triggerTest01 = false;
	}
	if(collisionInfo.gameObject.name == "GUITipTrigger02") {
		triggerTest02 = false;
		disableTip02 = true;
	}
	if(collisionInfo.gameObject.name == "GUITipTrigger03") {
		triggerTest03 = false;
		disableTip03 = true;
	}
	if(collisionInfo.gameObject.name == "GUITipTrigger04") {
		triggerTest04 = false;
		disableTip04 = true;
	}
}