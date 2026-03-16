const router = require("express").Router();
const controller = require("../controllers/requestController");
const requireAuth = require("../middleware/requireAuth");

router.post("/", requireAuth, controller.createRequest);
router.get("/", controller.getRequests);

module.exports = router;