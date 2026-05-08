const db = require('../database');

class Borrow {
    //ดึงข้อมูลการยืมทั้งหมด พร้อม join ตาราง books และ members

    static getAll(callback) {
        const sql = `
            SELECT borrows.id, books.title, members.name, 
                   borrows.borrow_date, borrows.return_date
            FROM borrows
            INNER JOIN books ON borrows.book_id = books.id
            INNER JOIN members ON borrows.member_id = members.id
            ORDER BY borrows.id ASC
        `;
        db.all(sql, [], (err, rows) => {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        });
    }

    // เพิ่มข้อมูลการยืม
    static create(data, callback) {
        const { book_id, member_id, borrow_date } = data;
        db.run(
            "INSERT INTO borrows (book_id, member_id, borrow_date, return_date) VALUES (?, ?, ?, NULL)",
            [book_id, member_id, borrow_date],
            function (err) {
                if (!err) {
                    // ลดจำนวน available ของหนังสือ
                    db.run(
                        "UPDATE books SET available = available - 1 WHERE id = ? AND available > 0",
                        [book_id],
                        (updateErr) => {
                            callback(updateErr);
                        }
                    );
                } else {
                    callback(err);
                }
            }
        );
    }

    // คืนหนังสือ
    static returnBook(id, callback) {
        const returnDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        db.get("SELECT book_id FROM borrows WHERE id = ?", [id], (err, row) => {
            if (err) return callback(err);
            if (!row) return callback(new Error('Borrow record not found'));

            db.run(
                "UPDATE borrows SET return_date = ? WHERE id = ?",
                [returnDate, id],
                (updateErr) => {
                    if (updateErr) return callback(updateErr);

                    // เพิ่มจำนวน available ใน books
                    db.run(
                        "UPDATE books SET available = available + 1 WHERE id = ?",
                        [row.book_id],
                        callback
                    );
                }
            );
        });
    }
}

module.exports = Borrow;
