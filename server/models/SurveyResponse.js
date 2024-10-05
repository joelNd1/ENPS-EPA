const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const surveyResponseSchema = new Schema({
  employeeId: { type: String, required: true, unique: true },
  roleGuild: {
    role: { type: String },
    guild: { type: String }
  },
  payBandSeparation: {
    satisfactionWithPay: { type: Number, min: 1, max: 5 },  // Slider value
    payReflectsEffort: { type: Number, min: 1, max: 5 }  // Slider value
  },
  workLifeBalance: {
    workLifeBalanceRating: { type: Number, min: 1, max: 5 },  // Slider value
    companySupportForBalance: { type: Number, min: 1, max: 5 },  // Slider value
    workloadManagement: { type: Number, min: 1, max: 5 },  // Slider value
    roleFlexibility: { type: Number, min: 1, max: 5 }  // Slider value
  },
  incentives: {
    usesAXAMax: { type: String, enum: ['Yes', 'No'] }  // Multiple choice (Yes/No)
  },
  careerDevelopment: {
    careerDevelopmentSatisfaction: { type: Number, min: 1, max: 5 },  // Slider value
    resourcesForProfessionalGrowth: { type: Number, min: 1, max: 5 }  // Slider value
  },
  submissionDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create the model
const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);

module.exports = SurveyResponse;