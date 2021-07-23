---
emoji: 🎮 
title: Unity facebook or SNS Share Feature
date: '2021-07-23 14:40:00'
author: Derrick
tags: Unity
categories: Unity
---

Hi There!

Today I am going to introduce how to share text or image to each social services while we developing our services with Unity

There is very useful plugin ,UnityNativeShare you can download the plugin from their Github release page or can download from unity asset store for free

When I tried to test the asset, I downloaded via asset store and imported asset files

Look their sample code , It’s very easy and simple :)

>> 
	private IEnumerator TakeScreenshotAndShare()
	{
		yield return new WaitForEndOfFrame();
		Texture2D ss = new Texture2D( Screen.width, Screen.height, TextureFormat.RGB24, false );
		ss.ReadPixels( new Rect( 0, 0, Screen.width, Screen.height ), 0, 0 );
		ss.Apply();
		string filePath = Path.Combine( Application.temporaryCachePath, "shared img.png" );
		File.WriteAllBytes( filePath, ss.EncodeToPNG() );
		// To avoid memory leaks
		Destroy( ss );
		new NativeShare().AddFile( filePath )
			.SetSubject( "Subject goes here" ).SetText( "Hello world!" ).SetUrl( "https://github.com/yasirkula/UnityNativeShare" )
			.SetCallback( ( result, shareTarget ) => Debug.Log( "Share result: " + result + ", selected app: " + shareTarget ) )
			.Share();
		// Share on WhatsApp only, if installed (Android only)
		//if( NativeShare.TargetExists( "com.whatsapp" ) )
		//	new NativeShare().AddFile( filePath ).AddTarget( "com.whatsapp" ).Share();
	}
>>

The sample code is very easy, When you press the sample button, a dialog appears to share the screen image to various social services after taking a screenshot

![](https://github.com/superbderrick/UnitySocialShare/blob/main/share.gif?raw=true)

For detailed implementation details, please refer to 
GitHub below

https://github.com/superbderrick/UnitySocialShare



 
