const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);



// Main Schema
const propertySchema = new Schema({
    projectTitle: { type: String  },
    propertyType:{ type: String  },
    propertyPrice:{ type: String  },
    propertyImage: { type: [String] },
    propertyVideo: { type: String },
    aboutProperty: { type: String },
    location: { type: String},
    googleMapLocation: { type: String },
    dateUpload: {type:Date,default: Date.now },
});






// Apply auto-increment plugin to the id field
propertySchema.plugin(AutoIncrement, { inc_field: 'propertyid' });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
