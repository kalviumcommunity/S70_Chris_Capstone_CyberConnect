const express = require("express");
const router = express.Router();
const aiAnalysisController = require("../controllers/aiAnalysisController");

// Create a new AI analysis (POST)
router.post("/", aiAnalysisController.createAIAnalysis);

// Get all AI analysis results
router.get("/", aiAnalysisController.getAllAIAnalyses);

// Update an AI analysis by ID (PUT)
router.put("/:id", aiAnalysisController.updateAIAnalysis);

module.exports = router;