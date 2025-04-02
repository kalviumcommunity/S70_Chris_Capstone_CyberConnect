const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create a new user (POST)
router.post("/", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});


// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
