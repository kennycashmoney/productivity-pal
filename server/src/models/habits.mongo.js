const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  habitTitle: {
    type: String,
    required: true,
  },
  durationMinutes: {
    type: Number,
  },
  dueDate: {
    type: Date,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Habit", habitSchema);
