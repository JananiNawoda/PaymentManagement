import React, { useState,useEffect } from "react"
import { useParams } from "react-router";
import axios from "axios";

import swal from 'sweetalert';

export default function EditForm() {
    const { id } = useParams();

    const[bill_no, setbill_no] = useState("");
    const[Bill_date, setBdate] = useState("");
    const[P_ID, setP_ID] = useState("");
    const[Ad_date, setAdate] = useState("");
    const[name, setname] = useState("");
    const[no_of_days, setno_of_days] = useState("");
    const[room_type, setroom_type] = useState(""); 
    const[room_charges_1_day, setroom_charge_1_day] = useState("");
    const[doctor_charges, setdoctor_charges] = useState("");
    const[total_room_charge, settotal_room_charge] = useState("");  
    const[other, setother] = useState("");
    const[total_amount, settotal_amount] = useState("");
   

    useEffect(() => {
      async function getData(){
            const result = await axios.get(`http://localhost:8000/bill/get/${id}`)

            let billData = result.data.bill
            if (billData) {
                setbill_no(billData.bill_no);
                setBdate(billData.Bill_date);
                setP_ID(billData.P_ID);
                setAdate(billData.Ad_date);
                setname(billData.name);
                setno_of_days(billData.no_of_days);
                setroom_type(billData.room_type);
                setroom_charge_1_day(billData.room_charges_1_day);
                setdoctor_charges(billData.doctor_charges);
                settotal_room_charge(billData.total_room_charge);
                setother(billData.other);
                settotal_amount(billData.total_amount);
            } else {
                
            }
        }
        getData()
    }, [])

    
    function sendData(e) {
        e.preventDefault();

        const newBill = {
            bill_no,
            Bill_date,
            P_ID,
            Ad_date,
            name,
            no_of_days,
            room_type,
            room_charges_1_day,
            doctor_charges,
            total_room_charge,
            other,
            total_amount
        }
        axios.put(`http://localhost:8000/bill/update/${id}`, newBill).then(() => {
            //alert("Bill Added")
            swal({
                title: "Success!",
                text: "Bill Updated Successfully",
                icon: "success",
                button: "Ok",
              });
            //window.location = "/BillCRUD"

        }).catch((err) => {
            console.log(err.message)
            alert(err)
        })

    }

    // total amount = doctor charges + total room charges + other
    function calculateTotalAmount(value, ctrl){
        let _totAmount = 0;
        let _doctor_charges = doctor_charges ? parseInt(doctor_charges) : 0
        let _other =  other ? parseInt(other) : 0
        switch (ctrl) {
            case 'noOfDays':
                _totAmount = (_doctor_charges + value + parseInt(other) )
                settotal_amount(_totAmount);
                break;

            case 'roomCharge':
                // for decimal point change parseInt => parseFloat then parseFloat(value).toFixed(2) // 2 for 2 decimal point
                _totAmount = (_doctor_charges +value + parseInt(other) )
                settotal_amount(_totAmount);
                break;

            case 'doctorCharges':
                //change formula according to the doctor charges
                _doctor_charges = value ? parseInt(value) : 0
                _totAmount = (parseInt(_doctor_charges) + parseInt(total_room_charge) + parseInt(other) )
                settotal_amount(_totAmount);
                break;

            case 'other':
                //change formula according to the other charges
                _other = value ? parseInt(value) : 0
                _totAmount = (parseInt(_doctor_charges) + parseInt(total_room_charge) + parseInt(_other) )
                settotal_amount(_totAmount);
                break;
        
            default:
                break;
        }
        
    }

    // room charges = noOf days * room charge per day
    function totalRoomCharges(value, ctrl){

        let _totRoomCharges = 0;
        switch (ctrl) {
            case 'noOfDays':
                _totRoomCharges = (room_charges_1_day * value )
                settotal_room_charge(_totRoomCharges);
                calculateTotalAmount(_totRoomCharges, 'noOfDays')
                break;

            case 'roomCharge':
                _totRoomCharges = (value * no_of_days )
                settotal_room_charge(_totRoomCharges);
                calculateTotalAmount(_totRoomCharges, 'roomCharge')
                break;
        
            default:
                break;
        }
    }

    // for every input on change
    function setNoOfDays(value) {
        // set input value
        setno_of_days(value);
        // then call calculate total
        totalRoomCharges(value, 'noOfDays');
       
    }

    // for every input on change
    function setRoomCharges(value) {
        // set input value
        setroom_charge_1_day(value);
        // then call calculate total
        totalRoomCharges(value, 'roomCharge');
        
    }

    

    // for every input on change
    function setDoctorCharges(value) {
        // set input value
        setdoctor_charges(value);
        // then call calculate total
        calculateTotalAmount(value, 'doctorCharges');
        
    }

    // for every input on change
    function setOtherCharges(value) {
        // set input value
        setother(value);
        // then call calculate total
        calculateTotalAmount(value, 'other');
        
    }

    function onTotalRoomChargeChange(value) {
        
        calculateTotalAmount(value, 'roomCharge');
    }

return (


    <div className='body'>
    <div className='appointment-container'>
        <div className='title'>Hospital Bill</div>
        <div className='container'>
        <form onSubmit={sendData}>
             <div className='user-details'>
             
                
                 <div className='input-box'>  
                     <label className='details' htmlFor='bill_no'>Bill No.</label>
                     <div className='input-group'>
                     <input type='text' value={bill_no} name='bill_no'value={bill_no} readOnly />
                        <i className='fa fa-user left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='Bill_date'>Billing Date</label>
                     <div className='input-group'>
                     <input type='date' id='Bill_date' name='date' required
                     onChange={(e)=>{
                         setBdate(e.target.value);
                 }}value={Bill_date}/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='P_ID'>Patient ID</label>
                     <div className='input-group'>
                     <input type='text' id='P_ID' name='P_ID' placeholder='Enter Pateint ID' required    
                 onChange={(e)=>{
                     setP_ID(e.target.value);
                 }}value={P_ID}/>
                     <i className='fa fa-id-badge left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='Ad_date'>Admission Date</label>
                     <div className='input-group'>
                     <input type='date' id='Ad_date' name='date' required
                    onChange={(e)=>{
                     setAdate(e.target.value);
             }}value={Ad_date}/>
                     </div>
                 </div>
                 
                 <div className='input-box'>
                     <label className='details' htmlFor='name'>Full Name</label>
                     <div className='input-group'>
                     <input type='text' id='name' name='name' placeholder='Enter Patient Name' required
                     onChange={(e)=>{
                         setname(e.target.value);
                 }} value={name}/>
                     <i className='fa fa-user left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 
                 <div className='input-box'>
                     <label className='details' htmlFor='no_of_days'>No of Days</label>
                     <div className='input-group'>
                     <input type='text' id='no_of_days' name='no_of_days' placeholder='Enter No of Days' required
                      onChange={(e)=>{
                        setNoOfDays(e.target.value)
                         //setno_of_days(e.target.value);
                 }} value={no_of_days} />
                     <i className='fa fa-no_of_days-card-o left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='room_type'>Room Type</label>
                     <div className='input-group'>
                     <select id='room_type' name='room_type'
                     onChange={(e)=>{
                         setroom_type(e.target.value);
                 }}value={room_type}>
                         <option value='Normal'>Normal</option>
                         <option value='A/C'>A/C</option>
                         <option value='Single'>Single</option>
                         <option value='Double'>Double</option>
                     </select>
                     <i className='fa fa-list left-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='room_charges_1_day'>Room Charge/Day</label>
                     <div className='input-group'>
                     <input type='text' id='room_charges_1_day' name='room_charges_1_day' placeholder='Enter Room Charge' required
                    onChange={(e)=>{
                        setRoomCharges(e.target.value)
                     //setroom_charge_1_day(e.target.value);
             }} value={room_charges_1_day} />
                     <i className='fa fa-list left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 
                 <div className='input-box'>
                     <label className='details' htmlFor='doctor_charges'>Doctor Charges</label>
                     <div className='input-group'>
                     <input type='text' id='doctor_charges' name='doctor_charges' placeholder='Enter Doctor charges' required
                    onChange={(e)=>{
                        setDoctorCharges(e.target.value)
                        // same for all the inputs
                     //setdoctor_charges(e.target.value);
             }} value={doctor_charges} />
                     <i className='fa fa-envelope left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='total_room_charge'>Total Room Charges</label>
                     <div className='input-group'>
                     <input type='text' id='total_room_charge' name='total_room_charge' placeholder='' required
                   onChange={(e)=>{
                       onTotalRoomChargeChange(e.target.value)
                    //  settotal_room_charge(e.target.value);
             }} value={total_room_charge} />
                     <i className='fa fa-phone left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='other'>Other</label>
                     <div className='input-group'>
                     <input type='text' id='other' name='other' placeholder='Enter other charges' 
                    onChange={(e)=>{
                        setOtherCharges(e.target.value)
                    //  setother(e.target.value);
             }} value={other} />
                     <i className='fa fa-envelope left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 <div className='input-box'>
                     <label className='details' htmlFor='total_amount'>Total Amount</label>
                     <div className='input-group'>
                     <input type='text' id='total_amount' name='total_amount' placeholder='Total amount' required
                    onChange={(e)=>{
                     settotal_amount(e.target.value);
             }} value={total_amount} />
                     <i className='fa fa-envelope left-icon'/>
                     <i className='fa fa-times right-icon'/>
                     </div>
                 </div>
                 
             </div>
             <div className='button'>
             <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
             </div>
        </form>
        </div>
     </div>
    </div>
 )


           // <button type="update" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Update</button>
       

   

        }