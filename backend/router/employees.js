const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(employees => {  
            res.json(employees); 
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const newEmployee = new Employee(req.body);
    newEmployee.save()
        .then(() => {
            console.log('New employee added.'); 
            res.json('New employee added.')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;