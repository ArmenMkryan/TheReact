import React from "react";
import { Fill_in } from "./register";
import './form.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Forma = () => {
   
    
    const schema = yup.object().shape({
        FullName: yup.string().required('Full name is required'),
        Email: yup.string().required('Email is required').email(),         
        Age: yup.number().positive().required('Age is required').integer(),         
        Pass: yup.string().required('Password is required'),
        ConfirmPass: yup.string().required().oneOf([yup.ref('Pass'), null]), 
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div className="App " >
            <form onSubmit={handleSubmit(onSubmit) } action="">
                <input className='form'  type="text" placeholder="Full Name" {...register("FullName")}/>
                <p>{errors.FullName?.message}</p>
                <input className='form'  type="text" placeholder="Email" {...register("Email")}/>
                <p>{errors.Email?.message}</p>
                <input className='form'  type="number" placeholder="Age" {...register("Age")}/>
                <p>{errors.Age?.message}</p>
                <input className='form'  type="password" placeholder="Password" {...register("Pass")}/>
                <p>{errors.Pass?.message}</p>
                <input className='form'  type="password" placeholder="Confirm password" {...register("ConfirmPass")}/>
                <p>{errors.ConfirmPass?.message}</p>
                <input className='form'  type="submit" />
            </form>
        </div>
    )
}