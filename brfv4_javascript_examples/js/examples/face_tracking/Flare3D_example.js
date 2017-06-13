(function exampleCode() {
	"use strict";

	var example	= brfv4.example;
	var dom		= example.dom;
	var f3d		= example.drawing3d.f3d;

	var numFacesToTrack = 2;

	example.initCurrentExample = function(brfManager, resolution) {
		brfManager.init(resolution, resolution, example.appId);
		brfManager.setNumFacesToTrack(numFacesToTrack);
		loadModels();
	};

	example.updateCurrentExample = function(brfManager, imageData, draw) {

		brfManager.update(imageData);

		if(f3d) f3d.hideAll(); // Hide 3d models. Only show them on top of tracked faces.

		draw.clear();

		var faces = brfManager.getFaces();

		for(var i = 0; i < faces.length; i++) {

			var face = faces[i];

			if(face.state == brfv4.BRFState.FACE_TRACKING) {

				// Draw the 68 facial feature points as reference.

				draw.drawVertices(face.vertices, 2.0, false, 0x00a0ff, 0.4);

				// Set the 3D model according to the tracked results.

				if(f3d) f3d.update(i, face, true);
			}
		}

		if(f3d) { f3d.render(); }
	};

	function loadModels() {

		if(f3d) {

			// Remove all models and load new ones.

			f3d.removeAll();
			f3d.loadOcclusionHead("assets/brfv4_occlusion_head.f3d", numFacesToTrack);
			f3d.loadModel("assets/brfv4_flare3d_glasses.f3d", numFacesToTrack);
		}
	}

	dom.updateCodeSnippet(exampleCode + "");

	dom.updateHeadline("BRFv4 - advanced - face_tracking - ThreeJS example.\n" +
		"Tracks up to " + numFacesToTrack + " faces and puts glasses on them.");
})();