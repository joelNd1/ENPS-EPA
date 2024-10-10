const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveyResponseSchema = new Schema({
  employeeId: { type: String, required: true, unique: true },
  consent: { type: Boolean, required: true, default: false }, // New field to track consent
  roleGuild: {
    role: { type: String },
    guild: { type: String }
  },
  payBandSeparation: {
    satisfactionWithPay: { type: Number, min: 1, max: 5 },
    payReflectsEffort: { type: Number, min: 1, max: 5 }
  },
  workLifeBalance: {
    workLifeBalanceRating: { type: Number, min: 1, max: 5 },
    companySupportForBalance: { type: Number, min: 1, max: 5 },
    workloadManagement: { type: Number, min: 1, max: 5 },
    roleFlexibility: { type: Number, min: 1, max: 5 }
  },
  incentives: {
    usesAXAMax: { type: String, enum: ['Yes', 'No'] }
  },
  careerDevelopment: {
    careerDevelopmentSatisfaction: { type: Number, min: 1, max: 5 },
    resourcesForProfessionalGrowth: { type: Number, min: 1, max: 5 }
  },
  submissionDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);
module.exports = SurveyResponse;
