const db = require('../database');

class Member {
    static getAll(callback) {
        db.all("SELECT * FROM members", [], callback);
    }

    static getById(id, callback) {
        db.get("SELECT * FROM members WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const { name, email, phone } = data;
        db.run(
            "INSERT INTO members (name, email, phone) VALUES (?, ?, ?)",
            [name, email, phone],
            callback
        );
    }

    static update(id, data, callback) {
        const { name, email, phone } = data;
        db.run(
            "UPDATE members SET name = ?, email = ?, phone = ? WHERE id = ?",
            [name, email, phone, id],
            callback
        );
    }

    static delete(id, callback) {
        db.run("DELETE FROM members WHERE id = ?", [id], callback);
    }
}

module.exports = Member;
