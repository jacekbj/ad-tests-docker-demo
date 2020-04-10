const { config } = require('./wdio-base.conf.js');

exports.config = {
	...config,
	automationProtocol: 'devtools',
	services: ['devtools'],
};
