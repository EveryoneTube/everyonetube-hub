const express = require("express");
const app = express();

const config = require("./config").getConfig();

app.use("/", require("./routes"));

app.listen(config.port, () => {
	console.log("EveryoneYoutube Hub is listening on port " + config.port);
});

