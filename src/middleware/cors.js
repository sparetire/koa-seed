function cors(opts) {
	return function* (next) {
		this.set('Access-Control-Allow-Origin', '*');
		this.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		this.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Accept,Accept-Charset,Accept-Encoding,Authorization,X-Requested-With,Token');
		this.set('Access-Control-Max-Age', '7200');
		if (this.request.method === 'OPTIONS') {
			this.body = 'OK';
			return;
		}
		yield next;
	};
}

module.exports = cors;