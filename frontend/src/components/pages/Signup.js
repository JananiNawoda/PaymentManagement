import React,{useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'

import welcome from '../../assets/welcome.jpg';

import {SignUpValidate} from '../loginform/Validate';

export default function SignUp({submitForm}){
    const [values,setValues]=useState({
        username:'',
        useremail:'',
        userpass:'',
        userconfirmpass:''
    });

    const inputUserName=useRef();
    const inputUserEmail=useRef();
    const inputUserPass=useRef();
    const inputUserConfirm=useRef();

    const [isDataCorrect,setIsDataCorrect]= useState(false);

    const handleChange=(event)=>{
        setValues({...values,
            [event.target.name]:event.target.value,
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(SignUpValidate(values));
        setIsDataCorrect(true);
    }
    const [errors,setErrors]=useState({});

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isDataCorrect){
            submitForm(true);
        }
    },[errors]);
    return(
        <div className='body'>
            <div className='appointment-container'>
                <div className='title'>Sign Up</div>
                <div className='container login-form'>
                    <div className='left login sign'>
                        <img src={welcome}/>
                        <div>
                            <h2>Welcome Back!</h2>
                            <p>To keep Connected with us please login with your personal info</p>
                        </div>
                        <div className='btn'>
                            <Link to='/'>
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                    <div className='right'>
                        <form action='#'>
                            <div className='user-details'>
                                <div className='input-box'>
                                    <label className='details' htmlFor='username'>UserName</label>
                                    <div className='input-group'>
                                    <input type='text' id='username' ref={inputUserName}name='username' placeholder='Enter Your UserName' onChange={handleChange}/>
                                    <i className='fa fa-user left-icon'/>
                                    <i className={!errors.username?'fa fa-times right-icon':'fa fa-exclamation right-icon'} onClick={()=>{
                                        inputUserName.current.focus();
                                        inputUserName.current.value='';
                                        values.username='';
                                    }}/>
                                    </div>
                                    {errors.username && <p className='error'>{errors.username}</p>}
                                </div>
                                <div className='input-box'>
                                    <label className='details' htmlFor='useremail'>Email</label>
                                    <div className='input-group'>
                                    <input type='email' ref={inputUserEmail} id='useremail' name='useremail' placeholder='Enter Your Email' onChange={handleChange}/>
                                    <i className='fa fa-envelope left-icon'/>
                                    <i className={!errors.useremail?'fa fa-times right-icon':'fa fa-exclamation right-icon'} onClick={()=>{
                                        inputUserEmail.current.focus();
                                        inputUserEmail.current.value='';
                                        values.useremail='';
                                    }}/>
                                    </div>
                                    {errors.useremail && <p className='error'>{errors.useremail}</p>}
                                </div>
                                <div className='input-box'>
                                    <label className='details' htmlFor='userpass'>Password</label>
                                    <div className='input-group'>
                                    <input type='password' ref={inputUserPass} id='userpass' name='userpass' placeholder='Enter Your Password' onChange={handleChange}/>
                                    <i className='fa fa-key left-icon'/>
                                    <i className={!errors.userpass?'fa fa-times right-icon':'fa fa-exclamation right-icon'} onClick={()=>{
                                        inputUserPass.current.focus();
                                        inputUserPass.current.value='';
                                        values.userpass='';
                                    }}/>
                                    </div>
                                    {errors.userpass && <p className='error'>{errors.userpass}</p>}
                                </div>
                                <div className='input-box'>
                                    <label className='details' htmlFor='userconfirmpass'>Confirm Password</label>
                                    <div className='input-group'>
                                    <input type='password' ref={inputUserConfirm} id='userconfirmpass' name='userconfirmpass' placeholder='Retype Your Password' onChange={handleChange}/>
                                    <i className='fa fa-key left-icon'/>
                                    <i className={!errors.userconfirmpass?'fa fa-times right-icon':'fa fa-exclamation right-icon'} onClick={()=>{
                                        inputUserConfirm.current.focus();
                                        inputUserConfirm.current.value='';
                                        values.userconfirmpass='';
                                    }}/>
                                    </div>
                                    {errors.userconfirmpass && <p className='error'>{errors.userconfirmpass}</p>}
                                </div>
                            </div>
                            <div className='button'>
                                <input type='submit' value='Sign Up' onClick={handleSubmit}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}