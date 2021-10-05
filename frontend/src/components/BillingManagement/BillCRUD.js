import React from "react";

import PaymentCard from './PaymentCard';
import './Payments.css';

import img1 from '../../assets/add_bill.jpg';
import img2 from '../../assets/list_bill.jpg';
import img3 from '../../assets/update_bill.jpg';
import img4 from '../../assets/delete_bill.jpg';
import img5 from '../../assets/search_bill.jpg';

export default function BillCRUD() {
    return (
        <>
        <div className='card-group-1'>
            <PaymentCard imgURL={img1} title='Create New Bill' text={"A Little Progress\n Each day adds\n up to Big Results"} URLpath={"/add"}/>
            <PaymentCard imgURL={img2} title='Bill list' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"/display"}/>
            <PaymentCard imgURL={img4} title='Delete Bill' text={"Hit the delete \n button \n Every time fear\n appears"} URLpath={"/delete"}/>
            
        </div>
        <div className='card-group-2'>
            
             <PaymentCard imgURL={img3} title='Update Bill' text={"A Little Progress\n Each day Change to\n Big Results"} URLpath={"#"}/>
            <PaymentCard imgURL={img5} title='Search Bill' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"#"}/>
        </div>
        
        </>
    )
}