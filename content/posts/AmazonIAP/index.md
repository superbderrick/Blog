---
emoji: 🎮 
title: Solved "PurchaseResponse.RequestStatus.FAILED", While amazon IAP Live test environment
date: '2021-07-28 14:40:00'
author: Derrick
tags: Unity Android AmazonIAP
categories: Unity
---



현재 근무하고 있는 회사에서 아마존 결제 라이브러리를 활용해 유니티플러그인을 개발 중입니다


아마존에서 제공하는 IAP 결제 라이브러리를 내부에서 개발한 라이브러리와 결합해서 AAR Format의 통합 라이브러리를 만들었습니다


실제 개발을 완료하고 Test하는 과정에서 기이한 현상이있어 기록으로 남깁니다

아마존 IAP Test 환경 같은 경우에는 크게 3가지 단계로 Test할수있습니다




1. Sandbox test 
2. Live app testing(LAT) 
3. 배포

https://developer.amazon.com/docs/in-app-purchasing/iap-testing-overview.html


Sendbox Test 환경에서는 문제없이 잘 작동했는데요, 같은 버전으로 2(LAT) Test 환경에서 결제를 시도하니 계속하여 "PurchaseResponse.RequestStatus.FAILED" Error 


case가 발생하면서 결제가 정상적으로 작동하지 않았어요

https://developer.amazon.com/docs/in-app-purchasing/iap-implement-iap.html#responseobjects


문서를 확인해보니 다음과 같은 제약사항이 있었고


	Note: R8 is now compatible with IAP, so you no longer need to disable R8. IAP is compatible with Android Gradle plugin version 3.6.0 or higher. Follow the steps below to use IAP with R8.
- https://developer.amazon.com/docs/in-app-purchasing/iap-obfuscate-the-code.html



 실제 IAP 라이브러리를 포함해 통합 라이브러리를 만드는 안드로이드 프로젝트에서 pro guard를 및 R8 옵션을 disable 하니 정상적으로 동작하였어요! 


아래는 안드로이드 스튜디오에서  R8 및 proguard를 disable한 부분입니다.





AAR Libary project build gradle 

```
buildTypes {
			release {
				**minifyEnabled false**
				proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
			}
		}

```

gradle.propertys

```
	android.enableR8=false
```

Currently I am making a billing library for apps to release on Amazon App store as AAR Format with integrated with Amazon IAP library in company.
After finished integrated work , while I was testing my library , I found weird situation and share how can I fixed the problem

Actually there are three ways to test an Amazon IAP Test

1. Sandbox test
2. Live app testing(LAT)
3. Release
https://developer.amazon.com/docs/in-app-purchasing/iap-testing-overview.html

Actually everything is fine with first Sandbox Test environment but
during the second stage , every-times tried to purchase it failed with below log


“PurchaseResponse.RequestStatus.FAILED”

https://developer.amazon.com/docs/in-app-purchasing/iap-implement-iap.html#responseobjects

After checked the official document there were a requirement


Note: R8 is now compatible with IAP, so you no longer need to disable R8. IAP is compatible with Android Gradle plugin version 3.6.0 or higher. Follow the steps below to use IAP with R8.

https://developer.amazon.com/docs/in-app-purchasing/iap-obfuscate-the-code.html



In the Android studio that makes the integrated library including the actual IAP Library, I disabled proguard and R8 option Finally !! It worked well :)



Below is the part where R8 and proguard are disabled in Android Studio.

AAR Library project build gradle

	buildTypes {
	release {
	**minifyEnabled false**
	proguardFiles getDefaultProguardFile(‘proguard-android.txt’), ‘proguard-rules.pro’
	}
	}

gradle.propertys

	android.enableR8=false