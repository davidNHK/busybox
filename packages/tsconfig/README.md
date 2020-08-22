# @busybox/tsconfig

# Installation

```
yarn add --dev @busybox/tsconfig
```

In tsconfig.json for normally application

```json
{
  "extends": "@busybox/tsconfig",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

In tsconfig.json for lib

```json
{
  "compilerOptions": {
    "emitDeclarationOnly": true,
    "noEmit": false,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "extends": "@busybox/tsconfig"
}
```