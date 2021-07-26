const mongoose = require("mongoose");
const schedulesSchema = mongoose.Schema({
  name: { type: String, required: true },
  workingHours: [{
    from: { type: String, required: true },
    to: { type: String, required: true },
  }],
});

module.exports = mongoose.model("Schedules", schedulesSchema);
