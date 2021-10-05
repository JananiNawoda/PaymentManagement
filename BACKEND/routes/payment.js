const router = require("express").Router();
let Payment = require("../models/payment");

//create
router.route("/add").post((req,res) =>{
    const bill_no = req.body.bill_no;
    const receipt_no = req.body.receipt_no;
    const p_date = req.body.p_date;
    const p_mode = req.body.p_mode;
    const p_type = req.body.p_type;
    const p_amount = Number(req.body.p_amount);
    const total_amount = Number(req.body.total_amount);
    const balance = Number(req.body.balance);
   

    const newPayment = new Payment({
        bill_no,
        receipt_no,
        p_date,
        p_mode,
        p_type,
        p_amount,
        total_amount,
        balance
    })

    newPayment.save().then(()=> {
        res.json("Payment Added")
    }).catch ((err)=> {
        console.log(err);
    })
})

//retrieve all 
router.route("/display").get((req,res)=> {
    Payment.find().then((Payment)=> {
        res.json(Payment)
    }).catch((err) =>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{bill_no,receipt_no,p_date,p_mode,p_type,p_amount,total_amount,balance} = req.body;

    const updatePayment={
        bill_no,
        receipt_no,
        p_date,
        p_mode,
        p_type,
        p_amount,
        total_amount,
        balance
    }
    const update = await Payment.findByIdAndUpdate(userId,updatePayment)
    .then(()=> {
        res.status(200).send({status:"Payment Updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status:"Error with updating data in payments", error: err.message});
    })
})

//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Payment.findByIdAndDelete(userId)
    .then(()=> {
        res.status(200).send({status:"Payment Deleted!"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete payments", error:err.message});
    })
})

//retrieve one
router.route("/get/:id").get(async(req,res)=> {
    let userId = req.params.id;

    const payment = await Payment.findById(userId)
    .then((payment)=> {
        res.status(200).send({status:"Payment fetched",payment})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})
router.route("/endpoint").get(async(req,res)=> {
    //  let userId = req.params.id;
    Payment.findOne().sort({$natural:-1})
          .then((Payment) =>{
          
          let increasedNum = Number(Payment.receipt_no.replace('R','')) + 1;
          let kmsStr = Payment.receipt_no.substr(0,2);
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