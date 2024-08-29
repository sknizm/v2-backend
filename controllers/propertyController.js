const Property = require('../model/Property')



const getAllProperty = async (req, res) => {
  try {
      const users = await Property.find();
      res.json(users);
  } catch (err) {
      res.status(500).send(err.message);
  }
};

// Function to create a new property
const createProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.status(201).json(property);
    } catch (err) {
        res.status(400).send(err.message);
    }
};


  const getOnePropertyById = async (req,res) =>{
    try {
      const propertyId = req.body.propertyid;
      // //(`propertyId ${propertyId}`)
      const property = await Property.findOne({ propertyid: propertyId });
      if (!property) {
          return res.status(404).json({ message: 'Property not found' });
      }
      res.json(property);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
  } 


const deleteProperty = async (req, res) => {
  const { propertyid } = req.body;

  try {
    // Find the property by propertyid and delete it
    const property = await Property.findOneAndDelete({ propertyid });

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Function to get the 4 latest properties
const getLatestProperties = async (req, res) => {
  try {
      const latestProperties = await Property.find()
          .sort({ dateUpload: -1 }) // Sort by dateUpload in descending order
          .limit(4); // Limit the result to 4 properties

      res.status(200).json(latestProperties);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching latest properties', error: error.message });
  }
};


module.exports = {
    getAllProperty,
    createProperty,
    getOnePropertyById,
    deleteProperty,
    getLatestProperties
}