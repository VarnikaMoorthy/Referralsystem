const User = require("../models/User");

exports.getReferrals = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: "User ID is required" });
    const referrals = await User.find({ referredBy: userId }).select("username email referralCode");
    res.status(200).json({ message: "Referrals retrieved successfully", referrals });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};