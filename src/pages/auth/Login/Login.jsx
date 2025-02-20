import React, { useState } from 'react'
import login from "../../../../src/assets/images/Login/Login.png"
import { useFormik } from 'formik';
// import { LoginSchema } from '../../../validation/schema/LoginSchema';
import { LoginSchema } from './../../../validation/schema/LoginSchema';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
     const [eye, seteye] = useState(false)
     const initialValues = {
          emailorphone: "",
          password: "",
     }
     const formik = useFormik({
          initialValues: initialValues,
          validationSchema: LoginSchema,
          onSubmit: (value) => {
               console.log(value)
          },
     })
     return (
          <div className='pt-[75px] pb-[140px]'>
               <div className="container">
                    <div className="flex gap-x-[10%] items-center">
                         <div className=" w-[50%]">
                              <img src={login} alt="login" />
                         </div>
                         <div className="w-[40%]">
                              <div className="">
                                   <h2 className='text-[36px] font-Inter font-semibold text-text_000000 tracking-[1.44px]'>Log in to Exclusive</h2>
                                   <p className=' mt-6 font-poppins font-normal text-[18 px] text-text_000000'>Enter your details below</p>
                              </div>
                              <form action="" onSubmit={formik.handleSubmit} >
                                   <div className=" mt-10 flex flex-col gap-y-10">
                                        <input
                                             type="text"
                                             name="name"
                                             placeholder='Name'
                                             id='Name'
                                             className='w-[60%] py-3 border-b-2 font-poppins text-4 font-normal leading-6 text-text_000000 '

                                        />

                                        <input
                                             type="text"
                                             name="emailorphone"
                                             placeholder="Email or Phone Number"
                                             id="emailorphone"
                                             className='w-[60%] py-3 border-b-2 font-poppins text-4 font-normal leading-6 text-text_000000 '
                                             onChange={formik.handleChange}
                                             value={formik.values.emailorphone}
                                        />
                                        {formik.touched.emailorphone && formik.errors.emailorphone ? (
                                             <span className=' block mt-2 text-[16px] font-poppins text-red-400 font-bold'>{formik.errors.emailorphone}</span>
                                        ) : null}


                                        <div className="flex items-center relative">
                                             <input
                                                  type={eye ? "text" : "password"}
                                                  name='password'
                                                  placeholder='password'
                                                  id='password'
                                                  className='w-[60%] py-3 border-b-2 font-poppins text-4 font-normal leading-6 text-text_000000 '
                                                  onChange={formik.handleChange}
                                                  value={formik.values.password}

                                             />
                                             <span className='text-[25px] absolute top-3 right-[41%]' onClick={() => seteye(!eye)}>
                                                  {
                                                       eye ? <FaRegEyeSlash className='cursor-pointer' /> : <FaRegEye className='cursor-pointer' />
                                                  }
                                             </span>
                                        </div>

                                        {formik.touched.password && formik.errors.password ? (
                                             <span className=' block mt-2 font-poppins text-red-400 font-bold'>{formik.errors.password}</span>
                                        ) : null}

                                        <div className=" flex gap-x-[40px] items-center ">
                                             <button type="submit" className='py-[16px] px-[48px] bg-red_DB4444 text-white_FFFFFF font-poppins text-[16px] font-semibold rounded-sm'>Log In</button>

                                        <Link to={"/Forget_pasword"} className='font-poppins text-[16px] font-normal text-red-500 cursor-pointer'>ForgetPassword?</Link>

                                        </div>
                                   </div>

                              </form>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Login