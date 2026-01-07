const User = require("../models/User");

// Create a new user (Register)
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    console.log("📝 Registering user:", email); // Log the attempt

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists with this email" });
    }

    // 2. Create the new user
    const newUser = new User({ name, email, password, role });
    await newUser.save();

    console.log("✅ User created successfully:", newUser._id);
    res.status(201).json(newUser);

  } catch (error) {
    console.error("❌ Error creating user:", error); // PRINT THE ERROR TO TERMINAL
    
    // Send the specific error message to the Frontend so you see it in the Toast
    res.status(500).json({ error: error.message }); 
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // 2. Check if password matches
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // 3. Return user info (success)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      message: "Login successful"
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: error.message });
  }
};