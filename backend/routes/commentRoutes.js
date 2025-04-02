const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// Create a new comment (POST)
router.post("/", async (req, res) => {
  try {
    const { user_id, incident_id, content } = req.body;
    const newComment = new Comment({ user_id, incident_id, content });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().populate("user_id", "name");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get comments for a specific incident
router.get("/incident/:incident_id", async (req, res) => {
  try {
    const comments = await Comment.find({ incident_id: req.params.incident_id }).populate("user_id", "name");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
