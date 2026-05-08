const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.get('/', memberController.listMembers);
router.get('/add', memberController.showAddForm);
router.post('/add', memberController.addMember);
router.get('/edit/:id', memberController.showEditForm);
router.post('/edit/:id', memberController.updateMember);
router.get('/delete/:id', memberController.deleteMember);

module.exports = router;
