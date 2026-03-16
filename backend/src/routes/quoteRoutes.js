const router = require("express").Router();
const controller = require("../controllers/quoteController");
const requireAuth = require("../middleware/requireAuth");

router.post("/requests/:id/quotes", requireAuth, controller.submitQuote);

router.patch("/quotes/:id/accept", requireAuth, controller.acceptQuote);

module.exports = router;