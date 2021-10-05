import React, {useState,useEffect} from "react"
import axios from "axios";


export default function AddPayments(){
        const[bill_no, setbill_no] = useState("");
        const[ receipt_no, setreceipt_no] = useState("");
        const[p_date, setp_date] = useState("");
        const[p_mode, setp_mode] = useState("");
        const[p_type, setp_type] = useState("");
        const[p_amount, setp_amount] = useState("");
        const[total_amount, settotal_amount] = useState(""); 
        const[balance, setbalance] = useState("");
        

    function sendData(e){
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

        //console.log(newBill);
        axios.post("http://localhost:8000/payment/add",newBill).then(()=>{
            alert("Payment Added")
        }).catch((err)=>{
            alert(err)
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/payment/endpoint").then(res => {
            //console.log(res.data);
            setreceipt_no(res.data);
            })
        },
 [])

    return(
        <div className='body'>
       <div className='appointment-container'>
           <div className='title'>Hospital Payment Invoice</div>
           <div className='container'>
           <form onSubmit={sendData}>
                <div className='user-details'>

                 <div className='input-box'>
                        <label className='details' htmlFor='receipt_no'>Reciept No.</label>
                        <div className='input-group'>
                        <input type='text' value={receipt_no} name='receipt_no' readOnly/>
                        </div>
                    </div>
                   
                    <div className='input-box'>
                        <label className='details' htmlFor='bill_no'>Bill No.</label>
                        <div className='input-group'>
                        <input type='text' id='bill_no' name='bill_no' placeholder='Enter Bill No' required
                        onChange={(e)=>{
                            setbill_no(e.target.value);
                    }}/>
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
                }}/>
                        </div>
                    </div>
                    
                    <div className='input-box'>
                        <label className='details' htmlFor=' p_mode'>Paid Mode</label>
                        <div className='input-group'>
                        <select id=' p_mode' name=' p_mode' 
                        onChange={(e)=>{
                            setp_mode(e.target.value);
                    }}>
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
                    }}>
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
                        settotal_amount(e.target.value);
                }}/>
                        <i className='fa fa-list left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
                    
                    <div className='input-box'>
                        <label className='details' htmlFor=' p_amount'>Paid Amount</label>
                        <div className='input-group'>
                        <input type='text' id=' p_amount' name=' p_amount' placeholder='Enter Paid Amount' required
                         onChange={(e)=>{
                            setp_amount(e.target.value);
                    }}/>
                        <i className='fa fa-no_of_days-card-o left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
                
                    
                    <div className='input-box'>
                        <label className='details' htmlFor='balance'>Balance</label>
                        <div className='input-group'>
                        <input type='text' id='balance' name='balance' placeholder='Enter Balance' 
                       onChange={(e)=>{
                        setbalance(e.target.value);
                }}/>
                        <i className='fa fa-list left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
             
                </div>
                <div className='button'>
                    <input type='reset' value='Cancel'/>
                    <input type='submit' value='Submit'/>
                </div>
           </form>
           </div>
        </div>
       </div>
    )
}