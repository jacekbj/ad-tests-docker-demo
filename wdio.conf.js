const chromeCapabilities = {
	browserName: 'chrome',
	'goog:chromeOptions': {
		args: [
			'--window-size=1600,900',
			'--disable-infobars',
			'--no-sandbox',
			'--disable-notifications',
			'--allow-insecure-localhost',
			'--disable-dev-shm-usage',
			'--disable-extensions',
			'--ignore-certificate-errors',
		],
	},
};

exports.config = {
	baseUrl: 'https://harrypotter.fandom.com',
	maxInstances: 5,
	logLevel: 'error',
	deprecationWarnings: true,
	bail: 0,
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 0,
	services: ['devtools'],
	reporters: ['dot'],
	specFileRetries: 0,
	specFileRetryAttempts: 0,
	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
		compilers: ['js:@babel/register'],
		timeout: 2100000,
	},
	specs: [`tests/specs/**/*.test.js`],
	capabilities: [chromeCapabilities],
};
