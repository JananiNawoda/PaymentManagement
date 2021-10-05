import React from 'react'
import AppointmentCard from './AppointmentCard';
import './Appointment.css';

import img1 from '../../assets/appointment.png';
import img2 from '../../assets/history.jpg';
import img3 from '../../assets/treatment.jpeg';
import img4 from '../../assets/cancel-booking.png';
import img5 from '../../assets/feedback.jpg';

export default function Appointment() {
    return (
        <>
        <div className='card-group-1'>
            <AppointmentCard imgURL={img1} title='Make Appointment' text={"Don't Make a Wish\nMake an\nAppointment"} URLpath={"/make-appointment"}/>
            <AppointmentCard imgURL={img2} title='Booking History' text={"Once You've Opened it,\nYou've Opened up\nyour mind"} URLpath={"/booking-history"}/>
            <AppointmentCard imgURL={img3} title='Treatment history' text={"Medicines cure diseases,\nbut only Doctors can\ncure Patients"} URLpath={"/treatment-history"}/>
        </div>
        <div className='card-group-2'>
            <AppointmentCard imgURL={img4} title='Manage Booking' text={"Nothing is worse than\nmissing an\nOppurtunity"} URLpath={"/manage-booking"}/>
            <AppointmentCard imgURL={img5} title='Appointment Feedback' text={"There is always space for improvement\nno matter how long\nit takes"} URLpath={"/app-feedback"}/>
        </div>
        </>
    )
}
