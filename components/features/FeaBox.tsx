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
      <h5 className='font-semibold text-center mb-2'>{title}</h5>
      <p className='text-center'>{desc}</p>   
      </div>
  )
}

export default FeaBox