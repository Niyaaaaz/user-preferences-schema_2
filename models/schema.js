const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
  },
  author: {
    type: String,
    required: true, // Author is mandatory
  },
  isbn: {
    type: String,
    required: true,
    unique: true, // Each book must have a unique ISBN
  },
  category: {
    type: String,
    required: true,
    enum: ["fiction", "non-fiction", "comics", "biography"], // Restrict to given categories
  },
  copies: {
    type: Number,
    required: true, // Total copies in library
    min: 1,
  },
  available: {
    type: Number,
    default: function () {
      return this.copies; // Default available = total copies
    },
  },
});

// Member Schema
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Member must have a name
  },
  email: {
    type: String,
    required: true,
    unique: true, // No duplicate members with same email
  },
  joinDate: {
    type: Date,
    default: Date.now, // Defaults to current date
  },
  booksIssued: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book", // References Book documents
    },
  ],
});

// Models
const Book = mongoose.model("Book", bookSchema);
const Member = mongoose.model("Member", memberSchema);

module.exports = { Book, Member };
