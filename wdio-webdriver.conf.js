const { config } = require('./wdio.conf.js');

exports.config = {
	...config,
	automationProtocol: 'webdriver',
	services: [...config.services, 'selenium-standalone'],
};
