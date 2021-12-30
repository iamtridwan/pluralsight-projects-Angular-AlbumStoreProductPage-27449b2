const express = require("express");

const app = express();

const bookRoute = express.Router();
let Book = require("../model/Book");

//Add book

bookRoute.route("/add-book").post((req, res, next) => {
  Book.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Book
bookRoute.route("/").get((req, res) => {
  Book.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


// get a book
bookRoute.route('/read-book/:id').get((req, res) => {
  Book.findById(req.params.id, (error, data) => {
      if(error){
          return next(error)
      }
      else{
          res.json(data)
      }
  })
})

// Update book

bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set:req.body
    }, (error, data) => {
        if(error) {
             console.log(error);
            return next(error);
           
        }
        else{
            res.json(data)
            console.log('Book updated successfully')
        }
    })
})


// Delete Book

bookRoute.route('/dalete-book/:id').delete((req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }
        else{
            res.status(200).json({msg: data})
        }
    })
})

module.exports = bookRoute;