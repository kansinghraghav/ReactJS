const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const assignmentRoutes = express.Router();
const PORT = 4000;

let Assignment = require('./assignment.model') 

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/assignments', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

assignmentRoutes.route('/').get(function(req, res) {
    Assignment.find(function(err, assignments) {
        if (err) {
            console.log(err);
        } else {
            res.json(assignments);
        }
    });
});

assignmentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Assignment.findById(id, function(err, assignment) {
        res.json(assignment);
    });
});

assignmentRoutes.route('/update/:id').post(function(req, res) {
    Assignment.findById(req.params.id, function(err, assignment) {
        if (!assignment)
            res.status(404).send("data is not found");
        else
            assignment.assignment_description = req.body.assignment_description;
            assignment.assignment_responsible = req.body.assignment_responsible;
            assignment.assignment_priority = req.body.assignment_priority;
            assignment.assignment_completed = req.body.assignment_completed;

            assignment.save().then(assignment => {
                res.json('assignment updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

assignmentRoutes.route('/add').post(function(req, res) {
    let assignment = new Assignment(req.body);
    assignment.save()
        .then(assignment => {
            res.status(200).json({'assignment': 'assignment added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new assignment failed');
        });
});

app.use('/assignments', assignmentRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});