import React, { Children } from 'react'

interface FeatureBox {
title: string;
desc:string;
children: React.ReactNode;
className: string;
}

const FeaBox = ({title,desc,children,className}:FeatureBox) => {
  return (
    <div className={className}>
        <div className="w-full flex flex-col items-center">
            {children}
        </div>
      <h6 className='font-semibold text-center mb-2'>{title}</h6>
      <p className='text-center'>{desc}</p>   
      </div>
  )
}

export default FeaBox