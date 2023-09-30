const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/Books")
        .then(() => {
            console.log("Connected DB Sucessfully....")
        })
        .catch((err) => {
            console.log(err)
            console.log(" DB Errors ....")

        })
}
module.exports = connectDB