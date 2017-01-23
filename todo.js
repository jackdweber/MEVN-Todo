var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  complete: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
