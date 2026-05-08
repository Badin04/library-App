const Member = require('../models/memberModel');

exports.listMembers = (req, res) => {
    Member.getAll((err, members) => {
        if (err) return res.status(500).send("DB Error");
        res.render('members/list', { members });
    });
};

exports.showAddForm = (req, res) => {
    res.render('members/add');
};

exports.addMember = (req, res) => {
    Member.create(req.body, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/members');
    });
};

exports.showEditForm = (req, res) => {
    Member.getById(req.params.id, (err, member) => {
        if (err) return res.status(500).send("DB Error");
        res.render('members/edit', { member });
    });
};

exports.updateMember = (req, res) => {
    Member.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/members');
    });
};

exports.deleteMember = (req, res) => {
    Member.delete(req.params.id, (err) => {
        if (err) return res.status(500).send("DB Error");
        res.redirect('/members');
    });
};
