const mongoose = require("mongoose");

// Book model with fields: title, isbn, authors, status, borrowedBy, issuedBy, createdAt, returnDate
module.exports = mongoose.model("Book", new mongoose.Schema(
    {
        title: { type: String, required: true },
        isbn: { type: String, required: true, unique: true },
        authors: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
        status: { type: String, enum: ["available", "borrowed"], default: "available" },
        borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        issuedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Attendant" },
        createdAt: { type: Date, default: Date.now },
        returnDate: { type: Date, default: null }
    },
    {
        timestamps: true
    }
));