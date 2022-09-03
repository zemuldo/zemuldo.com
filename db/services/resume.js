const Resume = require('../models/resume');
const ResumeRequestSchema = require('../models/resumeRequest');

module.exports = {
  get: async () => {
    return Resume.findOne({}, [], {
      sort: {
        _id: -1
      }
    });
  },
  requested: async  (email, resume) => {
    const resumeRequest = new ResumeRequestSchema({ email, resume, timestamp: new Date() });

    await resumeRequest.save()

    return true;
  },
  createWithUniqueName: async (params) => {
    await Resume.findOneAndUpdate({name: params.name}, params, {upsert: true});
    return true;
  }
};