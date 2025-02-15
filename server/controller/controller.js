
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
var moment = require("moment-timezone");

// MYSQL DATABASE CONNECTION
const connection = require('../config/database.config.js');


exports.getAll = async (req, res) => {
    let tableName = "users";
    let sql = `SELECT * FROM ${tableName}`;
    connection.query(sql, (error, result)=>{
        if(error) throw error;
        res.status(200).send(result);
    })

}

const createUsers = () =>{
    let sqls = [];
    for(let i = 0; i < 10; i++){
        let sql = `INSERT INTO USERS (user_name, user_username, user_password, user_occupation, user_age, user_hobby) values \
        ("name${i}", "username${i}", "password${i}", "occupation${i}", "age${i}", "hobby${i}")`;
        sqls.push(sql);
    }

    for(let i in sqls){
        const query = sqls[i];
        connection.query(query, (error, result)=>{
            if(error) throw error;
        });
    }
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
    console.log("another test");
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
    const { user_id } = req.body
    let sql = `delete from users WHERE user_id=${user_id}`;
    console.log(sql);
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)

    })
}

