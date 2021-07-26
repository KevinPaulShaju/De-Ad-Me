const mongoose = require("mongoose");
const blockedAppsSchema = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("BlockedApps", blockedAppsSchema);
