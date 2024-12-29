npm init -y
Wrote to /Users/pratapdas/Developer/100xDev/week-9/package.json:

{
  "name": "week-9",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


Prataps-MacBook-Air:week-9 pratapdas$ tsc --init

Created a new tsconfig.json with:            
                                          TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
Prataps-MacBook-Air:week-9 pratapdas$ npx tsc
 --init
error TS5054: A 'tsconfig.json' file is already defined at: '/Users/pratapdas/Developer/100xDev/week-9/tsconfig.json'.
Prataps-MacBook-Air:week-9 pratapdas$ tsc -b
Prataps-MacBook-Air:week-9 pratapdas$ node index.js
10
Prataps-MacBook-Air:week-9 pratapdas$ node index.ts
/Users/pratapdas/Developer/100xDev/week-9/index.ts:1
const x:number = 10
      ^

SyntaxError: Missing initializer in const declaration
    at internalCompileFunction (node:internal/vm:128:18)
    at wrapSafe (node:internal/modules/cjs/loader:1279:20)
    at Module._compile (node:internal/modules/cjs/loader:1331:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.7.1
Prataps-MacBook-Air:week-9 pratapdas$ node index.js
10
Prataps-MacBook-Air:week-9 pratapdas$ 