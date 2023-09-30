
const mongoose = require("mongoose");

class BookModel {
    constructor() {
        this.schema = new mongoose.Schema({
            name: { type: String },
            price: { type: Number },
            Publisher: { type: String }
        });

        this.model = mongoose.model('table_Books', this.schema);
    }
}

const bookmodel = new BookModel();
module.exports = bookmodel;
