const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to create upload directory if not exists
const createUploadsDir = () => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }
};

// Set up storage engine for images
const storageImages = multer.diskStorage({
    destination: function (req, file, cb) {
        createUploadsDir(); // Ensure upload directory exists
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Set up storage engine for videos
const storageVideos = multer.diskStorage({
    destination: function (req, file, cb) {
        createUploadsDir(); // Ensure upload directory exists
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Check file type for images
function checkImageFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Check file type for videos
function checkVideoFileType(file, cb) {
    const filetypes = /mp4|mov|avi|wmv/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Videos Only!');
    }
}

// Init upload for single image
const uploadSingle = multer({
    storage: storageImages,
    fileFilter: function (req, file, cb) {
        checkImageFileType(file, cb);
    }
}).single('image');

// Init upload for multiple images
const uploadMultiple = multer({
    storage: storageImages,
    fileFilter: function (req, file, cb) {
        checkImageFileType(file, cb);
    }
}).array('images', 10); // Up to 10 images

// Init upload for single video
const uploadVideo = multer({
    storage: storageVideos,
    fileFilter: function (req, file, cb) {
        checkVideoFileType(file, cb);
    }
}).single('video');

module.exports = {
    uploadSingle,
    uploadMultiple,
    uploadVideo
};
