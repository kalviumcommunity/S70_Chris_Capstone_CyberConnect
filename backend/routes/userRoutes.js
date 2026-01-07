const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Login User (POST) - This must be imported from the controller!
router.post("/login", userController.loginUser);

// Create a new user (POST)
router.post("/", userController.createUser);

// Get all users (GET)
router.get("/", userController.getAllUsers);

// Get user by ID (GET)
router.get("/:id", userController.getUserById);

// Update a user by ID (PUT)
router.put("/:id", userController.updateUser);

module.exports = router;