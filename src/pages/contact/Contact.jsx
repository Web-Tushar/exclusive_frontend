import React from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'
import { FiPhone } from "react-icons/fi";
import { useFormik } from 'formik';
import { contactschema } from '../../validation/schema/LoginSchema';

const Contact = () => {
     const formik = useFormik({
          initialValues: {
               name: '',
               phone: '',
               email: '',
               message: ''
          },
          validationSchema: contactschema,
          onSubmit: (values) => {
               console.log(values)
          },
     })
     return (
          <div className='container'>
               <div className="">
                    <BreadCrumb />
               </div>
               <div className="flex justify-between items-start">
                    <div className="mb-[140px] max-w-[30%] py-[40px] px-[35px] shadow-lg">
                         <div className="flex items-center gap-x-2">
                              <div className="w-[40px] h-[40px] rounded-full bg-red_DB4444 flex justify-center items-center text-white text-[20px]">
                                   <FiPhone />
                              </div>
                              <h3 className='font-poppins text-4 font-medium'>Call To Us</h3>
                         </div>
                         <div className="mt-6 border-b-2 inline-block border-gray-600">
                              <h5 className='font-poppins text-[14px] font-normal'>
                                   We are available 24/7, 7 days a week.
                              </h5>
                              <a href="callto: +8801611112222" className='mt-4 mb-4 font-poppins text-[14px] font-normal'>Phone: +8801611112222</a>
                         </div>

                         <div className=" mt-8 flex items-center gap-x-2">
                              <div className="w-[40px] h-[40px] rounded-full bg-red_DB4444 flex justify-center items-center text-white text-[20px]">
                                   <FiPhone />
                              </div>
                              <h3 className='font-poppins text-4 font-medium'>Call To Us</h3>
                         </div>
                         <div className="mt-6 ">
                              <p className='font-poppins text-[14px] font-normal'>
                                   Fill out our form and we will contact you within 24 hours.
                              </p>
                              <a href='mailto:customer@exclusive.com' className='mt-4  font-poppins text-[14px] font-normal'>Emails: customer@exclusive.com</a>
                              <a href='mailto:support@exclusive.com' className='mt-4 mb-4 font-poppins text-[14px] font-normal'>Emails: support@exclusive.com</a>
                         </div>

                    </div>
                    <form onSubmit={formik.handleSubmit} className="max-w-[65%] px-[32px] py-[35px] border rounded shadow-md " action="">

                         <div className=" flex gap-x-3  ">
                              <div className="flex flex-col">
                                   <input type="text"
                                        placeholder='Your Name *'
                                        required
                                        id="name"
                                        name='name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        className='border rounded bg-gray-100 py-[13px] px-[16px]' />
                                   {formik.errors.name && formik.touched.name ? (
                                        <div className="text-red-500 ">{formik.errors.name}</div>) : null}

                              </div>
                              <div className="flex flex-col">
                                   <input type="text"
                                        placeholder='Your Email *'
                                        required
                                        id="email"
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        className='border rounded bg-gray-100 py-[13px] px-[16px]' />
                                   {formik.errors.email && formik.touched.email ? (
                                        <div className="text-red-500 ">{formik.errors.email}</div>) : null}

                              </div>
                              <div className="">
                                   <input type="text"
                                        placeholder='Your Phone *'
                                        required
                                        id="phone"
                                        name='phone'
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        className='border rounded bg-gray-100 py-[13px] px-[16px]' />
                                   {formik.errors.phone && formik.touched.phone ? (
                                        <div className="text-red-500 ">{formik.errors.phone}</div>) : null}


                              </div>
                         </div>
                         <div className="">
                              <textarea
                                   className=' p-5 block  overflow-scroll mt-8 bg-gray-100 border w-[100%] h-[207px]'
                                   name="message"
                                   id="message"
                                   value={formik.values.message}
                                   onChange={formik.handleChange}
                                   rows={4}
                                   placeholder='Your Massage '></textarea>
                              {formik.errors.message && formik.touched.message ? (
                                   <div className="text-red-500 ">{formik.errors.message}</div>) : null}
                         </div>
                         <div className="text-end pt-8">
                              <button type='submit' className=' border text-white_5F5 rounded bg-red_DB4444  py-4 px-12 '>Send Massage</button>

                         </div>



                    </form>

               </div>
          </div>
     )
}

export default Contact