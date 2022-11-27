export default function loginValidate(values: any){
    const errors: any = {};

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    if(!values.password){
        errors.password = 'Required';
    } else if(values.password.length<5 || values.password.length > 20){
        errors.password = "Must be greater than 5 and less than 20 characters long"
    }

    return errors;
}


export function registerValidate(values: any){
    const errors: any = {};


    if(!values.username) {
        errors.username = 'Required';
    } else if(values.username.length<5 || values.username.length > 20){
        errors.username = "Must be greater than 5 and less than 20 characters long"
    } 

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    if(!values.password){
        errors.password = 'Required';
    } else if(values.password.length<5 || values.password.length > 20){
        errors.password = "Must be greater than 5 and less than 20 characters long"
    }

    if(!values.repassword){
        errors.repassword = 'Required';
    } else if(values.repassword !== values.password){
        errors.repassword = "Password doesn't match"
    }

    return errors;
}   