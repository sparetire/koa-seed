const Koa = require('koa');
const http = require('http');
const https = require('https');
const controller = require('./controller');
const router = require('koa-router')();
const cors = require('./middleware/cors');
const config = require('./config/app.config');

// 设置所有http请求默认的socket连接池的最大连接数
http.globalAgent.maxSockets = 7000;
https.globalAgent.maxSockets = 7000;

const app = new Koa();

if (process.env.NODE_ENV === 'dev') {
	app.use(cors());
}

app.use(controller(router))
	.use(router.allowedMethods());
app.listen(config.port);