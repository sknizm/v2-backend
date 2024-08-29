const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Add the auto-incrementing plugin to the schema
enquirySchema.plugin(AutoIncrement, { inc_field: 'enquiryId' });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
