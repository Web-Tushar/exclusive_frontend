import React, { useState } from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

const ImageGalary = ({ image }) => {

     const [initialimg, setInitialimg] = useState(image &&
          image[0] ||
          "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

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
                         <InnerImageZoom src={initialimg} />
                    </div>

               </div>
          </div>
     )
}

export default ImageGalary