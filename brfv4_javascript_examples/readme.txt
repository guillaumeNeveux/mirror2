Beyond Reality Face SDK v4.0RC1 - Readme

			- ready to try! - 

Read the EULA (eula.txt) carefully before using the SDK. Once you
decide to use BRF commercially, you will get a seperate license 
agreement, that you must agree to.

You can try the BRFv4 SDK free of charge to evaluate if
it fits the needs of your project.

Once you decided to use BRFv4 in your project, please contact
us for a commercial license:

http://www.tastenkunst.com/#/contact

			- visit us online - 

+ Facebook:			– https://www.facebook.com/BeyondRealityFace
+ Twitter:			– https://twitter.com/tastenkunst
+ website:			– https://www.beyond-reality-face.com

			- technical overview -

The Beyond Reality Face SDK is a face tracking library 
that is available for developers on the following platforms:

+ HTML5/JS			– Chrome/Firefox/Edge/Opera/Safari 11
+ Adobe AIR			– AS3 on Windows/macOS/iOS/Android
+ macOS (C++)		- C++ examples using OpenCV for camera handling
+ Windows (C++)		- C++ examples using OpenCV for camera handling
+ iOS (C++)			- ObjectiveC/C++
+ Android (Java)	- Android Java

And BRF comes with the following components:

+ Face detection	- Finds faces (rectangles) in an image/camera stream
+ Face tracking		- Finds 68 facial landmarks/features
+ Point tracking	- Tracks points in a webcam stream

			- getting started - 

There is a demo here:
https://tastenkunst.s3.amazonaws.com/demos/brfv4/tp/index.html

This page also include all available beta packages for download.

Documentation and tutorials are still in the making. Those will be more
complete with the release of v4.0.0 (we are aiming for 20th on June, 2017)

...

			- release notes -
			
v4.0RC1 - 09.06.2017:

+ Added: Multi face tracking. It is now possible to track more than one face.
+ Improved: Accuracy. The newly implemented algorithm is more accurate in tracking facial features.
+ Improved: Platform support. We added native Android, macOS, Windows.

			- Licenses -

Used Haar Cascade: haarcascade_frontalface_default.xml
		
<!--
    Stump-based 24x24 discrete(?) adaboost frontal face detector.
    Created by Rainer Lienhart.

////////////////////////////////////////////////////////////////////////////////////////

  IMPORTANT: READ BEFORE DOWNLOADING, COPYING, INSTALLING OR USING.

  By downloading, copying, installing or using the software you agree to this license.
  If you do not agree to this license, do not download, install,
  copy or use the software.


                        Intel License Agreement
                For Open Source Computer Vision Library

 Copyright (C) 2000, Intel Corporation, all rights reserved.
 Third party copyrights are property of their respective owners.

 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:

   * Redistribution's of source code must retain the above copyright notice,
     this list of conditions and the following disclaimer.

   * Redistribution's in binary form must reproduce the above copyright notice,
     this list of conditions and the following disclaimer in the documentation
     and/or other materials provided with the distribution.

   * The name of Intel Corporation may not be used to endorse or promote products
     derived from this software without specific prior written permission.

 This software is provided by the copyright holders and contributors "as is" and
 any express or implied warranties, including, but not limited to, the implied
 warranties of merchantability and fitness for a particular purpose are disclaimed.
 In no event shall the Intel Corporation or contributors be liable for any direct,
 indirect, incidental, special, exemplary, or consequential damages
 (including, but not limited to, procurement of substitute goods or services;
 loss of use, data, or profits; or business interruption) however caused
 and on any theory of liability, whether in contract, strict liability,
 or tort (including negligence or otherwise) arising in any way out of
 the use of this software, even if advised of the possibility of such damage.
-->
