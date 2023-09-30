
const bookmodel = require('../models/booksModel.js');

// const Books = [
//     { price: 10, name: "In Search of Lost Time ", Publisher: 'Marcel Proust' },
//     { price: 75, name: "Ulysses", Publisher: 'James Joyce'},
//     { price: 12, name: "Don Quixote", Publisher: 'Miguel de Cervantes'},
//     { price: 68, name: "One Hundred Years of Solitude", Publisher: 'Gabriel Garcia Marquez'},
//     { price: 5, name: "The Great Gatsby", Publisher: ' F. Scott Fitzgerald' },
//     { price: 8, name: "katiksinh", Publisher: 'Wikipedia' },
// ]

class UserController {

    // Get Books Method
    async getBooks(req, res) {
        try {
            const Books = await bookmodel.model.find({});
            if (!Books || Books.length === 0) {
                return res.status(404).json({ message: 'No books found' });
            }
            return res.status(200).render('layout', { Books });
        } catch (error) {
            console.error('Error retrieving books:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Delete Books Method
    async deleteBooks(req, res) {
        try {
            const { id } = req.params;
            const result = await bookmodel.model.findByIdAndDelete({ _id: id });
            if (!result) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Upadate Books Method
    async updateBooks(req, res) {
        try {
            const { id } = req.params;
            const { name, price, publisher } = req.body;
            const result = await bookmodel.model.updateOne({ _id: id }, { name, price, publisher });
            if (result.nModified === 0) {
                return res.status(404).json({ message: 'Book not found or no changes were made' });
            }
            return res.redirect('/');
        } catch (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }


    // create BooKs Method
    async createBook(req, res) {
        try {
            const { name, price, publisher } = req.body;
            const newBook = new bookmodel.model({ name, price, publisher });
            await newBook.save();
            return res.status(201).json({ message: 'Book created successfully', book: newBook });
        } catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }


}

const userController = new UserController();
module.exports = userController;