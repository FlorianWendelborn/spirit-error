function error (type, status, message) {
	if (type === 'json') json(status, message)
	if (type === 'text') text(status, message)
	if (type === 'html') html(status, message)
	if (type === 'dynamic') return function (headers) {
		var accept = headers['accept'].split(';')[0]
		var _json = accept.indexOf('json')
		var _html = accept.indexOf('text/html')
		var _text = accept.indexOf('text')
		if (_json !== -1 && _json <= _html && _json <= _text) return json(status, message)
		if (_html !== -1 && _html <= _json && _html <= _text) return html(status, message)
		if (_text !== -1 && _text <= _json && _text <= _html) return text(status, message)
		return json(status, message)
	}
}

function json (status, message) {
	return {
		status: status,
		body: '{\n\t"error": {\n\t\t"message": "' + message + '"\n\t}\n}',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	}
}

function text (status, message) {
	return {
		status: status,
		body: message,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	}
}

function html (status, message) {
	return {
		status: status,
		body: '<html><head><title>' + message + '</title></head><body>' + message + '</body></html>',
		headers: {
			'Content-Type': 'text/html; charset=utf-8'
		}
	}
}

module.exports = function (options) {
	if (!options) options = {}
	var type = options.type || 'json'
	return {
		badRequest: error(type, 400, 'Bad Request'),
		unauthorized: error(type, 401, 'Unauthorized'),
		paymentRequired: error(type, 402, 'Payment Required'),
		forbidden: error(type, 403, 'Forbidden'),
		notFound: error(type, 404, 'Not Found'),
		methodNotAllowed: error(type, 405, 'Method Not Allowed'),
		notAcceptable: error(type, 406, 'Not Acceptable'),
		proxyAuthenticationRequired: error(type, 407, 'Proxy Authentication Required'),
		requestTimeout: error(type, 408, 'Request Timeout'),
		conflict: error(type, 409, 'Conflict'),
		gone: error(type, 410, 'Gone'),
		lengthRequired: error(type, 411, 'Length Required'),
		preconditionFailed: error(type, 412, 'Precondition Failed'),
		requestEntityTooLarge: error(type, 413, 'Request Entity Too Large'),
		requestUriTooLong: error(type, 414, 'Request Uri Too Long'),
		unsupportedMediaType: error(type, 415, 'Unsupported Media Type'),
		requestedRangeNotSatisfiable: error(type, 416, 'Requested Range Not Satisfiable'),
		expectationFailed: error(type, 417, 'Expectation Failed'),
		iAmATeapot: error(type, 418, 'I Am A Teapot'),
		enhanceYourCalm: error(type, 420, 'Enhance Your Calm'),
		unprocessableEntity: error(type, 422, 'Unprocessable Entity'),
		locked: error(type, 423, 'Locked'),
		failedDependency: error(type, 424, 'Failed Dependency'),
		reservedForWebDav: error(type, 425, 'Reserved For Web Dav'),
		upgradeRequired: error(type, 426, 'Upgrade Required'),
		preconditionRequired: error(type, 428, 'Precondition Required'),
		tooManyRequests: error(type, 429, 'Too Many Requests'),
		requestHeaderFieldsTooLarge: error(type, 431, 'Request Header Fields Too Large'),
		noResponse: error(type, 444, 'No Response'),
		retryWith: error(type, 449, 'Retry With'),
		blockedByWindowsParentalControls: error(type, 450, 'Blocked By Windows Parental Controls'),
		unavailableForLegalReasons: error(type, 451, 'Unavailable For Legal Reasons'),
		clientClosedRequest: error(type, 499, 'Client Closed Request'),
		internalServerError: error(type, 500, 'Internal Server Error'),
		notImplemented: error(type, 501, 'Not Implemented'),
		badGateway: error(type, 502, 'Bad Gateway'),
		serviceUnavailable: error(type, 503, 'Service Unavailable'),
		gatewayTimeout: error(type, 504, 'Gateway Timeout'),
		httpVersionNotSupported: error(type, 505, 'Http Version Not Supported'),
		variantAlsoNegotiates: error(type, 506, 'Variant Also Negotiates'),
		insufficientStorage: error(type, 507, 'Insufficient Storage'),
		loopDetected: error(type, 508, 'Loop Detected'),
		bandwidthLimitExceeded: error(type, 509, 'Bandwidth Limit Exceeded'),
		notExtended: error(type, 510, 'Not Extended'),
		networkAuthenticationRequired: error(type, 511, 'Network Authentication Required'),
		networkReadTimeoutError: error(type, 598, 'Network Read Timeout Error'),
		networkConnectTimeoutError: error(type, 599, 'Network Connect Timeout Error')
	}
}
