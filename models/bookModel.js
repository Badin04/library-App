const db = require('../database');

class Book {
    static getAll(callback) {
        db.all("SELECT * FROM books", [], callback);
    }

    static getById(id, callback) {
        db.get("SELECT * FROM books WHERE id = ?", [id], callback);
    }

    static create(data, callback) {
        const { title, author, year, available } = data;
        db.run(
            "INSERT INTO books (title, author, year, available) VALUES (?, ?, ?, ?)",
            [title, author, year, available],
            callback
        );
    }

    static update(id, data, callback) {
        const { title, author, year, available } = data;
        db.run(
            "UPDATE books SET title = ?, author = ?, year = ?, available = ? WHERE id = ?",
            [title, author, year, available, id],
            callback
        );
    }

    static delete(id, callback) {
        db.run("DELETE FROM books WHERE id = ?", [id], callback);
    }
}

module.exports = Book;
