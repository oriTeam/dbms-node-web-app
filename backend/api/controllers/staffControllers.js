'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM staff LIMIT 1000000'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getone: (req, res) => {
        console.log('1');
        let sql = 'SELECT * FROM staff LIMIT 1';
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    condition: (req, res) => {
        console.log(req.body);
        let sql = 'SELECT * FROM staff WHERE name = ';
        let name = req.params.name.replace('%20', ' ');
        sql = sql + name;
        db.query(sql, (err, response) => {
            console.log(sql);
            if (err) throw err;
            res.json(response)
        })
    },
    detail: (req, res) => {
        console.log(req.body);
        let sql = 'SELECT * FROM staff WHERE staff_id = ?'
        db.query(sql, [req.params.staff_id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let Id = req.params.staff_id;
        let sql = 'UPDATE staff SET ? WHERE staff_id = ?'
        db.query(sql, [data, staff_id], (err, response) => {
            if (err) throw err
            res.json({
                message: 'Update success!'
            })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO staff SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({
                message: 'Insert success!'
            })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM staff WHERE staff_id = ?'
        db.query(sql, [req.params.staff_id], (err, response) => {
            if (err) throw err
            res.json({
                message: 'Delete success!'
            })
        })
    }
}