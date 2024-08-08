const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    firstName:{
        type:String,
        requred:[true,'first name is required']
    },
    lastName:{
        type:String,
        requred:[true,'last name is required']
    },
    phone:{
        type:String,
        requred:[true,'phone no is required']
    },
    email:{
        type:String,
        requred:[true,'email is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        requred:[true,'address is required']
    },
    specialization:{
        type:String,
        required:[true,'specialization is required']
    },
    experience:{
        type:String,
        required:[true,'experienceis required']
    },
    feePerCunsaltation:{
        type:Number,
        required:[true,'fee is required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timing:{
        type:Object,
        required:[true,'work timing is required']
    },
},{
    timestamps:true
});

const doctorModels = mongoose.model('doctors',doctorSchema);
module.exports = doctorModels