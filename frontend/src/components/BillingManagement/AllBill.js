import React, { useState, useEffect } from "react";
import axios from "axios";
//import Header from "./Header";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Allbill.css';
import jspdf from "jspdf";
import 'jspdf-autotable';
//import jspdf-autotable from 'jspdf-autotable';

import swal from 'sweetalert';

export default function AllBill() {

    const [Bills, setBills] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const deleteBill = (id) => {
        axios.delete(`http://localhost:8000/bill/delete/${id}`).then(() => {
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
                        ); setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    } else {
                        swal("File Is Not Deleted");
                    }
                });
            // ;
        })
    }

    useEffect(() => {
        //fetching all supplier data from the database
        function getBills() {
            axios.get("http://localhost:8000/bill/display").then((res) => {
                setBills(res.data);
            }
            ).catch((err) => {
                alert(err.message);
            })
        }
        getBills();
    }, [])

    // genarate pdf

    const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Bill No", "Billing Date", "Patient ID", "Admission Date", "Name",
            "No of days", "Room Type", "Room charge/day", "Doctor Charges", "Total Room Charge", "Other", "Total Amount"];
        const tableRows = [];
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];

        tickets.map(ticket => {
            const ticketData = [
                ticket.bill_no,
                ticket.Bill_date,
                ticket.P_ID,
                ticket.Ad_date,
                ticket.name,
                ticket.no_of_days,
                ticket.room_type,
                ticket.room_charges_1_day,
                ticket.doctor_charges,
                ticket.total_room_charge,
                ticket.other,
                ticket.total_amount
            ];
            tableRows.push(ticketData);
        })
        doc.text("Hospital Management System", 70, 8).setFontSize(13);
        doc.text("Bill Details Report", 14, 16).setFontSize(13);
        doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
        //right down width height
        //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
        doc.save("Bill Details Report.pdf");
    };

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
                <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(Bills)}>GenerateReport</button>
            </div>
            
            <div class="lft">
                <br></br>
                <br></br>
                <div class="card1" >
                    <input type="text" placeholder="Search.." className="form-control" style={{ margintop: 50, marginbottom: 20, width: "40%" }}
                        onChange={(e) => {
                            setsearchTerm(e.target.value);
                        }} /><br></br>
                        <button type="text" class="btn btn-secondary btn-sm"> Supplier Count : {Bills.length} </button>
                    <br></br>
                    <div className='title'><b>Hospital Bill List</b></div>
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
                                    Bills.filter(val => {
                                        if (searchTerm === '') {
                                            return val;
                                        } else if (
                                            val.bill_no.toLowerCase().includes(searchTerm.toLowerCase())



                                        ) {
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

                                            <td > <IconButton aria-label="delete" onClick={() => deleteBill(f._id)}>


                                                <DeleteIcon fontSize="small" />
                                            </IconButton></td>

                                            
                                                <td><a className="btn btn-warning" href={'update/' + (f._id)}>Edit
                                                    <i className="far fa-edit"></i>&nbsp;</a></td>
                                                   


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