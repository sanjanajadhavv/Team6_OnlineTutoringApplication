const express = require("express");
const router = express.Router();
const StudentService = require('../services/studentService')
bodyParser = require('body-parser').json();
// GET ALL
router.get('/', async (req, res) => {
    try {
        const student = await StudentService.getAll()
        res.status(200).json(student)
    }catch (err){
        res.status(500).json({ message: err.message});
    }
});
// GET ONE
router.get('/:id', (req, res) => {
    (async () => {
        try {
            const student = await StudentService.getOne(req.params.id)
            console.log("\nStudent routes.get(/:id): Student: " + student)
            // res.status(200).json(student)
            // const student = await searchItem('User', 'username', 'deedee')
            res.status(200).json(student)
        }catch (err){
            res.status(500).json({ message: err.message});
        }
    })()
});
// CREATE ONE
router.post('/', bodyParser, async(req, res) => {
    try {
        console.log("Student controller post req.body: " + JSON.stringify(req.body))
        const newStudent = await StudentService.create(JSON.stringify(req.body));
        await res.status(201).json(newStudent)
    }catch (err) {
        res.status(400).json({ message: err.message});
    }
});
// UPDATE ONE
router.patch('/:id', bodyParser, async (req, res) => {
    try {
        console.log("Student controller patch req.body: " + JSON.stringify(req.body))
        const newStudent = await StudentService.update(JSON.stringify(id, req.params.id));
        if (newStudent == false)
            res.status(304).json({message: "Unable to update student"})
        else
            res.status(201).json(newStudent)
    }catch (err) {
        res.status(400).json({ message: err.message});
    }
});
// DELETE ONE
router.delete('/:id', async (req, res) => {
    try {
        const student = await StudentService.delete(req.params.id)
        res.status(200).json(student)
    }catch (err){   
        res.status(500).json({ message: err.message});
    }
})
module.exports = router