---
emoji: 🎮 
title: Kotlin Study Log 00 특이점 정리하기
date: '2021-09-25 20:20:00'
author: Derrick
tags: Android Kotlin
categories: Kotlin
---

코틀린 공부 Log 특이점 정리하기

변수 타입 지정은 생략해도된다

정적 타입이란 변수의 타입이 컴파일 시점에 검증되고 정확해져야 한다는 의미

- 특징
 - 향상된 통일성 체크
 - Java의 Equal API 대신에 == 사용할것 Null handling 도 덩달아!
 - Raw 문자열 기능 """ 감싸서 Multiline 처리 용이
 