/*
This camera smoothes out rotation around the y-axis and height.
Horizontal Distance to the target is always fixed.

There are many different ways to smooth the rotation but doing it this way gives you a lot of control over how the camera behaves.

For every of those smoothed values we calculate the wanted value and the current value.
Then we smooth it using the Lerp function.
Then we apply the smoothed values to the transform's position.
*/

// The target we are following
var target : Transform;
// The distance in the x-z plane to the target
var distance = 3.0;
// the height we want the camera to be above the target
var height = 2.0;
// How much we 
var heightDamping = 2.0;
var rotationDamping = 3.0;

//bonus
var normalDistance = 0.0;
var normalHeight = 0.0;
var spiralDistance = 5.0;
var spiralHeight = 0.3;
private var mysteriousVelocity = 0.0;
var smoothTime = 1.0;

// Place the script in the Camera-Control group in the component menu
//@script AddComponentMenu("Camera-Control/Smooth Follow")


function Start () {
	normalDistance = distance;
	normalHeight = height;
}

function LateUpdate () {
	if (CollisionItem.spiralInside) {
		distance = Mathf.SmoothDamp(normalDistance, spiralDistance, mysteriousVelocity, smoothTime);
		height = Mathf.SmoothDamp(normalHeight, spiralHeight, mysteriousVelocity, smoothTime);
	} else if (CollisionItem.spiralExited) {
		distance = Mathf.SmoothDamp(spiralDistance, normalDistance, mysteriousVelocity, smoothTime);
		height = Mathf.SmoothDamp(spiralHeight, normalHeight, mysteriousVelocity, smoothTime);
	}
	//print (height);
	/*if (CollisionItem.spiralInside) {
		distance = Mathf.SmoothDamp(normalDistance, spiralDistance, mysteriousVelocity, smoothTime);
		height = Mathf.SmoothDamp(normalHeight, spiralHeight, mysteriousVelocity, smoothTime);
	} else if (CollisionItem.spiralExited) {
		distance = Mathf.SmoothDamp(spiralDistance, normalDistance, mysteriousVelocity, smoothTime);
		height = Mathf.SmoothDamp(spiralHeight, normalHeight, mysteriousVelocity, smoothTime);
	}
	if (CollisionItem.spiralInside) {
		distance = Mathf.Lerp(normalDistance, spiralDistance, heightDamping * Time.deltaTime);
		height = Mathf.Lerp(normalHeight, spiralHeight, heightDamping * Time.deltaTime);
	} else if (CollisionItem.spiralExited) {
		distance = Mathf.Lerp(spiralDistance, normalDistance, heightDamping * Time.deltaTime);
		height = Mathf.Lerp(spiralHeight, normalHeight, heightDamping * Time.deltaTime);
	}
	if (CollisionItem.spiralInside) {
		distance = spiralDistance;
		height = spiralHeight;
	} else if (CollisionItem.spiralExited) {
		distance = normalDistance;
		height = normalHeight;
	}*/
	
	// Early out if we don't have a target
	if (!target)
		return;
	
	// Calculate the current rotation angles
	wantedRotationAngle = target.eulerAngles.y;
	wantedHeight = target.position.y + height;
		
	currentRotationAngle = transform.eulerAngles.y;
	currentHeight = transform.position.y;
	
	// Damp the rotation around the y-axis
	currentRotationAngle = Mathf.LerpAngle (currentRotationAngle, wantedRotationAngle, rotationDamping * Time.deltaTime);

	// Damp the height
	currentHeight = Mathf.Lerp (currentHeight, wantedHeight, heightDamping * Time.deltaTime);

	// Convert the angle into a rotation
	currentRotation = Quaternion.Euler (0, currentRotationAngle, 0);
	
	// Set the position of the camera on the x-z plane to:
	// distance meters behind the target
	transform.position = target.position;
	transform.position -= currentRotation * Vector3.forward * distance;

	// Set the height of the camera
	transform.position.y = currentHeight;
	
	// Always look at the target
	transform.LookAt (target);
}