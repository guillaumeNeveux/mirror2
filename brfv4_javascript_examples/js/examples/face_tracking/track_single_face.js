(function exampleCode() {
	"use strict";

	var guillaume = "0.028599999845027924,0.32350000739097595,0.031700000166893005,0.44850000739097595,0.045099999755620956,0.5730000138282776,0.07119999825954437,0.6948000192642212,0.12020000070333481,0.8077999949455261,0.19509999454021454,0.9057000279426575,0.2867000102996826,0.9872000217437744,0.3873000144958496,1.05239999294281,0.5008000135421753,1.0716999769210815,0.6141999959945679,1.05239999294281,0.714900016784668,0.9872000217437744,0.8065000176429749,0.9057000279426575,0.8813999891281128,0.8077999949455261,0.9302999973297119,0.6948000192642212,0.9564999938011169,0.5730000138282776,0.9697999954223633,0.44850000739097595,0.9728999733924866,0.32350000739097595,0.11779999732971191,0.23270000517368317,0.1761000007390976,0.17890000343322754,0.25949999690055847,0.1624000072479248,0.3458000123500824,0.1745000034570694,0.42640000581741333,0.2079000025987625,0.5752000212669373,0.2079000025987625,0.6557000279426575,0.1745000034570694,0.7421000003814697,0.1624000072479248,0.8253999948501587,0.17890000343322754,0.8837000131607056,0.23270000517368317,0.5008000135421753,0.3061999976634979,0.5008000135421753,0.3862000107765198,0.5008000135421753,0.46549999713897705,0.5008000135421753,0.5472999811172485,0.4041999876499176,0.6035000085830688,0.4505999982357025,0.6202999949455261,0.5008000135421753,0.6345000267028809,0.5509999990463257,0.6202999949455261,0.5972999930381775,0.6035000085830688,0.2134000062942505,0.3163999915122986,0.2648000121116638,0.287200003862381,0.32600000500679016,0.28790000081062317,0.38029998540878296,0.32839998602867126,0.32260000705718994,0.3384000062942505,0.2614000141620636,0.3377000093460083,0.6212000250816345,0.32839998602867126,0.675599992275238,0.28790000081062317,0.7368000149726868,0.287200003862381,0.788100004196167,0.3163999915122986,0.7401999831199646,0.3377000093460083,0.6790000200271606,0.3384000062942505,0.3172999918460846,0.7526000142097473,0.3846000134944916,0.7254999876022339,0.45329999923706055,0.7110999822616577,0.5008000135421753,0.7229999899864197,0.54830002784729,0.7110999822616577,0.6169999837875366,0.7254999876022339,0.6843000054359436,0.7526000142097473,0.6189000010490417,0.8185999989509583,0.5523999929428101,0.8479999899864197,0.5008000135421753,0.8535000085830688,0.44920000433921814,0.8479999899864197,0.38260000944137573,0.8185999989509583,0.34529998898506165,0.7559999823570251,0.4526999890804291,0.7509999871253967,0.5008000135421753,0.7562000155448914,0.5489000082015991,0.7509999871253967,0.6563000082969666,0.7559999823570251,0.5497999787330627,0.7874000072479248,0.5008000135421753,0.7932999730110168,0.45179998874664307,0.7874000072479248";
	var guillaumeView = false;
	var valentinView = false;
	var happy = false;
	var isSmile = false;
	var p0				= new brfv4.Point();
	var p1				= new brfv4.Point();
	var calcDistance	= brfv4.BRFv4PointUtils.calcDistance;
	var setPoint		= brfv4.BRFv4PointUtils.setPoint;

	var example	= brfv4.example;	// references to example relevant objects.
	var dom		= example.dom;		// ... e.g. the DOM handling.

	example.initCurrentExample = function(brfManager, resolution) {

		// By default everything necessary for a single face tracking app
		// is set up for you in brfManager.init. There is actually no
		// need to configure much more for a jump start.

		brfManager.init(resolution, resolution, example.appId);
	};

	example.updateCurrentExample = function(brfManager, imageData, draw) {

		// In a webcam example imageData is the mirrored webcam video feed.
		// In an image example imageData is the (not mirrored) image content.

		brfManager.update(imageData);

		// Drawing the results:

		draw.clear();

		// Face detection results: a rough rectangle used to start the face tracking.

		draw.drawRects(brfManager.getAllDetectedFaces(),	false, 1.0, 0x00a1ff, 0.5);
		draw.drawRects(brfManager.getMergedDetectedFaces(),	false, 2.0, 0xffd200, 1.0);

		// Get all faces. The default setup only tracks one face.

		var faces = brfManager.getFaces();
		brfManager

		for(var i = 0; i < faces.length; i++) {

			var face = faces[i];

			if (face.state === brfv4.BRFState.FACE_DETECTION) {
				//console.log(face);
				//if (guillaumeView === false) {
				//	responsiveVoice.speak("Bonjour  guillaume", "French Female");
				//	guillaumeView = true;
				//} else if (valentinView === false) {
				//	responsiveVoice.speak("Bonjour  valentin", "French Female");
				//	valentinView = true;
				//}
			}

			if(		face.state == brfv4.BRFState.FACE_TRACKING_START ||
					face.state == brfv4.BRFState.FACE_TRACKING) {

				setPoint(face.vertices, 48, p0); // mouth corner left
				setPoint(face.vertices, 54, p1); // mouth corner right

				// Face tracking results: 68 facial feature points.
				var mouthWidth = calcDistance(p0, p1);

				setPoint(face.vertices, 39, p1); // left eye inner corner
				setPoint(face.vertices, 42, p0); // right eye outer corner

				var eyeDist = calcDistance(p0, p1);
				var smileFactor = mouthWidth / eyeDist;

				smileFactor -= 1.40; // 1.40 - neutral, 1.70 smiling

				if(smileFactor > 0.25) smileFactor = 0.25;
				if(smileFactor < 0.00) smileFactor = 0.00;

				smileFactor *= 4.0;

				if(smileFactor < 0.0) { smileFactor = 0.0; }
				if(smileFactor > 1.0) { smileFactor = 1.0; }


				if (smileFactor == 1 && isSmile === false) {
					isSmile = true;
					if (guillaumeView === false) {
						responsiveVoice.speak("Bonjour  guillaume", "French Female");
						guillaumeView = true;
					} else if (valentinView === false) {
						responsiveVoice.speak("Bonjour  valentin", "French Female");
						valentinView = true;
					} else if (happy === false) {
						responsiveVoice.speak("Je vois que vous êtes de bonne humeur aujourd'hui, que puis je faire pour vous", "French Female");
						happy = true;
					}
				} else  if (smileFactor === 0){
					isSmile = false;
				}

				draw.drawTriangles(	face.vertices, face.triangles, false, 1.0, 0x00a0ff, 0.4);
				draw.drawVertices(	face.vertices, 2.0, false, 0x00a0ff, 0.4);
			}
		}
	};

	dom.updateHeadline("BRFv4 - basic - face tracking - track single face\n" +
		"Detect and track one face and draw the 68 facial landmarks.");

	dom.updateCodeSnippet(exampleCode + "");

})();