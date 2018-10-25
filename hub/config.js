// Config singelton

const config = {
	proxy: process.env.PROXY || "socks://localhost:9050/",
	port: process.env.PORT || 8080
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

