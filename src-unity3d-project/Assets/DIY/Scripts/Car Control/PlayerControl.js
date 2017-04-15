// ----------- CAR TUTORIAL SAMPLE PROJECT, ? Andrew Gotow 2009 -----------------

// Here's the basic car script described in my tutorial at www.gotow.net/andrew/blog.
// A Complete explaination of how this script works can be found at the link above, along
// with detailed instructions on how to write one of your own, and tips on what values to 
// assign to the script variables for it to work well for your application.

// Contact me at Maxwelldoggums@Gmail.com for more information.




// These variables allow the script to power the wheels of the car.
var FrontLeftWheel : WheelCollider;
var FrontRightWheel : WheelCollider;

// These variables are for the gears, the array is the list of ratios. The script
// uses the defined gear ratios to determine how much torque to apply to the wheels.
var GearRatio : float[];
var CurrentGear : int = 0;

// These variables are just for applying torque to the wheels and shifting gears.
// using the defined Max and Min Engine RPM, the script can determine what gear the
// car needs to be in.
var EngineTorque : float = 600.0;
var MaxEngineRPM : float = 3000.0;
var MinEngineRPM : float = 1000.0;
static var EngineRPM : float = 0.0;

var NotBoringExplosion : Transform;//when turning from boring into cool
static var boring = true;
var explosionCounter = 1;
var LightBoring = Color(0, 0, 0, 0.5);
var LightDrunk = Color(60/255, 71/255, 167/255, 1);
private var h : float = 0.65;// 234/359
private var s : float = 64*0.01;
private var b : float = 65*0.01;
private var NotBoringStartTime : float = 0.0;
private var timeLerp : float = 0.0;
private var boringColorIned = false;
var velocityLocal : Vector3;
static var variablesSet = false;



function Start () {
	// I usually alter the center of mass to make the car more stable. I'ts less likely to flip this way.
	rigidbody.centerOfMass.y = -0.5;
	boring = true;
	LightDrunk = HSBColor.ToColor(HSBColor(h,s,b));
	RenderSettings.ambientLight = LightBoring;
	transform.Find("CarModel").gameObject.SetActiveRecursively(false);//hide "not boring" model
	EngineTorque = 450.0; //slowing down the car for "boring life" effect
	GameObject.Find("CameraInside").camera.enabled = false;
}

function Update () {
	//when player collected at least 1 bottle, he turns into speed car
	if (CollisionItem.boringCarDrinked && boring==true && !CollisionItem.gameEnded) {
		boring = false;
		NotBoringStartTime = Time.time;
		explosionCounter = 0;
		transform.gameObject.Find("SoundNotBoringExplosion").audio.Play();
		EngineTorque = 600.0;
		transform.Find("CarModelBoring").gameObject.SetActiveRecursively(false);
		transform.Find("CarModel").gameObject.SetActiveRecursively(true);
	} else if (boring==true && CollisionItem.gameEnded) {// lost, because turned into boring again
		if (!variablesSet) {
			NotBoringStartTime = Time.time;
			explosionCounter = 0;
			transform.gameObject.Find("SoundNotBoringExplosion").audio.Play();
			variablesSet = true;
		}
		EngineTorque = 450.0;
		transform.Find("CarModelBoring").gameObject.SetActiveRecursively(true);
		transform.Find("CarModel").gameObject.SetActiveRecursively(false);
	}
	if ( !boring && !CollisionItem.gameEnded ) {//just turned from boring to speed car
		if(Time.time % 2 && explosionCounter < 21) {//every 2 seconds it will do it
			Instantiate(NotBoringExplosion, transform.position, Quaternion.identity);
			explosionCounter++;
		}
		if(timeLerp < 2) {//perfomance optimization
			timeLerp = (Time.time-NotBoringStartTime)*0.5;
		}
		if(timeLerp < 1) {
			LightDrunk = HSBColor.ToColor(HSBColor(h,s,b));
			RenderSettings.ambientLight = Color.Lerp(LightBoring,LightDrunk,timeLerp);
		} else if (timeLerp >= 1) {
			boringColorIned = true;
		}
	} else if (variablesSet && CollisionItem.gameEnded) {// lost the game animation
		if(Time.time % 2 && explosionCounter < 21) {//every 2 seconds it will do it
			Instantiate(NotBoringExplosion, transform.position, Quaternion.identity);
			explosionCounter++;
		}
		boringColorIned = false;// means don't change HSB of ambientLight anymore
		timeLerp = (Time.time-NotBoringStartTime)*0.1;
		LightDrunk = RenderSettings.ambientLight;
		RenderSettings.ambientLight = Color.Lerp(LightDrunk,LightBoring,timeLerp);
	}
	if (boringColorIned){
		if(h < 1) {
			h += 0.05 * Time.deltaTime;
		}
		if (h >= 1) {
			h = 0.0;
		}
		RenderSettings.ambientLight = HSBColor.ToColor(HSBColor(h,s,b));
	}
	
	
	// This is to limith the maximum speed of the car, adjusting the drag probably isn't the best way of doing it,
	// but it's easy, and it doesn't interfere with the physics processing.
	//rigidbody.drag = rigidbody.velocity.magnitude / 250;
	rigidbody.drag = 0.18;
	
	// Compute the engine RPM based on the average RPM of the two wheels, then call the shift gear function
	EngineRPM = (FrontLeftWheel.rpm + FrontRightWheel.rpm)/2 * GearRatio[CurrentGear];
	ShiftGears();

	// set the audio pitch to the percentage of RPM to the maximum RPM plus one, this makes the sound play
	// up to twice it's pitch, where it will suddenly drop when it switches gears.
	audio.pitch = Mathf.Abs(EngineRPM / MaxEngineRPM) + 1.0 ;
	// this line is just to ensure that the pitch does not reach a value higher than is desired.
	if ( audio.pitch > 2.0 ) {
		audio.pitch = 2.0;
	}
	if (!CollisionItem.gameEnded) {
		// finally, apply the values to the wheels.	The torque applied is divided by the current gear, and
		// multiplied by the user input variable.
		velocityLocal = transform.InverseTransformDirection(rigidbody.velocity);
		if (Input.GetAxis("Vertical") >= 0 && velocityLocal.z >= -1) {//just go forward
			FrontLeftWheel.brakeTorque = 0;
			FrontRightWheel.brakeTorque = 0;
			FrontLeftWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * Input.GetAxis("Vertical");
			FrontRightWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * Input.GetAxis("Vertical");
		} else if(Input.GetAxis("Vertical") > 0 && velocityLocal.z < -1) {//if car moves backwards & we press forward, then hit breaks
			FrontLeftWheel.brakeTorque = 1000;
			FrontRightWheel.brakeTorque = 1000;
		} else if(Input.GetAxis("Vertical") < 0 && velocityLocal.z > 1) {// zero velocity doesn't work great here. If we move forward, but press backwards, hit breaks
			FrontLeftWheel.brakeTorque = 1000;
			FrontRightWheel.brakeTorque = 1000;
		} else if(Input.GetAxis("Vertical") < 0 && velocityLocal.z < 1) {//if we move backwards, then no need for breaks
			FrontLeftWheel.brakeTorque = 0;
			FrontRightWheel.brakeTorque = 0;
			FrontLeftWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * Input.GetAxis("Vertical");
			FrontRightWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * Input.GetAxis("Vertical");
		} 
		
		// the steer angle is an arbitrary value multiplied by the user input.
		FrontLeftWheel.steerAngle = 10 * Input.GetAxis("Horizontal");
		FrontRightWheel.steerAngle = 10 * Input.GetAxis("Horizontal");
		
		if (Input.GetButtonDown ("Reset")) {
			transform.position.y += 3;
			transform.rotation.x = 0;
			transform.rotation.z = 0;
		}
	} else if (CollisionItem.gameEnded) {
		FrontLeftWheel.brakeTorque = 500;
		FrontRightWheel.brakeTorque = 500;
	}
	if (Input.GetButtonDown ("Camera")) {
		if (GameObject.FindWithTag("MainCamera").camera.enabled == true) {
			GameObject.FindWithTag("MainCamera").camera.enabled = false;
			GameObject.FindWithTag("CameraInside").camera.enabled = true;
		} else {
			GameObject.FindWithTag("MainCamera").camera.enabled = true;
			GameObject.FindWithTag("CameraInside").camera.enabled = false;
		}
	}
}

function ShiftGears() {
	// this funciton shifts the gears of the vehcile, it loops through all the gears, checking which will make
	// the engine RPM fall within the desired range. The gear is then set to this "appropriate" value.
	if ( EngineRPM >= MaxEngineRPM ) {
		var AppropriateGear : int = CurrentGear;
		
		for ( var i = 0; i < GearRatio.length; i ++ ) {
			if ( FrontLeftWheel.rpm * GearRatio[i] < MaxEngineRPM ) {
				AppropriateGear = i;
				break;
			}
		}
		
		CurrentGear = AppropriateGear;
	}
	
	if ( EngineRPM <= MinEngineRPM ) {
		AppropriateGear = CurrentGear;
		
		for ( var j = GearRatio.length-1; j >= 0; j -- ) {
			if ( FrontLeftWheel.rpm * GearRatio[j] > MinEngineRPM ) {
				AppropriateGear = j;
				break;
			}
		}
		
		CurrentGear = AppropriateGear;
	}
}

function OnCollisionEnter(theObject : Collision) {
	if(rigidbody.velocity.magnitude > 2){
		if(!transform.gameObject.Find("SoundSmash").audio.isPlaying) {
			transform.gameObject.Find("SoundSmash").audio.Play();
		}
	}
}





