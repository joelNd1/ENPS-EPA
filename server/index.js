const express = require('express');
const mongoose = require('mongoose');
const SurveyResponse = require('./models/SurveyResponse'); // Model import
const cors = require('cors');

// Initialize the express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Joel:J3NWpmVt4raqNK8i@enps.blszc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// ------------------- CRUD Functions -------------------

// CREATE - Insert a new survey response
app.post("/insert", async (req, res) => {
    const {
        employeeId,
        roleGuild,
        payBandSeparation,
        workLifeBalance,
        incentives,
        careerDevelopment
    } = req.body;

    const surveyResponse = new SurveyResponse({
        employeeId,
        roleGuild,
        payBandSeparation,
        workLifeBalance,
        incentives,
        careerDevelopment
    });

    try {
        await surveyResponse.save();
        res.status(201).send("Survey response saved successfully");
    } catch (err) {
        console.error('Error saving survey response:', err);
        res.status(500).send("Error saving survey response");
    }
});

// READ - Fetch all survey responses
app.get("/read", async (req, res) => {
    try {
        const surveyResponses = await SurveyResponse.find();
        res.send(surveyResponses);
    } catch (err) {
        console.error('Error fetching survey responses:', err);
        res.status(500).send("Error fetching survey responses");
    }
});

// READ - Fetch a specific survey response by employeeId
app.get("/read/:employeeId", async (req, res) => {
    const { employeeId } = req.params;

    try {
        const surveyResponse = await SurveyResponse.findOne({ employeeId });
        if (!surveyResponse) {
            return res.status(404).send("Survey response not found");
        }
        res.send(surveyResponse);
    } catch (err) {
        console.error('Error fetching survey response:', err);
        res.status(500).send("Error fetching survey response");
    }
});

// UPDATE - Update an existing survey response by _id
app.put('/update/:id', async (req, res) => {
    const { id } = req.params; // Get the document ID from the URL
    const { guild } = req.body; // New data to update the document

    try {
        const updatedSurveyResponse = await SurveyResponse.findByIdAndUpdate(
            id, // The document's _id
            { 'roleGuild.guild': guild }, // The data to update
            { new: true } // Return the updated document
        );

        if (!updatedSurveyResponse) {
            return res.status(404).send('Document not found');
        }

        res.status(200).send('Survey response updated successfully');
    } catch (error) {
        console.error('Error updating survey response:', error);
        res.status(500).send('Error updating survey response');
    }
});

// DELETE - Remove a survey response by ID
app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedResponse = await SurveyResponse.findByIdAndRemove(id);
        if (!deletedResponse) {
            return res.status(404).send("Survey response not found");
        }
        res.send("Survey response deleted successfully");
    } catch (err) {
        console.error('Error deleting survey response:', err);
        res.status(500).send("Error deleting survey response");
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
