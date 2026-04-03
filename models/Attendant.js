const mongoose = require("mongoose");
module.exports = mongoose.model("Attendant", new mongoose.Schema(
{
    name: { type: String, required: true },
    staffId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }    
},
{
    timestamps: true
}));

