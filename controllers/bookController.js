const Book = require('../models/bookModel');

exports.listBooks = (req, res) => {
    Book.getAll((err, books) => {
        if (err) return res.status(500).send("DB Error");
        res.render('books/list', { books });
    });
};

exports.showAddForm = (req, res) => {
    res.render('books/add');
};

exports.addBook = (req, res) => {
    Book.create(req.body, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/books');
    });
};

exports.showEditForm = (req, res) => {
    Book.getById(req.params.id, (err, book) => {
        if (err) return res.status(500).send("DB Error");
        res.render('books/edit', { book });
    });
};

exports.updateBook = (req, res) => {
    Book.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/books');
    });
};

exports.deleteBook = (req, res) => {
    Book.delete(req.params.id, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/books');
    });
};
