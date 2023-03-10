var db = require('D:/nodejs_basic/dbconection.js');

var SinhVien = {
    getAllSinhVien: function (callback) {
        return db.query("Select * from sinhvien", callback);
    },
    getSinhVienById: function (id, callback) {
        return db.query("select * from sinhvien where Id=?", [id], callback);
    },
    addSV: function (sinhvien, callback) {
        return db.query("Insert into sinhvien(name,class,dob) values(?,?,?)", [sinhvien.name, sinhvien.class, sinhvien.dob], callback);
    },
    deleteSV: function (id, callback) {
        return db.query("delete from sinhvien where Id=?", [id], callback);
    },
    updateSV: function (id, sinhvien, callback) {
        return db.query("update sinhvien set name=?,class=?,dob=? where Id=?", [sinhvien.name, sinhvien.class, sinhvien.dob, id], callback);
    }
};
module.exports = SinhVien;
