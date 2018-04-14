const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
  title: { type: String, required: True },
  budgetAmount: { type: Number, required: True }
});

module.exports = mongoose.model('Budget', Budget)
