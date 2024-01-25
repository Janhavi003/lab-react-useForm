import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './form.css'

const Forms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setRegistrationSuccess(true)
  };

  const [registrationSucess,setRegistrationSuccess] = useState(false)
  return (
    <>
      <div className='App'>
        {
            registrationSucess && (
                <div className='success'>
                    <p>Registration Successful</p>
                </div>
            )
        }
        <form className='Form' onSubmit={handleSubmit(onSubmit)}> 
          <label>First Name :</label>
          <input type="text" name='firstName' {...register("firstName", { required: "First name is required!" })} />
          {errors.firstName && <p className='err'>{errors.firstName.message}</p>}

          <label>Last Name :</label>
          <input type="text" name='lastName' {...register("lastName", { required: "Last Name is required!" })} />
          {errors.lastName && <p className='err'>{errors.lastName.message}</p>}

          <label>Email :</label>
          <input type="email" name='email' {...register("email", { required: "Email is required!", pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" } })} />
          {errors.email && <p className='err'>{errors.email.message}</p>}

          <label>Password :</label>
          <input type="password" name='password' {...register("password", { required: "Password is required" , minLengt:{
            value:5,
            message:"Password must be more than 4 characters"
          },
          maxLength:{
            value:20,
            message:"Password cannot be more than 20 characters"
          }})} />
          {errors.password && (<p className='err'>{errors.password.message}</p>)}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Forms;
