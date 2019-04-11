const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Assignment = new Schema({
    assignment_description: {
        type: String
    },
    assignment_responsible: {
        type: String
    },
    assignment_priority: {
        type: String
    },
    assignment_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Assignment', Assignment);