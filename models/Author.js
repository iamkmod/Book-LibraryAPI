const mongoose = require("mongoose");
module.exports = mongoose.model("Author", new mongoose.Schema(
{
    name: { type: String, required: true },
    bio: { type: String },
    createdAt: { type: Date, default: Date.now }    
},
{
    timestamps: true
}));

exports.create = Model => async (req, res) => {
  try {
    const resource = await Model.create(req.body);
    return res.status(201).json(resource);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};
