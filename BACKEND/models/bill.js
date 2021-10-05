const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
    
    bill_no:{
        type: String,
        required:true
    },
    Bill_date:{
        type: String,
        required:true
    },
    P_ID:{
        type: String,
        required:true
    },
    Ad_date:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    no_of_days:{
        type: Number,
        required:true
    },
    room_type:{
        type: String,
        required:true
    },
    room_charges_1_day:{
        type: Number,
        required:true
    },
    total_room_charge:{
        type: Number,
        required:true
    },
    doctor_charges:{
        type: Number,
        required:true
    },
    other:{
        type: String,
        
    },
    total_amount:{
        type: Number,
        required:true
    }
})

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
