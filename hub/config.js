// Config singelton

const config = {
	proxy: process.env.PROXY || "http://localhost:9050/"
};

module.exports = {
	setConfig: (object) => {
		Object.keys(object).forEach((key) => {
			config[key] = object[key];
		});
	},
	getConfig: () => {
		return config;
	}
};

