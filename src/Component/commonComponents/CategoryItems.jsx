import React from 'react'

const CategoryItems = ({ copmonentData }) => {
  const { id, name, img } = copmonentData;
  return (
    <div>
      <div className='w- full h-[145px] bg-slate-900 border-[1px] border-black738'>
        <span>
          {img}
        </span>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default CategoryItems