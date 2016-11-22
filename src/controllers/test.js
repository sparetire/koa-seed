const bodyparser = require('koa-bodyparser');

function test(opts) {
	return function* (next) {
		this.body = {
			test: 'test'
		};
		yield next;
	};
}

module.exports = {
	'post /test': [bodyparser(), test()]
};