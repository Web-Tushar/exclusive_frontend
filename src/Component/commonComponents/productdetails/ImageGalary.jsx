import React, { useState } from 'react'

const ImageGalary = ({ image }) => {

     const [initialimg, setInitialimg] = useState( image &&      
          image[0] ||
          "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
     const [isEnter, setisEnter] = useState(false)
     const handleMouseOver = (event) => {
          console.clear()
          console.log(event.clientX)
          setisEnter(true)
     }
     return (
          <div>
               <div className=" flex gap-x-8">
                    <div className="grid grid-rows-4 gap-4 ">
                         {image?.map((singleImage) => (
                              <div key={singleImage} className=" bg-slate-500 rounded-sm flex  justify-center items-center ">
                                   <img src={singleImage}
                                        className='w-[170px] h-[138px] object-cover cursor-pointer '
                                        alt={singleImage}
                                        onClick={() => setInitialimg(singleImage)}
                                   />
                              </div>
                         ))
                         }
                    </div>
                    {/* big img */}
                    <div className=" w-full bg-white_5F5 flex justify-center items-center px-2">
                         <img src={initialimg}
                              className={isEnter
                                   ? "w-[446px] h-[315px] object-cover cursor-zoom-in  rounded-sm scale-110"
                                   :
                                   "w-[446px] h-[315px] object-cover cursor-pointer  rounded-sm "}
                              alt="not_found"
                              onMouseMove={handleMouseOver} />
                    </div>

               </div>
          </div>
     )
}

export default ImageGalary