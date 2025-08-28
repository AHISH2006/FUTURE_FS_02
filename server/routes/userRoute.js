// routes/userRoute.js
const express = require("express");
const User = require("../models/User");
const mongoose = require("mongoose");

const router = express.Router();

// GET user by ID
router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ msg: "Invalid user ID" });
  }
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// UPDATE user profile (including the addresses array)
router.put("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ msg: "Invalid user ID" });
  }
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Dynamically update fields that are present in the request body
    if (req.body.name) user.name = req.body.name;
    if (req.body.mobile) user.mobile = req.body.mobile;
    
    // ✅ This will overwrite the entire addresses array with the new one from the frontend
    if (req.body.addresses) user.addresses = req.body.addresses;

    const updatedUser = await user.save();
    
    // Exclude password from the response before sending
    const userResponse = updatedUser.toObject();
    delete userResponse.password;

    res.json(userResponse);
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ msg: "Error updating profile" });
  }
});

module.exports = router;
