const mongoose = require("mongoose");
const limitedAppsSchema = mongoose.Schema({
  name: { type: String, required: true },
  limit: {
    weekdays: { type: String, required: true },
    weekends: { type: String, required: true },
  },
});

module.exports = mongoose.model("LimitedApps", limitedAppsSchema);
