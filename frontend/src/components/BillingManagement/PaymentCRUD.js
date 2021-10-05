import React from "react";

import PaymentCard from './PaymentCard';
import './Payments.css';

import img1 from '../../assets/add_pay.jpg';
import img2 from '../../assets/payment_list.jpg';
import img3 from '../../assets/update_bill.jpg';
import img4 from '../../assets/payments.jpg';
import img5 from '../../assets/search_bill.jpg';

export default function BillCRUD() {
    return (
        <>
        <div className='card-group-1'>
            <PaymentCard imgURL={img1} title='Create New Payment' text={"A Little Progress\n Each day adds\n up to Big Results"} URLpath={"/padd"}/>
            <PaymentCard imgURL={img2} title='Payment list' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"/pdisplay"}/>
            <PaymentCard imgURL={img4} title='Delete payments' text={"Hit the delete \n button \n Every time fear\n appears"} URLpath={"/pdelete"}/>
            
        </div>
        <div className='card-group-2'>
            
             <PaymentCard imgURL={img3} title='Update Payments' text={"A Little Progress\n Each day Change to\n Big Results"} URLpath={"#"}/>
            <PaymentCard imgURL={img5} title='Search Payments' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"#"}/>
        </div>
        
        </>
    )
}