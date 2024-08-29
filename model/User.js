const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    image_profile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
    },
    aboutUs: {
        type: String,
    },
    city: {
        type: String,
    },
    businessTime: {
        type: String,
    },
    holiday: {
        type: String,
    },
});

// Add the auto-incrementing plugin to the schema
userSchema.plugin(AutoIncrement, { inc_field: 'id' });

const User = mongoose.model('User', userSchema);

module.exports = User;
