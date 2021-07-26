const joi = require("joi");
const ScheduleValidation = (data) => {
  const workingHoursSchema = joi.object().keys({
    from: joi.string().required(),
    to: joi.string().required(),
  });
  const schema = joi.object({
    name: joi.string().required(),
    workingHours: workingHoursSchema,
  });
  return schema.validate(data);
};

module.exports.ScheduleValidation = ScheduleValidation;
