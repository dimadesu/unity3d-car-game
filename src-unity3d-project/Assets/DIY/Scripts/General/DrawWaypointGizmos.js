function OnDrawGizmos () {

	var waypoints = gameObject.GetComponentsInChildren( Transform );

	for ( var waypoint : Transform in waypoints ) {
		Gizmos.DrawCube( waypoint.position, Vector3.one );
	}

}