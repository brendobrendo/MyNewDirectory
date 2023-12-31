const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cowboySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: String,
    age: {
        type: Number,
        min: [18, 'Must be at least 18 years old'],
        max: [99, 'Age cannot be more than 99 years']
    },
    hometown: String,
    skills: [String], // Array of strings representing various cowboy skills
    reputation: {
        type: Number,
        default: 0
    },
    isOutlaw: {
        type: Boolean,
        default: false
    },
    famousQuotes: [String],
    horse: {
        name: String,
        color: String
    },
    lastSeenAt: {
        location: String,
        date: Date
    },
    history: {
        type: String,
        maxlength: 500 // Limit the history/bio length
    }
}, { timestamps: true }); // Add createdAt and updatedAt fields automatically

const Cowboy = mongoose.model('Cowboy', cowboySchema);
module.exports = Cowboy;

