const { Schema } = require('mongoose');

const taskSchema = new Schema({
  date: [
    {
      type: String,
    },
  ],
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = taskSchema;