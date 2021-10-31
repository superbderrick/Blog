---
emoji: 🎮 
title: Kotlin 코틀린 가변인자, vararg
date: '2021-10-31 20:20:00'
author: Derrick
tags: Android Kotlin
categories: Kotlin
---

가변 인자는 개수가 정해지지 않은 인자를 말합니다

    fun printString(vararg strings : String): Unit { for (string in strings) { println(string) } } fun main() { printString("derrick") printString("derrick", "summer") printString("derrick", "summer", "toghter") }

