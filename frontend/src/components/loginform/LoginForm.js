import React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom'
import '../pages/MakeApp.css';
import {LoginValidate} from './Validate';

import welcome from '../../assets/welcome.jpg';

export default function LoginForm({submitForm}) {

    const [values,setValues]=useState({
        username:'',
        password:''
    });

    const [isDataCorrect,setIsDataCorrect]= useState(false);
    
    // Used to Ref input fields
    const inputUserName=useRef();
    const inputPassword=useRef();

    const handleChange=(event)=>{
        setValues({...values,
            [event.target.name]:event.target.value,
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(LoginValidate(values));
        setIsDataCorrect(true);
    }
    const [errors,setErrors]=useState({});

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isDataCorrect){
            submitForm(true);
        }
    },[errors]);
    return (
        <div className='body'>
            <div className='appointment-container'>
                <div className='title'>Login</div>
                <div className='container login-form'>
                    <div className='left login'>
                        <img src={welcome}/>
                        <div>
                        <h2>Hello, Friend!</h2>
                        <p>Enter your personal details and start your journey</p>
                        </div>
                        <div className='btn'>
                        <Link to='/sign-up'>
                            <button>Sign Up</button>
                        </Link>
                    </div>
                    </div>
                    <div className='right'>
                <form action='#'>
                    <div className='user-details'>
                    <div className='input-box'>
                        <label htmlFor='username' className='details'>UserName</label>
                        <div className='input-group'>
                        <input id='username' ref={inputUserName} type='text' name='username' placeholder='username' value={values.username} onChange={handleChange}/>
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
                        <label htmlFor='password'className='details'>Password</label>
                        <div className='input-group'>
                        <input id='password' ref={inputPassword} type='password' name='password' placeholder='Password'value={values.password}
                        onChange={handleChange}/>
                        <i className='fa fa-key left-icon'/>
                        <i className={!errors.password?'fa fa-times right-icon':'fa fa-exclamation right-icon'} onClick={()=>{
                            inputPassword.current.focus();
                            inputPassword.current.value='';
                            values.password='';
                        }}/>
                        </div>
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div className='time-details'>
                        <p className='time-title'>User Type</p>
                        <div className='time-group'>
                            <label htmlFor='admin'>
                                <i className='fa fa-user-tie'/>
                            </label>
                                <label htmlFor='doctor'><i className='fa fa-user-md'/></label>
                                <label htmlFor='patient'>
                                    <i className='fa fa-hospital-user'/>
                                </label>
                                <label htmlFor='other'>
                                    <i className='fa fa-users'/>
                                </label>
                        </div>
                        <div className='time-group user-group'>
                            <input type='radio' id='admin' name='time' value='admin'/>
                            <input type='radio' id='doctor' name='time' value='doctor'/>
                            <input type='radio' id='patient' name='time' value='patient'/>
                             <input type='radio' id='other' name='time' value='other'/>
                             </div>
                             <div className='time-group'>
                                <label htmlFor='admin'>Admin</label>
                                <label htmlFor='doctor'>Doctor</label>
                                <label htmlFor='patient'>Patient</label>
                                <label htmlFor='other'>Other</label>
                            </div>
                        </div>
                    </div>
                    <div className='button'>
                        <input type='submit' onClick={handleSubmit} value='Login'/>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </div>
    )
}

