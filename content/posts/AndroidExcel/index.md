---
emoji: 🎮 
title: How to make an excel file using POI Library
date: '2022-02-14 15:20:00'
author: Derrick
tags: Android
categories: Android
---


On the weekend, I am making the Toy Project app, a visit log app for corona epidemiologic investigations

Got a new feature to export log data to excel file format, So I found a way to create excel file in android app

The poi library created by the Apache Foundation makes it easy to create office types files


Ref:  http://poi.apache.org/download.html 

 
 
 you can use libs after define below app/ build gradle file

	implementation group: 'org.apache.poi', name: 'poi-ooxml', version: '3.17'
	implementation group: 'org.apache.xmlbeans', name: 'xmlbeans', version: '3.1.0'
	implementation 'javax.xml.stream:stax-api:1.0'
	implementation 'com.fasterxml:aalto-xml:1.2.2'


and see simple sample project 

https://github.com/superbderrick/AndroidExcel

