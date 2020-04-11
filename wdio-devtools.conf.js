const { config } = require('./wdio.conf.js');

exports.config = {
	...config,
	automationProtocol: 'devtools',
};
