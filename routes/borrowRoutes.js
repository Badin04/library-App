const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

router.get('/', borrowController.listBorrows);
router.get('/borrow', borrowController.showBorrowForm);
router.post('/borrow', borrowController.addBorrow);

// แก้ไขตรงนี้ให้รองรับ POST สำหรับคืนหนังสือ
router.post('/return/:id', borrowController.returnBook);

module.exports = router;
