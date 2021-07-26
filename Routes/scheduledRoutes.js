const express = require("express");
const Schedules = require("../models/Schedules");
const router = express.Router();
const { ScheduleValidation } = require("../validation");

// get all Schedules

router.get("/", async (req, res, next) => {
  try {
    const schedules = await Schedules.find();
    res.json(schedules);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// post schedule

router.post("/", async (req, res, next) => {
  // validation(though not necessary, just flexing)
  const { error } = ScheduleValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const schedule = new Schedules({
    name: req.body.name,
    workingHours: req.body.workingHours,
  });
  try {
    const savedSchedule = await schedule.save();
    res.json(savedSchedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// edit a schedule

router.patch("/:scheduleId", async (req, res, next) => {
  const scheduleId = req.params.scheduleId;

  try {
    const patchedSchedulue = await Schedules.updateOne(
      { _id: scheduleId },
      { $set: { workingHours: req.body.workingHours } }
    );
    res.json(patchedSchedulue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// remove a schedule

router.delete("/:scheduleId", async (req, res, next) => {
  const scheduleId = req.params.scheduleId;
  try {
    const deletedSchedule = await Schedules.remove({ _id: scheduleId });
    res.json(deletedSchedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
