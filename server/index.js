const express = require('express');
const mongoose = require('mongoose');
const app = express();
const questionTrackerModel = require("./models/SurveyResponse.js");
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://joelndlovu23:9N4ih6UwxadmEnqd@projectepa.txvbiso.mongodb.net/?retryWrites=true&w=majority&appName=ProjectEPA', {
    useNewUrlParser: true,
});

// CREATE - Insert a new survey response
app.post("/insert", async (req, res) => {
    const trainingType = req.body.trainingType;
    const trainingDate = req.body.trainingDate;
    const questionTracker = new questionTrackerModel({ DayType: trainingType, Date: trainingDate });

    try {
        await questionTracker.save();
        res.send("Inserted data");
    } catch (err) {
        console.log(err);
    }
});

// READ - Fetch all survey responses
app.get("/read", async (req, res) => {
    try {
        const sessions = await questionTrackerModel.find();
        res.send(sessions);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching data");
    }
});

// UPDATE - Update an existing survey response
app.put("/update", async (req, res) => {
    const newTrainingType = req.body.newTrainingType;
    const id = req.body.id;

    try {
        const updatedTrainingType = await questionTrackerModel.findByIdAndUpdate(id, { DayType: newTrainingType });

        if (!updatedTrainingType) {
            return res.status(404).send("Training type not found");
        }

        res.send("Training type updated successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating training type");
    }
});

// DELETE - Remove a survey response by ID
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await questionTrackerModel.findByIdAndRemove(id).exec();
        res.send("Deleted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting data");
    }
});

app.listen(3001, () => {
    console.log("Server is running perfectly on port 3001...");
});

