# Spirit Error

> Easily Return HTTP Errors from Spirit

Supports JSON, HTML, Text and dynamic errors.

[![Slack](https://slack.dodekeract.com/badge.svg)](https://slack.dodekeract.com)
[![Build Status](https://api.travis-ci.org/dodekeract/spirit-error.svg)](https://travis-ci.org/dodekeract/spirit-error/)
[![Coverage Status](https://coveralls.io/repos/dodekeract/spirit-error/badge.svg?branch=master&service=github)](https://coveralls.io/github/dodekeract/spirit-error?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dt/spirit-error.svg)](https://npmjs.com/package/spirit-error)
[![NPM Dependencies](https://david-dm.org/dodekeract/spirit-error.svg)](https://npmjs.com/package/spirit-error)

## Usage

```js
import spiritError from 'spirit-error'

// tell spirit-error to create JSON responses
const error = spiritError({
	type: 'json' // default
})

// inside a spirit function
return error.notFound
```

Returns this HTTP response:

```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
```
```json
{
	"error": {
		"message": "Not Found"
	}
}
```

## Install

With [npm](https://npmjs.org/) installed, run

```sh
npm install --save spirit-error
```

or use [yarn](https://yarnpkg.com):

```sh
yarn add spirit-error
```

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

[MIT](license.md)
