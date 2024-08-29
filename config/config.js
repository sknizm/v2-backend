require("dotenv").config();

module.exports = {
    port:process.env.PORT,
    mongo_url:process.env.MONGO_URL,
    base_url:process.env.BASE_URL
}