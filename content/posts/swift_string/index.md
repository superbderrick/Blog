---
emoji: 📞 
title: Swift String API
date: '2022-05-31 14:40:00'
author: Derrick
tags: Swift iOS 
categories: Swift
---


Check prefix and suffix

    var derrickName = "derrick"

    print(derrickName.hasPrefix("der"))
    print(derrickName.hasSuffix("ick"))

 
Capital letter, upper case


    var convertedString: String = ""

    convertedString = derrickName.uppercased()
    print(convertedString)
    convertedString = derrickName.lowercased()
    print(convertedString)


