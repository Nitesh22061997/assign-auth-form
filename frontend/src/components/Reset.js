import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/profile.png"
import styles from "../styles/UserName.module.css"
import { Toaster } from "react-hot-toast"
import { useFormik } from "formik"
import { resetPasswordValidation } from "../helper/validate"

function Reset() {

    const formik = useFormik({
        initialValues: {
            password: 'admin@123',
            confirm_pwd: "admin@123"
        },
        validate: resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })
    return (
        <div className="container mx-auto">
            <Toaster position='top-center' reverseOrder={false} />
            <div className='flex justify-center items-center  h-screen'>
                <div className={styles.glass} style={{ width: "50 %" }}>

                    <div className="title flex flex-col items-center">
                        <h4 className=' text-5xl font-bold'>
                            Reset
                        </h4>
                        <span className='py-4 text-xl text-center w-2/3 text-gray-500'>
                            Enter new Password</span>
                    </div>
                    <form className='pt-20' onSubmit={formik.handleSubmit}>

                        <div className='textbox flex flex-col justify-center gap-6'>
                            <input {...formik.getFieldProps("password")} className={styles.textbox} type="password" placeholder='New Password' />
                            <input {...formik.getFieldProps("confirm_pwd")} className={styles.textbox} type="password" placeholder='Reapeat Password' />
                            <button className={styles.btn} type='submit'>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reset;