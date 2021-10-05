import React,{useState,useEffect} from "react";
import axios from "axios";
//import Header from "./Header";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Allbill.css';
 
import swal from 'sweetalert';

export default function DeletePayment(){

    const [Payments, setPayments] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const DeletePayment=(id) =>{
        axios.delete(`http://localhost:8000/payment/delete/${id}`).then(()=>{
            swal({
                title: "Are you sure?",
                text: "The Item Will be Deleted from Payments List",
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
        function getPayments(){
        axios.get("http://localhost:8000/payment/display").then((res) => {
            setPayments(res.data);
            }
        ).catch((err) => {
            alert(err.message);
        })
    }
    getPayments();
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
                        <th scope="col">Reciept No</th>
                        <th scope="col">Paid Date</th>
                        <th scope="col">Paid Mode</th>
                        <th scope="col">Paid Type</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Balance</th>
                        

                       </tr>
                   </thead>
                   <tbody>
                       {
                           Payments.filter(val=>{
                               if(searchTerm === ''){
                                   return val;
                               }else if(
                                   val.receipt_no.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    
                                    

                               ){
                                   return val;
                               }
                               }).map(function (f) {
                               return <tr>
                                   

                                   <td >{f.bill_no}</td>
                                   <td >{f.receipt_no} </td>
                                   <td >{f.p_date} </td>
                                   <td >{f.p_mode} </td>
                                   <td >{f.p_type} </td>
                                   <td >{f.p_amount} </td>
                                   <td >{f.total_amount} </td>
                                   <td >{f.balance} </td>


                                   <td > <IconButton aria-label="delete"  onClick={() =>DeletePayment  (f._id)}>
                                       
               
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