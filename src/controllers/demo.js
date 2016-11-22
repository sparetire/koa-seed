const bodyParser = require('koa-bodyparser');

function demo(opts) {
	return function* (next) {
		console.log(this.request.body);
		console.log(this.params.id);
		console.log(this.request.query.name);
		this.body = {
			name: 'demo'
		};
	};
}

module.exports = {
	'post /demo/:id': [bodyParser(), demo()]
};