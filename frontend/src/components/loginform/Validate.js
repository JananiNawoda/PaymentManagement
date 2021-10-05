// Todo: Want to Check for Errors
const LoginValidate = (values) => {
    let errors={}
    if(!values.username){
        errors.username="UserName is Required"
    }

    if(!values.password){
        errors.password="Password is Required"
    }

    return errors;
};

const SignUpValidate=(values)=>{
    let errors={}
    if(!values.username){
        errors.username="UserName is Required"
    }
    if(!values.userpass){
        errors.userpass="Password is Required"
    }else if(values.userpass.length <6){
        errors.userpass="Password needs to be atleast 6 characters in length"
    }

    if(!values.useremail){
        errors.useremail="Email is Required"
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.useremail)){
        errors.useremail="Email address invalid"
    }

    if(!values.userconfirmpass){
        errors.userconfirmpass="Password is Required"
    }else if(values.userconfirmpass!==values.userpass){
        errors.userconfirmpass="Password do not match"
    }

    return errors;
};

export {
    LoginValidate,
    SignUpValidate
}