var alcohol : Transform;
var coffee : Transform;
var monster : Transform;

function Awake()
{
	var instantiate1 : GameObject[];
	instantiate1 = GameObject.FindGameObjectsWithTag("Instantiate1");
	for (var instance : GameObject in instantiate1)
	{
		switch( Random.Range(1,4) )
		{
			case 1:
			var alcoholInst = Instantiate(alcohol, instance.transform.position + Vector3(0,1.5,0), instance.transform.rotation);
			alcoholInst.name = "Treasure";
			break;
			case 2:
			var coffeeInst = Instantiate(coffee, instance.transform.position + Vector3(0,1.2,0), instance.transform.rotation);
			coffeeInst.name = "Coffee";
			break;
			case 3:
			//just empty space
			break;
		}
	}
	var instantiate2 : GameObject[];
	instantiate2 = GameObject.FindGameObjectsWithTag("Instantiate2");
	for (var instance : GameObject in instantiate2)
	{
		switch( Random.Range(1,5) )
		{
			case 1:
			var alcoholInst2 = Instantiate(alcohol, instance.transform.position + Vector3(0,1.5,0), instance.transform.rotation);
			alcoholInst2.name = "Treasure";
			break;
			case 2:
			var coffeeInst2 = Instantiate(coffee, instance.transform.position + Vector3(0,1.2,0), instance.transform.rotation);
			coffeeInst2.name = "Coffee";
			break;
			case 3:
			//just empty space
			break;
			case 4:
			Instantiate(monster, instance.transform.position + Vector3(0,1.5,0), instance.transform.rotation);
			break;
		}
	}
}
