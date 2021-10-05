
import React from 'react';
import './MakeApp.css';

export default function MakeApp(){
    return(
    <div className='body'>
       <div className='appointment-container'>
           <div className='title'>Book Appointment</div>
           <div className='container'>
           <form action='#'>
                <div className='user-details'>
                    <div className='input-box'>
                        <label className='details' htmlFor='fullName'>Full Name</label>
                        <div className='input-group'>
                        <input type='text' id='fullName' name='fullname' placeholder='Enter Your Name' required/>
                        <i className='fa fa-user left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
                    <div className='input-box'>
                        <label className='details' htmlFor='address'>Address</label>
                        <div className='input-group'>
                        <input type='text' id='address' name='address' placeholder='Enter Your Address' required/>
                        <i className='fa fa-address-card-o left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
                    <div className='input-box'>
                        <label className='details' htmlFor='email'>Email</label>
                        <div className='input-group'>
                        <input type='text' id='email' name='email' placeholder='Enter Your Email Address' required/>
                        <i className='fa fa-envelope left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
                    <div className='input-box'>
                        <label className='details' htmlFor='phoneNumber'>Phone Number</label>
                        <div className='input-group'>
                        <input type='text' id='phoneNumber' name='phoneNumber' placeholder='Enter Your Phone Number' required/>
                        <i className='fa fa-phone left-icon'/>
                        <i className='fa fa-times right-icon'/>
                        </div>
                    </div>
                    <div className='input-box'>
                        <label className='details' htmlFor='category'>Category</label>
                        <div className='input-group'>
                        <select id='category' name='category'>
                            <option value='Heart'>Heart</option>
                            <option value='Bone'>Bone</option>
                            <option value='Skin'>Skin</option>
                            <option value='Hand'>Hand</option>
                        </select>
                        <i className='fa fa-list left-icon'/>
                        </div>
                    </div>
                    <div className='input-box'>
                        <label className='details' htmlFor='date'>Date</label>
                        <div className='input-group'>
                        <input type='date' id='date' name='date' required/>
                        </div>
                    </div>
                    <div className='input-box'>
                        <label className='details' htmlFor='doctor'>Select Doctor</label>
                        <div className='input-group'>
                        <select id='doctor' name='doctor'>
                            <option value='John'>John</option>
                            <option value='Peiris'>Peiris</option>
                            <option value='Tom'>Tom</option>
                            <option value='King'>King</option>
                        </select>
                        <i className='fa fa-list left-icon'/>
                        </div>
                    </div>
                    <div className='time-details'>
                        <p className='time-title'>Available Times</p>
                        <div className='time-group'>
                        <input type='radio' id='time1' name='time' value='9.45a.m'/>
                        <label htmlFor='time1'>9.45 a.m</label>
                        <input type='radio' id='time2' name='time'value='10.30a.m'/>
                        <label htmlFor='time2'>10.30 a.m</label>
                        <input type='radio' id='time3' name='time'value='11.00a.m'/>
                        <label htmlFor='time3'>11.00 a.m</label>
                        <input type='radio' id='time4' name='time'value='12.00p.m'/>
                        <label htmlFor='time4'>12.00 p.m</label>
                        <input type='radio' id='time5' name='time' value='2.00p.m'/>
                        <label htmlFor='time5'>2.00 p.m</label>
                        <input type='radio' id='time6' name='time' value='4.00p.m'/>
                        <label htmlFor='time6'>4.00 p.m</label>
                        <input type='radio' id='time7' name='time' value='6.00p.m'/>
                        <label htmlFor='time7'>6.00 p.m</label>
                        </div>
                    </div>
                    <div className='input-check'>
                        <input type='checkbox' id='compulsory' name='compulsory' value='true'/>
                        <label htmlFor='compulsory'>
                            By Checking this, you agree to our terms and conditions
                        </label>
                    </div>
                </div>
                <div className='button'>
                    <input type='reset' value='Cancel'/>
                    <input type='submit' value='Book Now'/>
                </div>
           </form>
           </div>
        </div>
       </div>
    );
}