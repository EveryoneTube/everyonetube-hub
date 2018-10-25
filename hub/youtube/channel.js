// TODO: Replace with regular Requests wrapper
const request = require("tor-request").request;
const xml2js = require("xml2js").parseString;

module.exports = (id) => {
	const channel = {
		getId: () => id,
		getLatestVideos: () => {
			return new Promise((resolve, reject) => {
				request.get("https://www.youtube.com/feeds/videos.xml?channel_id=" + channel.getId(), (error, response, body) => {
					if(error){
						reject(error);
						return;
					}

					xml2js(body, (error, result) => {
						if(error) reject(error);

						console.log(result);

						const videos = result["feed"];

						resolve(videos);
					});
				});
			});
		}
	};

	return channel;
};

