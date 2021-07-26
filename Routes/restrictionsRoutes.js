const express = require("express");
const AllApps = require("../models/AllApps");
const BlockedApps = require("../models/BlockedApps");
const LimitedApps = require("../models/LimitedApps");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// blocked apps

// get blocked apps
router.get("/blockedapps", async (req, res) => {
  try {
    const blockedApps = await BlockedApps.find();
    res.json(blockedApps);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// remove from blocked apps

router.delete("/blockedapps/:appId", async (req, res) => {
  const appId = req.params.appId;
  try {
    const deletedApp = await BlockedApps.remove({ _id: appId });
    res.json(deletedApp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// add newblockedApp
router.post("/blockedapps", async (req, res, next) => {
  const newBlockedApp = new BlockedApps({
    name: req.body.name,
  });
  try {
    const savedNewBlockedApp = await newBlockedApp.save();
    res.json(savedNewBlockedApp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// limited apps

// get limited apps

router.get("/limitedapps", async (req, res) => {
  try {
    const limitedApps = await LimitedApps.find();
    res.json(limitedApps);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/limitedapps", async (req, res) => {
  const newLimitedApp = new LimitedApps({
    name: req.body.name,
    limit: req.body.limit,
  });

  try {
    const savedNewLimitedApp = await newLimitedApp.save();
    res.json(savedNewLimitedApp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/limitedapps/:appId", async (req, res) => {
  const appId = req.params.appId;
  try {
    const patchedApp = await LimitedApps.updateOne(
      { _id: appId },
      { $set: { limit: req.body.limit } }
    );
    res.json(patchedApp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
