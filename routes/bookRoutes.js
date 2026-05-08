const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

//แสดงรายการหนังสือ
router.get('/', bookController.listBooks);

//เพิ่มหนังสือ
router.get('/add', bookController.showAddForm);
router.post('/add', bookController.addBook);

//แก้ไข
router.get('/edit/:id', bookController.showEditForm);
router.post('/edit/:id', bookController.updateBook);

//ลบหนังสือ
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;
