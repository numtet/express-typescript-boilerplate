# express-typesript-boilerplate
This boilerplate creates Express server using Typescript, prettier, eslint and jest.

## Getting Started
```
docker-compose up
```
You can also use `docker-compose run --rm server /bin/bash` to remove container after tested.

## What's been added already
### base
```
npm init -y 
mkdir dist src webpack
```

### TypeScript
```
npm install --save-dev typescript ts-node nodemon
./node_modules/.bin/tsc --init
```
and some changes are made with `tscofig.json`


### ES Lint, Prettier

```
npm isntall --save-dev eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```
```
cat <<EOF > .eslintrc
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ]
}
EOF
```

### Express
```
npm install --save express
npm install --save-dev @types/express body-parser
```

### nodemon
```
cat <<EOF > nodemon.json
{
  "restartable": "rs",
    "env": {
    "NODE_ENV": "development" // developmentモードとして作動します。
  },
  "watch": ["src"], // 監視する対象ディレクトリ
  "ignore": ["tests/**/*.ts"],
  "exec": "ts-node ./src/index.ts" // nodemonを起動したら実行されるスクリプト
}
EOF
```

### Webpack
```
npm install --save-dev webpack webpack-cli webpack-merge webpack-node-externals ts-loader
touch webpack/base.config.js
touch webpack/dev.config.js
touch webpack/prod.config.js
```
and filled three files above.

### JEST
```
npm install --save-dev jest @types/jest ts-jest
```