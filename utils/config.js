require('dotenv').config();

// create necessary variables
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// export the variables
module.exports = {
    MONGODB_URI,
    PORT
};