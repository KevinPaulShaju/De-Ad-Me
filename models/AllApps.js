const mongoose = require("mongoose");
const allAppsSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("allApps", allAppsSchema);
