const router = require("express").Router();
let Bill = require("../models/bill");

//create 
router.route("/add").post((req,res) => {
    const bill_no = req.body.bill_no;
    const Bill_date = req.body.Bill_date;
    const P_ID = req.body.P_ID;
    const Ad_date = req.body.Ad_date;
    const name = req.body.name;
    const no_of_days = Number(req.body.no_of_days);
    const room_type = req.body.room_type;
    const room_charges_1_day = Number(req.body.room_charges_1_day);
    const total_room_charge = Number(req.body.total_room_charge);
    const doctor_charges = Number(req.body.doctor_charges);
    const other = req.body.other;
    const total_amount = Number(req.body.total_amount);
   // const receipt_no = req.body.receipt_no;

    const newBill = new Bill({
        bill_no,
        Bill_date,
        P_ID,
        Ad_date,
        name,
        no_of_days,
        room_type,
        room_charges_1_day,
        total_room_charge,
        doctor_charges,
        other,
        total_amount,
        //receipt_no
    })
    newBill.save().then(() => {
        res.json("Bill Added")
    }).catch((err) =>{
        console.log(err);
    })
})

//retrieve all
router.route("/display").get((req,res) =>{
    Bill.find().then((Bill) =>{
        res.json(Bill)
    }).catch((err)=>{
        console.log(err)
    })
})


//update
router.route("/update/:id").put(async(req,res)=> {
    let userId = req.params.id;
    const {bill_no,Bill_date,P_ID,Ad_date,name,no_of_days, room_type, room_charges_1_day, total_room_charge, doctor_charges, other, total_amount}= req.body;

    const updateBill = {
        bill_no,
        Bill_date,
        P_ID,
        Ad_date,
        name,
        no_of_days,
        room_type,
        room_charges_1_day,
        total_room_charge,
        doctor_charges,
        other,
        total_amount
        
    }
    const update = await Bill.findByIdAndUpdate(userId,updateBill)
    .then(()=> {
        res.status(200).send({status:"Bill updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message})
    })
})

//delete
router.route("/delete/:id").delete(async(req,res)=> {
    let userId = req.params.id;

    await Bill.findByIdAndDelete(userId)
    .then(()=> {
        res.status(200).send({status:"Bill Deleted!"});
    }).catch((errr) =>{
        console.log(errr.message);
        res.status(500).send({status:"Error with delete bill",error:errr.message});
    })
})

//retrieve one
router.route("/get/:id").get(async(req,res)=> {
    let userId = req.params.id;

    const bill = await Bill.findById(userId)
    .then((bill)=> {
        res.status(200).send({status:"Bill fetched",bill})
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})

router.route("/endpoint").get(async(req,res)=> {
  //  let userId = req.params.id;
  Bill.findOne().sort({$natural:-1})
        .then((Bill) =>{
        
        let increasedNum = Number(Bill.bill_no.replace('B','')) + 1;
        let kmsStr = Bill.bill_no.substr(0,2);
        for(let i=0; i< 4 - increasedNum.toString().length; i++){
          kmsStr = kmsStr+'0';
        }
        kmsStr = kmsStr + increasedNum.toString();
        console.log(kmsStr);
        res.json(kmsStr);
        }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with get user", error:err.message});
    })

})

module.exports = router;