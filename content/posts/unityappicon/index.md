---
emoji: 🎮 
title: How to set up for android icons using unity
date: '2022-11-08 15:20:00'
author: Derrick
tags: Unity
categories: Unity
---

Today I am going to share my ideas to set android app icons using Unity Edtior 

Look at the Unity Edtior setting window below


PlayerSettings -> Player -> Android Tab -> Icon

![](https://github.com/superbderrick/Blog/blob/docs/content/posts/unityappicon/error.png?raw=true)




you can see how to set your app icons




 


 There are three warys to set android app icons normally

 - Adaptive Icon
 - Round
 - Legacy

 Simply Adaptive icon is Adaptive launcher icon to show various formats from various devices and can support more than android 8.0 os,api level 26
 
 and round icon is can support circle format's icon from android 7.1 os
 
 Lastly legacy icon is for legacy way for how to set app icon in android


For deails you can see below links


- https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive?hl=ko 

- https://docs.unity3d.com/kr/2020.3/Manual/class-PlayerSettingsAndroid.html#Icon



Adaptive Icon configuration

Adaptive Icon has two layers foreground and background

Developer prepare two images for foreground and background

System makes icon after merge two layers and mixes and removes specific part of mask  

In order to support Adaptive Icon, there are good site to make icons automatic


 
Android Asset Studio - Launcher icon generator
https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=circle&effects=none&name=ic_launcher 

 




 

 if you visit the site , you can make app icons correctly and properly,

 after upload icon file as 1024 * 1024 size from your company desinger and the regulate your background and foreground and padding and etc values and download icons

 lastly select each icons at unity editor 




