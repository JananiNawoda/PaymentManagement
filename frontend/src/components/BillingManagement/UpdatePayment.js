import React, { useState,useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios";

import swal from 'sweetalert';

export default function UpdatePayment() {
    const { id } = useParams();

    const[bill_no, setbill_no] = useState("");
    const[ receipt_no, setreceipt_no] = useState("");
    const[p_date, setp_date] = useState("");
    const[p_mode, setp_mode] = useState("");
    const[p_type, setp_type] = useState("");
    const[p_amount, setp_amount] = useState("");
    const[total_amount, settotal_amount] = useState(""); 
    const[balance, setbalance] = useState("");
   

    useEffect(() => {
      async function getData(){
            const result = await axios.get(`http://localhost:8000/payment/get/${id}`)

            let PaymentData = result.data.payment
            if (PaymentData) {
                setbill_no(PaymentData.bill_no);
                setreceipt_no(PaymentData.receipt_no);
                setp_date(PaymentData.p_date);
                setp_mode(PaymentData.p_mode);
                setp_type(PaymentData.p_type);
                setp_amount(PaymentData.p_amount);
                settotal_amount(PaymentData.total_amount);
                setbalance(PaymentData.balance);
                
            } else {
                
            }
        }
        getData()
    }, [])

    
    function sendData(e) {
        e.preventDefault();

        const newBill = {
            bill_no,
            receipt_no,
            p_date,
            p_mode,
            p_type,
            p_amount,
            total_amount,
            balance
        }
        axios.put(`http://localhost:8000/payment/update/${id}`, newBill).then(() => {
            swal({
                title: "Success!",
                text: "Payment Updated Successfully",
                icon: "success",
                button: "Ok",
              });
           // alert("Payment Updated")
            //window.location = "/bills"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }
  
 
return (

    <div className='body'>
    <div className='appointment-container'>
        <div className='title'> Update Hospital Payment Invoice</div>
        <div className='container'>
        <form onSubmit={sendData}>
             <div className='user-details'>

              <div className='input-box'>
                     <label className='details' htmlFor='receipt_no'>Reciept No.</label>
                     <div className='input-group'>
                     <input type='text' value={receipt_no} name='receipt_no'  readOnly/>
                     </div>
                 </div>
                
                 <div className='input-box'>
                     <label className='details' htmlFor='bill_no'>Bill No.</label>
                     <div className='input-group'>
                     <input type='text' id='bill_no' name='bill_no' placeholder='Enter Bill No' required
                     onChange={(e)=>{
                         setbill_no(e.target.value);
                 }}value={bill_no}/>
                     <i className='fa fa-user left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                
                 <div className='input-box'>
                     <label className='details' htmlFor='p_date'>Paid Date</label>
                     <div className='input-group'>
                     <input type='date' id='date' name='date' required
                    onChange={(e)=>{
                     setp_date(e.target.value);
             }}value={p_date}/>
                     </div>
                 </div>
                 
                 <div className='input-box'>
                     <label className='details' htmlFor=' p_mode'>Paid Mode</label>
                     <div className='input-group'>
                     <select id=' p_mode' name=' p_mode' 
                     onChange={(e)=>{
                         setp_mode(e.target.value);
                 }}value={p_mode}>
                         <option value='CASH'>CASH</option>
                         <option value='CARD'>CARD</option>
                     </select>
                     <i className='fa fa-list left-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='p_type'>Paid Type</label>
                     <div className='input-group'>
                     <select id='p_type' name='p_type'
                     onChange={(e)=>{
                         setp_type(e.target.value);
                 }}value={p_type}>
                         <option value='Admission Advanced'>Admission Advanced</option>
                         <option value='Outstanding'>Outstanding</option>
                     </select>
                     <i className='fa fa-list left-icon'/>
                     </div>
                 </div>

                 <div className='input-box'>
                     <label className='details' htmlFor='total_amount'>Total Amount</label>
                     <div className='input-group'>
                     <input type='text' id='total_amount' name='total_amount' placeholder='Enter Total Amount' required
                    onChange={(e)=>{
                      //  setTotalAmount(e.target.value)
                     settotal_amount(e.target.value);
             }}value={total_amount}/>
                     <i className='fa fa-list left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 
                 <div className='input-box'>
                     <label className='details' htmlFor=' p_amount'>Paid Amount</label>
                     <div className='input-group'>
                     <input type='text' id=' p_amount' name=' p_amount' placeholder='Enter Paid Amount' required
                      onChange={(e)=>{
                       // setPaidAmount(e.target.value)
                         setp_amount(e.target.value);
                 }}value={p_amount}/>
                     <i className='fa fa-no_of_days-card-o left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
             
                 
                 <div className='input-box'>
                     <label className='details' htmlFor='balance'>Balance</label>
                     <div className='input-group'>
                     <input type='text' id='balance' name='balance' placeholder='Enter Balance' 
                    onChange={(e)=>{
                        //onBalance(e.target.value)
                     setbalance(e.target.value);
             }}value={balance}/>
                     <i className='fa fa-list left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
          
             </div>
             <div className='button'>
                 <button type='reset' class="btn btn-primary" value='Cancel'>Cancel</button>&nbsp;&nbsp;
                 <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
             </div>
        </form>
        </div>
     </div>
    </div>
 )


           // <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
       

   

        }