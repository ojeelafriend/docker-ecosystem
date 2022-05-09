const { express } = require("./express");
const { save } = require("./database");

const router = express.Router();

router.get("/info", (req, res) => {
  res.json({ message: "Test container in docker", status: true });
});

router.post("/save/:message", (req, res) => {
  const { message } = req.params;
  save(message);

  res.json("Send message, check your status. Success or error");
});

module.exports = router;
