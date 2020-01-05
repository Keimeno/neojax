type LooseObject = object & {
	[key: string]: any;
};

type NeoCajaxHeaders = LooseObject & {
	Accept?: string;
	'Accept-CH'?: string;
	'Accept-CH-Lifetime'?: string;
	'Accept-Charset'?: string;
	'Accept-Encoding'?: string;
	'Accept-Language'?: string;
	'Accept-Patch'?: string;
	'Accept-Ranges'?: string;
	'Access-Control-Allow-Credentials'?: string;
	'Access-Control-Allow-Headers'?: string;
	'Access-Control-Allow-Methods'?: string;
	'Access-Control-Allow-Origin'?: string;
	'Access-Control-Expose-Headers'?: string;
	'Access-Control-Max-Age'?: string;
	'Access-Control-Request-Headers'?: string;
	'Access-Control-Request-Method'?: string;
	Age?: string;
	Allow?: string;
	'Alt-Svc'?: string;
	Authorization?: string;
	'Cache-Control'?: string;
	'Clear-Site-Data'?: string;
	Connection?: string;
	'Content-Disposition'?: string;
	'Content-Encoding'?: string;
	'Content-Language'?: string;
	'Content-Length'?: string;
	'Content-Location'?: string;
	'Content-Range'?: string;
	'Content-Security-Policy'?: string;
	'Content-Security-Policy-Report-Only'?: string;
	'Content-Type'?: string;
	Cookie?: string;
	Cookie2?: string;
	'Cross-Origin-Resource-Policy'?: string;
	DNT?: string;
	DPR?: string;
	Date?: string;
	'Device-Memory'?: string;
	Digest?: string;
	ETag?: string;
	'Early-Data'?: string;
	Expect?: string;
	'Expect-CT'?: string;
	Expires?: string;
	'Feature-Policy'?: string;
	Forwarded?: string;
	From?: string;
	Host?: string;
	'If-Match'?: string;
	'If-Modified-Since'?: string;
	'If-None-Match'?: string;
	'If-Range'?: string;
	'If-Unmodified-Since'?: string;
	Index?: string;
	'Keep-Alive'?: string;
	'Large-Allocation'?: string;
	'Last-Modified'?: string;
	Link?: string;
	Location?: string;
	Origin?: string;
	Pragma?: string;
	'Proxy-Authenticate'?: string;
	'Proxy-Authorization'?: string;
	'Public-Key-Pins'?: string;
	'Public-Key-Pins-Report-Only'?: string;
	Range?: string;
	Referer?: string;
	'Referrer-Policy'?: string;
	'Retry-After'?: string;
	'Save-Data'?: string;
	'Sec-WebSocket-Accept'?: string;
	Server?: string;
	'Server-Timing'?: string;
	'Set-Cookie'?: string;
	'Set-Cookie2'?: string;
	SourceMap?: string;
	'Strict-Transport-Security'?: string;
	TE?: string;
	'Timing-Allow-Origin'?: string;
	Tk?: string;
	Trailer?: string;
	'Transfer-Encoding'?: string;
	'Upgrade-Insecure-Requests'?: string;
	'User-Agent'?: string;
	Vary?: string;
	Via?: string;
	'WWW-Authenticate'?: string;
	'Want-Digest'?: string;
	Warning?: string;
	'X-Content-Type-Options'?: string;
	'X-DNS-Prefetch-Control'?: string;
	'X-Forwarded-For'?: string;
	'X-Forwarded-Host'?: string;
	'X-Forwarded-Proto'?: string;
	'X-Frame-Options'?: string;
	'X-XSS-Protection'?: string;
};

export default NeoCajaxHeaders;
