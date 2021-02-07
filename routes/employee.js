const   express     = require ("express"),
        Employee    = require ("../models/employee"),
        router      = express.Router();

router.get ("/employee", async (req, res) => {
    try {
        const allEmployees = await Employee.find({})
            if (allEmployees) {
                res.json ({allEmployees})
            } else {
                res.json({"msg": "No employees were found in the Database"})
            }
    }
    catch (err) {
        res.json ({"error": err}) 
    }
});

router.get ("/employee/:id", async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if (employee) {
            res.json ({employee})
        } else {
            res.json({"msg": "Employee does not exist"})
        }
    }
    catch (err) {
        res.json ({"error": err})
    }
});

router.post ("/employee", async (req, res) => {
    try { 
        const newEmployee = new Employee (req.body)
        await newEmployee.save();
        if (newEmployee) {
            res.json ({newEmployee, "success": true, "msg": "Successfully added employee to the Database"})
        } else {
            res.json({"msg": "Failed to add Employee to the Database"})
        }
    }
    catch (err) {
        res.json ({"error": err})
    }
});

module.exports = router;