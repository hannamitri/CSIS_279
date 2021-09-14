
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
var moment = require("moment-timezone");

// MYSQL DATABASE CONNECTION
const connection = require('../config/database.config.js');


exports.getAll = async (req, res) => {
    res.status(200).send({msg: "hello from the server."})
}

const loadUsers = (res) => {
    let sql = "select user_id, Name, user_name, user_dob, users.Code from users join country on users.Code = country.Code";
    console.log(sql);
    connection.query(sql, (err, result) => {
        res.status(200).send(result);
    })
}

const test = () => {
    console.log("Thttps://github.com/charbelfakhry/CSIS_279");
}




exports.updateUser = (req, res) => {

    const { dataId, dataCountryCode, dataName, dataDOB } = req.body;
    console.log(req.body)

    let sql = `UPDATE users SET users.Code="${dataCountryCode}",  user_name="${dataName}", user_dob="${moment(dataDOB).format("YYYY-MM-DD")}" WHERE user_id=${dataId}`;
    console.log(sql)

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)

    })

}

exports.insertUser = (req, res) => {


    const { dataCountryCode, dataName, dataDOB } = req.body;
    console.log(req.body)

    let sql = `INSERT INTO users (users.Code, user_name,user_dob ) VALUES ("${dataCountryCode}","${dataName}" ,"${moment(dataDOB).format("YYYY-MM-DD")}")`;
    console.log(sql)

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)

    })

}

exports.deleteUser = (req, res) => {
    console.log(req.body)
    const { id } = req.body
    let sql = `delete from users WHERE user_id=${id}`;
    connection.query(sql, (err, result) => {


        if (err) throw err;
        res.status(200).send(result)

    })
}

