const AIAnalysis = require("../models/AIAnalysis");

// Create a new AI analysis
exports.createAIAnalysis = async (req, res) => {
  try {
    const { threat_id, analysisResult, generatedAt } = req.body;
    const newAnalysis = new AIAnalysis({
      threat_id,
      analysisResult,
      generatedAt: generatedAt || Date.now()
    });
    await newAnalysis.save();
    res.status(201).json(newAnalysis);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get all AI analysis results
exports.getAllAIAnalyses = async (req, res) => {
  try {
    const results = await AIAnalysis.find().populate("threat_id", "title");
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Update an AI analysis by ID
exports.updateAIAnalysis = async (req, res) => {
  try {
    const updatedAnalysis = await AIAnalysis.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAnalysis);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};