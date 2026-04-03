const mongoose = require("mongoose");
module.exports = mongoose.model("Student", new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required : true, unique: true },
        studentId: { type: String, required: true, unique: true },
        createdAt: { type: Date, default: Date.now }
    },
{
    timestamps: true
}));    
