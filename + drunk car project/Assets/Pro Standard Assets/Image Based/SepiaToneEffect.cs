using UnityEngine;

[ExecuteInEditMode]
[AddComponentMenu("Image Effects/Sepia Tone")]
public class SepiaToneEffect : ImageEffectBase {

	// Called by camera to apply image effect
	void OnRenderImage (RenderTexture source, RenderTexture destination) {
		ImageEffects.BlitWithMaterial (material, source, destination);
	}
}
