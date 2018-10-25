const router = require("express").Router();

router.get("/", (req, res) => {
	res.redirect("https://github.com/EveryoneTube/everyonetube-hub#everyonetube-hub");
});

// http://localhost:8080/channel/UC2eYFnH61tmytImy1mTYvhA

router.get("/channel/:id", (req, res) => {
	const channel = require("../youtube/channel")(req.params.id);

	channel.getLatestVideos().then((videos) => {
		res.json({type: "success", feed: videos});
	}).catch((error) => {
		console.error(error);

		res.status(400);
		res.json({type: "error", "errorMessage": error});
	});

});

module.exports = router;

