---
emoji: 📞 
title: Android 12 Google Advertising ID ,ADID, Family App Permission Handling
date: '2022-09-01 14:40:00'
author: Derrick
tags:  Android
categories: Android
---

When Google announced the Android 12 version, it announced a change in the content that "in order to collect Google advertising identifiers, you need to add a separate permission"

In Android 12, a separate permission has been added to obtain a Google Advertising ID. Definery customers must add the following permissions

You cannot obtain a Google Advertising ID from an app without permission


  <manifest>
  ...
      <uses-permission android:name="com.google.android.gms.permission.AD_ID" /> 
  ...
  </manifest>
 





However, Family apps, that is, as per Google policy, apps intended for children must not send advertising IDs

Children's apps targeting Android 13 (API 33) or higher should add a revocation declaration to their manifest to prevent permissions being merged into the app



  <uses-permission android:name="com.google.android.gms.permission.AD_ID"
  tools:node="remove"/>
   

Reference 
https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info#public-string-getid
