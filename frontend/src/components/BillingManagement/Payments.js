import React from "react";
import PaymentCard from './PaymentCard';
import './Payments.css';

import img1 from '../../assets/bill.gif';
import img2 from '../../assets/invoice.gif';
import img5 from '../../assets/feedback.jpg';

export default function Payments() {
    return (
        <>
        <div className='card-group-1'>
            <PaymentCard imgURL={img1} title='Make The Bill' text={"While the challenges\n are great, \n So are the opportunities"} URLpath={"/BillCRUD"}/>
            <PaymentCard imgURL={img2} title='Make Invoice' text={"Financial Ruin from\n medical bills is \n almost exclusively an \n american disease"} URLpath={"/bills"}/>
            <PaymentCard imgURL={img5} title='Paymnet Feedback' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"#"}/>
        </div>
        </>
    )
}