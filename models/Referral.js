const mongoose = require("mongoose");

const ReferralSchema = new mongoose.Schema({
    referrer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    referredUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "successful"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Referral", ReferralSchema);
