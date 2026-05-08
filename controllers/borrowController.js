const Borrow = require('../models/borrowModel');
const Book = require('../models/bookModel');
const Member = require('../models/memberModel');

exports.listBorrows = (req, res) => {
    Borrow.getAll((err, borrows) => {
        if (err) return res.status(500).send("DB Error");
        res.render('borrows/list', { borrows });
    });
};

exports.showBorrowForm = (req, res) => {
    Book.getAll((err1, books) => {
        if (err1) return res.status(500).send("DB Error");
        Member.getAll((err2, members) => {
            if (err2) return res.status(500).send("DB Error");
            res.render('borrows/borrow', { books, members });
        });
    });
};

exports.addBorrow = (req, res) => {
    const borrowData = {
        book_id: req.body.book_id,
        member_id: req.body.member_id,
        borrow_date: new Date().toISOString().split('T')[0]
    };
    Borrow.create(borrowData, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/borrows');
    });
};

exports.returnBook = (req, res) => {
    Borrow.returnBook(req.params.id, (err) => {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true });
    });
};
