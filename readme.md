# twitch-token-auth

> NPM package for Twitch authentication

[![Package Version](https://img.shields.io/npm/v/twitch-token-auth.svg?style=flat-square)](https://www.npmjs.com/package/twitch-token-auth)
[![Downloads Status](https://img.shields.io/npm/dm/twitch-token-auth.svg?style=flat-square)](https://npm-stat.com/charts.html?package=twitch-token-auth&from=2016-04-01)



[![dependencies Status](https://david-dm.org/markokarapandzic/twitch-token-auth/status.svg)](https://david-dm.org/markokarapandzic/twitch-token-auth)
[![devDependencies Status](https://david-dm.org/markokarapandzic/twitch-token-auth/dev-status.svg)](https://david-dm.org/markokarapandzic/twitch-token-auth?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Why

// TODO

## Installation

```sh
npm install --save twitch-token-auth
```

## Usage

```js
const twitchTokenAuth = require('twitch-token-auth');

twitchTokenAuth('some text');
//=> some text
```

## Usage

```js
import twitchTokenAuth, { isEven, isOdd } from 'twitch-token-auth';

twitchTokenAuth('some text');
//=> some text

isEven(8);
//=> true
isEven(9);
//=> false
isOdd(8);
//=> false
isOdd(9);
//=> true
```

If you are not able to use `es-modules`, you can use `require` instead of `import`
```js
const { default: twitchTokenAuth, isEven, isOdd } = require('twitch-token-auth');
```

To use it directly inside a browser, load it via a script `tag`:
```html
<script type="text/javascript" src="./node_modules/twitch-token-auth/dist/index.js"></script>
<script type="text/javascript">
  const { default: twitchTokenAuth, isEven, isOdd } = window['twitch-token-auth'];
</script>
```

## Related

// TODO

## License

MIT &copy; [Marko Karapandzic](https://markokarapandzic.github.io/portfolio-website/)
