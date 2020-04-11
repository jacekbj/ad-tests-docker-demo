import { CookieSetter } from '../../common/cookie-setter';

describe('Test normal 0', () => {
	before(() => {
	    console.log('before - navigate to page');
		browser.url('https://harrypotter.fandom.com/wiki');
		console.log('before - set cookie');
		// Need this to avoid GDPR popups
		new CookieSetter().setGeo('AU', 'AU');
	});

	it('should load page 3 times', () => {
		console.log('Navigate to page 1 ...');
		browser.url('https://harrypotter.fandom.com/wiki/Harry_Potter');
		console.log('Navigate to page 2 ...');
		browser.url('https://harrypotter.fandom.com/wiki/Harry_Potter');
		console.log('Navigate to page 3 ...');
		browser.url('https://harrypotter.fandom.com/wiki/Harry_Potter');
		console.log('Finished!');
	});
});
