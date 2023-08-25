const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        body: { type: Array, required: true },
        coverImage: { type: String, required: true },
        preview: { type: String, required: true },
        bodyImages: { type: Array },
        author: { type: String, required: true },
        category: { type: String, required: true },
    },
    { timestamps: true }  
);

module.exports = mongoose.model("Article", ArticleSchema);
