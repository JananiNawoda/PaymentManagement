//import React, {useState } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/Signup';
import Home from './components/pages/Home';

//Main Component
import Appointment from './components/pages/Appointment';
//Sub Component
import MakeAppointment from './components/pages/MakeApp';
import BookingHistory from './components/pages/BookingHistory';
import TreatmentHistory from './components/pages/TreatmentHistory';
import ManageBooking from './components/pages/ManageBooking';
import AppFeedback from './components/pages/Feedback';

import LoginForm from './components/loginform/LoginForm';

//Bills
import AddBills from './components/BillingManagement/AddBill';
import Payments from './components/BillingManagement/Payments';
import AllBill from './components/BillingManagement/AllBill';
import DeleteBill from './components/BillingManagement/DeleteBill';
import BillCRUD from './components/BillingManagement/BillCRUD';
import EditForm from './components/BillingManagement/UpdateBill';


//Payments
import AddPayments from './components/BillingManagement/AddPayment';
import AllPayments from './components/BillingManagement/AllPayments';
import PaymentCRUD from './components/BillingManagement/PaymentCRUD';
import DeletePayment from './components/BillingManagement/DeletePayment';
import UpdatePayment from './components/BillingManagement/UpdatePayment';

function App() {
 
  return (
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={LoginForm}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/Appointment' exact component={Appointment}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/contact-us' exact component={ContactUs}></Route>
          <Route path='/sign-up' exact component={SignUp}>

          </Route>
          <Route path='/make-appointment' exact component={MakeAppointment}></Route>
          <Route path='/booking-history' exact component={BookingHistory}></Route>
          <Route path='/treatment-history' exact component={TreatmentHistory}></Route>
          <Route path='/manage-booking' exact component={ManageBooking}></Route>
          <Route path='/app-feedback' exact component={AppFeedback}></Route>
          
          <Route path='/add' exact component={AddBills}></Route>
          <Route path='/payments' exact component={Payments}></Route>
          <Route path='/display' exact component={AllBill}></Route>
          <Route path='/BillCRUD' exact component={BillCRUD}></Route>
          <Route path='/delete' exact component={DeleteBill}></Route>
          <Route path='/update/:id' exact component={EditForm}></Route>

          <Route path='/padd' exact component={AddPayments}></Route>
          <Route path='/pdisplay' exact component={AllPayments}></Route>
          <Route path='/bills' exact component={PaymentCRUD}></Route>
          <Route path='/pdelete' exact component={DeletePayment}></Route>
          <Route path='/updates/:id' exact component={UpdatePayment}></Route>
        
         
        </Switch>
      </Router>
  );
}

export default App;
