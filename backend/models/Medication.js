const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
    userId: String,
    name: String,
    dosage: String,
    frequency: String,
    time: String,
    reminder: Boolean
});

module.exports = mongoose.model("Medication", MedicationSchema);
