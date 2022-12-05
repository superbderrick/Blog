---
emoji: 🎮 
title: Firebase analytics without collecting IDFA information Using Unity 
date: '2022-12-05 12:20:00'
author: Derrick
tags: Unity Firebase Firebaseanalytics
categories: Unity 
---

In iOS 14.5, Apple requires developers to track users via the App Tracking Transparency framework or obtain permission to access a device's Advertising Identifier (IDFA)

See Apple's User Privacy and Data Usage and Apple's App Tracking Transparency documents for more information!
- https://developer.apple.com/app-store/user-privacy-and-data-use/

Among the Firebase services, the Analytics service may be affected by the above policies

https://firebase.google.com/docs/ios/supporting-ios-14#affected-firebase-integrations



Firebase iOS Platform uses cocoapods to provide services

Unty usually runs pods in the Xcode project created after building from the onPostbuild process API.

In this case, you can define and use Firebase/AnalyticsWithouAdIdSupport instead of FirebaseAnalytics.

It can be modified in Assets/Firebase/AnalyticsDependencies.xml file!

	<dependencies>
	<iosPods>
	<iosPod name="Firebase/AnalyticsWithoutAdIdSupport" minTargetSdk="8.0">
	</iosPod>
	</iosPods>
	<androidPackages>
	<androidPackage spec="com.google.firebase:firebase-analytics:21.2.0">
	</androidPackage>
	<androidPackage spec="com.google.firebase:firebase-analytics-unity:10.1.1">
	<repositories>
	<repository>Assets/Firebase/m2repository</repository>
	</repositories>
	</androidPackage>
	</androidPackages>
	</dependencies>


