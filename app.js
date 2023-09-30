const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const connectDB = require('./connectDB');

const app = express();
//  mid 
app.set('view engine', 'ejs')
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
connectDB()


app.get('/', userController.getBooks)
app.delete('/delete/:id', userController.deleteBooks);
app.post('/update/:id', userController.updateBooks);
app.post('/create-book', userController.createBook);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server Start on ${port} \n http://localhost:${port}`)
})