function cors(opts) {
	return function* (next) {
		this.set('Access-Control-Allow-Origin', '*');
		this.set('Access-Control-Request-Method', 'GET,POST,PUT,DELETE,OPTIONS');
		this.set('Access-Control-Request-Headers', 'Content-Type,Content-LengthAccept,Accept-Charset,Accept-Encoding,Authorization,X-Requested-With,Token');
		this.set('Access-Control-Max-Age', '7200');
		yield next;
	};
}

module.exports = cors;