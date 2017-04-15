var textures : Texture[];
private var tempArray : Material[]; 

function Start() {
	var monsters = GameObject.FindGameObjectsWithTag("TargetMonster");
	for (var monster : GameObject in monsters) {
		var randomTexture = textures[Random.Range(0, textures.Length)];
		if(monster.renderer.materials.length == 3) {
			var tempArray = monster.renderer.materials;
			tempArray[1].mainTexture = randomTexture;
			tempArray[2].mainTexture = randomTexture;
			monster.renderer.materials = tempArray;
		} else {
			monster.renderer.material.mainTexture = randomTexture;
		}
		
	}
}