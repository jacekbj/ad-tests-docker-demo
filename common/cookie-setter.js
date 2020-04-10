export class CookieSetter {
	constructor() {
		this.geoCookieName = 'Geo';
		this.geoCookieCountryValue =
			'{%22region%22:%22$region$%22%2C%22country%22:%22$country$%22%2C%22continent%22:%22$continent$%22}';
	}

	setGeo(country, continent, region) {
		const geoCookie = this.buildGeoCookie(country, continent, region);
		browser.pause(1000);

		browser.deleteCookies([this.geoCookieName]);
		browser.setCookies(geoCookie);
		browser.refresh();
	}

	buildGeoCookie(country, continent, region) {
		const cookie = {};

		cookie.name = this.geoCookieName;
		cookie.value = this.geoCookieCountryValue
			.replace('$country$', country)
			.replace('$region$', region)
			.replace('$continent$', continent);
		cookie.domain = `.fandom.com`;

		return cookie;
	}
}
