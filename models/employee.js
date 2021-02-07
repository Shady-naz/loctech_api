const mongoose = require ("mongoose");

const employeeSchema = new mongoose.Schema ({
    personalData: {
        lastname: String,
        firstname: String,
        othername: String,
        gender: String,
        maritalStatus: String,
        email: String,
        phone: Number,
        dateofbirth: Date,
        nationality: String,
        currentAddress: String,
        permanentAddress: String,
        state: String,
        town: String
    },
    employeeInfo: {
        staffId: String,
        officialemail: String,
        employmentType: String,
        employmentDesignation: String,
        employmentDepartment: String,
        employeeStatus: String,
        employeeConfirmation: String,
        employeeLocation: String,
        grossSalary: Number,
        dateofemployment: Date,
        dateofdeparture: Date,
        refereeDetails: {
            referenceName1: String,
            referenceAddress1: String,
            referencePhone1: Number,
            referenceName2: String,
            referenceAddress2: String,
            referencePhone2: Number,
        }
    },
    bankDetails: {
        bankName: String,
        accountNumber: String,
        bvn: Number,
        pensionManager: String,
        pensionNumber: Number
    },
    otherData: {
        spouseDetails: {
            lastname: String,
            firstname: String,
            phone: Number,
            email: String,
            children: Number || String
        },
        nextOfKin: {
            firstname: String,
            lastname: String,
            phone: Number,
            address: String
        },
        emergencyContact: {
            emergencyName1: String,
            emergencyAddress1: String,
            emergencyPhone1: Number,
            emergencyName2: String,
            emergencyAddress2: String,
            emergencyPhone2: Number
        }
    },
    remainingData: {
        spouseDetails: {
            lastname: String,
            firstname: String,
            phone: Number,
            email: String,
            children: Number || String
        },
        nextOfKin: {
            firstname: String,
            lastname: String,
            phone: Number,
            address: String
        },
        emergencyContact: {
            emergencyName1: String,
            emergencyAddress1: String,
            emergencyPhone1: Number,
            emergencyName2: String,
            emergencyAddress2: String,
            emergencyPhone2: Number
        }
    }
});

module.exports = mongoose.model("Employee", employeeSchema)