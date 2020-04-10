const chromeOptions = {
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
};

if (Number(process.env.HEADLESS) === 1) {
	chromeOptions.headless = true;
	console.log('Tests will run in headless mode.');
}

const chromeCapabilities = {
	browserName: 'chrome',
	'goog:chromeOptions': chromeOptions,
};

exports.config = {
	runner: 'local',
	maxInstances: 5,
	logLevel: 'error',
	deprecationWarnings: true,
	bail: 0,
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 0,
	services: ['devtools', 'selenium-standalone'],
	reporters: ['dot'],
	specFileRetries: 0,
	specFileRetryAttempts: 0,
	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
		compilers: ['@babel/register'],
		timeout: 2100000,
	},
	specs: [`tests/specs/**/*.test.js`],
	capabilities: [chromeCapabilities],
};
