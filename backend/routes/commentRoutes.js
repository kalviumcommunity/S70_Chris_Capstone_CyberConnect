const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Create a new comment (POST)
router.post("/", commentController.createComment);

// Get all comments
router.get("/", commentController.getAllComments);

// Get comments for a specific incident
router.get("/incident/:incident_id", commentController.getCommentsByIncident);

module.exports = router;