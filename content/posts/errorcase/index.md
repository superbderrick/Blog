---
emoji: 📞 
title: Error case permission denied, open /Users/derrick/.config/gatsby/config.json
date: '2021-12-23 13:40:00'
author: Derrick
tags: NPM 
categories: NPM
---


Actually I am using gatsby for my personal blog.
When I tried to start for my blog build using npm command, it occued some error like below error message

### Error: EACCES: permission denied, open '/Users/derrick/.config/gatsby/config.json'

  Error: EACCES: permission denied, open '/Users/derrick/.config/gatsby/config.json'
  You don't have access to this file.

      at Object.openSync (fs.js:498:3)
      at Object.readFileSync (fs.js:394:35)
      at Configstore.get all [as all] (/Users/derrick/final/Blog/node_modules/configstore/index.js:34:25)
      at new Configstore (/Users/derrick/final/Blog/node_modules/configstore/index.js:27:13)
      at Object.getConfigStore (/Users/derrick/final/Blog/node_modules/gatsby-core-utils/dist/get-config-store.js:18:14)
      at Object.<anonymous> (/Users/derrick/final/Blog/node_modules/gatsby-recipes/src/providers/npm/package.js:12:24)
      at Module._compile (internal/modules/cjs/loader.js:1072:14)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
      at Module.load (internal/modules/cjs/loader.js:937:32)
      at Function.Module._load (internal/modules/cjs/loader.js:778:12)


with $ sudo chmod -R 777 [DIR] ->  e.g "/Users/derrick/.config/gatsby/"

it might be occurred error tried to build without permission, so I changed a permission with mac commands chmod option

worked well 

