const express = require("express");
const router = express.Router();
const Medication = require("../models/Medication");

router.post("/add", async (req, res) => {
    try {
        if (!req.body.userId || !req.body.name || !req.body.dosage || !req.body.time) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const newMedication = new Medication(req.body);
        await newMedication.save();
        res.status(201).json({ message: "Medication added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const medications = await Medication.find({ userId: req.params.userId });
        res.status(200).json(medications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
