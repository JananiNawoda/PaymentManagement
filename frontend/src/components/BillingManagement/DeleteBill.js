import React,{useState,useEffect} from "react";
import axios from "axios";
//import Header from "./Header";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Allbill.css';
 
import swal from 'sweetalert';

export default function DeleteBill(){

    const [Bills, setBills] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const deleteBill=(id) =>{
        axios.delete(`http://localhost:8000/bill/delete/${id}`).then(()=>{
            swal({
                title: "Are you sure?",
                text: "The Item Will be Deleted from Bill List",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("The file has been deleted!", 
                    "success",
                  );  setTimeout(function(){
                    window.location.reload();
                   },1000);
                } else {
                  swal("File Is Not Deleted");
                }
              });
        // ;
        })
      }



    useEffect(() => {
        //fetching all supplier data from the database
        function getBills(){
        axios.get("http://localhost:8000/bill/display").then((res) => {
            setBills(res.data);
            }
        ).catch((err) => {
            alert(err.message);
        })
    }
    getBills();
    }, [])

    return (
        <>
         <div class="head">
        <br></br>
          <br></br>
          <br></br>
   
    
   </div>
   <br></br>
   <br></br>
   <br></br>
   
          <br></br>
   <div class="buttonn">
       <button type="button" class="btn btn-secondary btn-sm">GenerateReport</button>
   </div>
    
       <div class="lft">
       <br></br>
       <br></br>
<div class="card1" >
    <input type="text" placeholder="Search.." className="form-control" style={{margintop:50,marginbottom:20,width:"40%"}}
      onChange = {(e) => {
          setsearchTerm(e.target.value);
      }}/>
   <br></br>
   <br></br>
   <table class="table table-bordered">
        <table class="table table-hover" >
         
                   <thead>
                
                       <tr>
                       <th scope="col">Bill No</th>
                       <th scope="col">Billing Date</th>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Admission Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">No of days</th>
                        <th scope="col">Room Type</th>
                        <th scope="col">Room charge/day</th>
                        <th scope="col">Doctor Charges</th>
                        <th scope="col">Total Room Charge</th>
                        <th scope="col">Other</th>
                        <th scope="col">Total Amount</th>
                        

                       </tr>
                   </thead>
                   <tbody>
                       {
                           Bills.filter(val=>{
                               if(searchTerm === ''){
                                   return val;
                               }else if(
                                   val.bill_no.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    
                                    

                               ){
                                   return val;
                               }
                               }).map(function (f) {
                               return <tr>
                                   

                                   <td >{f.bill_no}</td>
                                   <td >{f.Bill_date} </td>
                                   <td >{f.P_ID} </td>
                                   <td >{f.Ad_date} </td>
                                   <td >{f.name} </td>
                                   <td >{f.no_of_days} </td>
                                   <td >{f.room_type} </td>
                                   <td >{f.room_charges_1_day} </td>
                                   <td >{f.doctor_charges} </td>
                                   <td >{f.total_room_charge} </td>
                                   <td >{f.other} </td>
                                   <td >{f.total_amount} </td>
                                   
                                
                                    

                                   <td > <IconButton aria-label="delete"  onClick={() =>deleteBill  (f._id)}>
                                       
               
         <DeleteIcon fontSize="small" />
       </IconButton></td>

       <td > <IconButton aria-label="delete"  >
                                       
               
                                       <EditIcon fontSize="small" />
                                     </IconButton></td>

                               </tr>

                           })
                       }
                   </tbody>
                   </table>
               </table>
</div>
</div>

       </>
   
   )








}