---
emoji: π±
title: how to support latest amazon tablet devices like Fire HD 10 series 
date: '2021-08-05 14:40:00'
author: Derrick
tags: Unity Android AmazonAppstore
categories: AmazonAppstore 
---
 

νμ¬ κ·Όλ¬΄ μ€μΈ νμ¬μμ κ°λ°νκ³  μλ μ±μ μλ§μ‘΄ μ±μ€ν μ΄μ μΆμνλ κ³Όμ μ μμ΅λλ€

κ°λ°μ μλ£νκ³  Amazon Development consoleμ μ΅μ’μ μΈ Android APK νμΌμ μλ‘λνμμ΅λλ€

λ§μΌμ μ±μ μΆμνκΈ°μ κ°λ°ν κ²μμ΄λ μ±μ μ§μν  μ μλ Device Specμ μ ν  μ μμ΅λλ€

μ¬μ§κ³Ό κ°μ΄ Phone, Tablet λ± λλ°μ΄μ€λ³λ‘ μ ν  μ μλλ°, μ΄μνκ²λ μλ§μ‘΄ μ΅μ  κΈ°κΈ°(Fire HD10) series λ€μ X νμκ° λκ±°λ -νμκ° λλ κ±°μμ΅λλ€


I am working on new release app to amazon app store in company and after finished all features, I uploaded my apk file to amazon development console
In general, you can set the types of devices that an app can run on the Amazon App Store, As shown in the picture, you can set by device such as Phone, Tablet, etc

Strangely, Amazon's latest device (Fire HD10) series was marked with an X or aβ-βmark


![](2.png)




μμΈμ μμλ³΄λ, μΌμ°¨μ μΌλ‘ μλ§μ‘΄ νλΈλ¦Ώλ€μ 32bit cpuνκ²½μ κΈ°κΈ°λ€μ΄ λλΆλΆμ΄κ³  μ΅μ μ κ°λ°λ κΈ°κΈ°λ€μ 64bit cpuνκ²½μ μ§μνκ³ , μ΄μ  Apkμ ν¬ν¨λ  λΌμ΄λΈλ¬λ¦¬ κ΅¬μ±λ€λ μμͺ½ Cpu typeμ μλ§κ² κ΅¬μ±μ΄ λμ΄μΌ νμ΅λλ€

As I found out the cause, most of the Amazon tablets were devices with a 32-bit cpu environment, and the latest developed devices supported a 64-bit cpu environment. The library configuration to be included in the Apk also had to be configured appropriately for both CPU types
https://developer.amazon.com/docs/app-submission/understanding-submission.html

 
>>
	Best Practices for 64-bit APK submission
	Some Amazon devices (11th generation and above tablets) now accept hybrid 32 bit/64-bit APK submissions. This means to reach all Amazon devices, you should develop with 64-bit in mind. These two library folders must have the correct files:

	32-bit folder: lib/armeabi-v7a/
	64-bit folder: lib/arm64-v8a/
	For every library in one folder, there must be a corresponding library in the other folder. If you have a 32-bit library in the 32-bit folder, but do not have that same library in 64-bit format in your 64-bit folder, your application may crash or freeze on a device, or have In-app Purchasing (IAP) failures. 


 >>

 https://developer.amazon.com/docs/app-submission/understanding-submission.html


ν,,, μλ§μ‘΄μμ μ μν κ°μ΄λμΈλ° κ·ΈλΌμλ λΆκ΅¬νκ³  κ³μμ μΌλ‘ -νμκ° λ¬μ΅λλ€

Even though I followed the documentation, but it's still showing -

 

κ΅¬κΈλ§ λ° μλ§μ‘΄ κ°λ°μ ν¬λΌμ κΈμ μ°Ύμλ³΄λ λ€μκ³Ό κ°μ μ λ³΄λ₯Ό μ»μ μ μμμ΄μ

μ΅μ μ λ§λ  κΈ°κΈ°λ€μ 32/64 λͺ¨λ  cpu bitλ₯Ό μ§μνλ κΈ°κΈ°μ¬μ 32bit cpu λΌμ΄λΈλ¬ κ΅¬μ±μΌλ‘ λ§μΆλ©΄ ν΄λΉ κΈ°κΈ°λ€λ μ§μ κ°λ₯νλ€κ³ !!!

I googled and searched articles on Amazon developer forums and found the following information: The latest devices are devices that support all 32/64 cpu bits.
 

https://amazon.developer.forums.answerhub.com/questions/239488/in-app-purchasing-iap-v20-plugin-for-unity-arm64-v.html


[](3.png)
 

64bit νμμ λΌμ΄λΈλ¬λ¦¬λ€μ μ§μ° κ³ λλ μ μμ μΌλ‘ λμμ΄μ! λ¬΄ μΌνΈ!
When I configure the libraries only in 32-bit, it works normally!
 
![](1.png)






