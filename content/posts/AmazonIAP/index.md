---
emoji: ๐ฎ 
title: Solved "PurchaseResponse.RequestStatus.FAILED", While amazon IAP Live test environment
date: '2021-07-28 14:40:00'
author: Derrick
tags: Unity Android AmazonIAP
categories: Unity
---



ํ์ฌ ๊ทผ๋ฌดํ๊ณ  ์๋ ํ์ฌ์์ ์๋ง์กด ๊ฒฐ์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํ์ฉํด ์ ๋ํฐํ๋ฌ๊ทธ์ธ์ ๊ฐ๋ฐ ์ค์๋๋ค


์๋ง์กด์์ ์ ๊ณตํ๋ IAP ๊ฒฐ์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ด๋ถ์์ ๊ฐ๋ฐํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๊ฒฐํฉํด์ AAR Format์ ํตํฉ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ง๋ค์์ต๋๋ค


์ค์  ๊ฐ๋ฐ์ ์๋ฃํ๊ณ  Testํ๋ ๊ณผ์ ์์ ๊ธฐ์ดํ ํ์์ด์์ด ๊ธฐ๋ก์ผ๋ก ๋จ๊น๋๋ค

์๋ง์กด IAP Test ํ๊ฒฝ ๊ฐ์ ๊ฒฝ์ฐ์๋ ํฌ๊ฒ 3๊ฐ์ง ๋จ๊ณ๋ก Testํ ์์์ต๋๋ค




1. Sandbox test 
2. Live app testing(LAT) 
3. ๋ฐฐํฌ

https://developer.amazon.com/docs/in-app-purchasing/iap-testing-overview.html


Sendbox Test ํ๊ฒฝ์์๋ ๋ฌธ์ ์์ด ์ ์๋ํ๋๋ฐ์, ๊ฐ์ ๋ฒ์ ์ผ๋ก 2(LAT) Test ํ๊ฒฝ์์ ๊ฒฐ์ ๋ฅผ ์๋ํ๋ ๊ณ์ํ์ฌ "PurchaseResponse.RequestStatus.FAILED" Error 


case๊ฐ ๋ฐ์ํ๋ฉด์ ๊ฒฐ์ ๊ฐ ์ ์์ ์ผ๋ก ์๋ํ์ง ์์์ด์

https://developer.amazon.com/docs/in-app-purchasing/iap-implement-iap.html#responseobjects


๋ฌธ์๋ฅผ ํ์ธํด๋ณด๋ ๋ค์๊ณผ ๊ฐ์ ์ ์ฝ์ฌํญ์ด ์์๊ณ 


	Note: R8 is now compatible with IAP, so you no longer need to disable R8. IAP is compatible with Android Gradle plugin version 3.6.0 or higher. Follow the steps below to use IAP with R8.
- https://developer.amazon.com/docs/in-app-purchasing/iap-obfuscate-the-code.html



 ์ค์  IAP ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํฌํจํด ํตํฉ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ง๋๋ ์๋๋ก์ด๋ ํ๋ก์ ํธ์์ pro guard๋ฅผ ๋ฐ R8 ์ต์์ disable ํ๋ ์ ์์ ์ผ๋ก ๋์ํ์์ด์! 


์๋๋ ์๋๋ก์ด๋ ์คํ๋์ค์์  R8 ๋ฐ proguard๋ฅผ disableํ ๋ถ๋ถ์๋๋ค.





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


โPurchaseResponse.RequestStatus.FAILEDโ

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
	proguardFiles getDefaultProguardFile(โproguard-android.txtโ), โproguard-rules.proโ
	}
	}

gradle.propertys

	android.enableR8=false