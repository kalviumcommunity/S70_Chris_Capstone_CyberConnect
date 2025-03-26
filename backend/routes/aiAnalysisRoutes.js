const express = require("express");
const AIAnalysis = require("../models/AIAnalysis");
const router = express.Router();

// Get all AI analysis results
router.get("/", async (req, res) => {
  try {
    const results = await AIAnalysis.find().populate("threat_id", "title");
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
