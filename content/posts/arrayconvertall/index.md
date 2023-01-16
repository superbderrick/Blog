---
emoji: 🎮 
title: c# convertall
date: '2023-01-16 21:20:00'
author: Derrick
tags: C# arrayconvertall
categories: C#
---

https://school.programmers.co.kr/learn/courses/30/lessons/12939

 

Recently I solved the algorightm problem, min max value from programmars site

While solveing the problem , it needed compareing process to change values from character to integer array

I used array convertall api , it's very useful




Eg, 

    string s = "-1 -2 -3 -4";
    string[] tokens = s.Split(' ');
    int[] convertedItems = Array.ConvertAll<string, int>(tokens, int.Parse);


In the problem characters were separlate with blank, it could convert using array convertall api


Detail.

https://learn.microsoft.com/en-us/dotnet/api/system.array.convertall?view=netframework-4.8#examples 

 
