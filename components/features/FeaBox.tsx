"use client";

import React, { useState } from 'react';

interface FeatureBox {
  title: string;
  desc: string;
  children: React.ReactNode;
  className: string;
}

const FeaBox = ({ title, desc, children, className }: FeatureBox) => {
  const [expanded, setExpanded] = useState(false);

  const words = desc.split(" ");
  const isLong = words.length > 8;
  const shortDesc = words.slice(0, 8).join(" ") + (isLong ? "..." : "");

  // Check if the base text color is white
  const isTextWhite = className.includes("text-white");

  const textBaseClass = isTextWhite ? "text-white" : "text-gray-800";
  const textHoverClass = isTextWhite ? "group-hover:text-blue-800" : "";

  return (
    <div className={`group ${className}`}>
      <div className="w-full flex flex-col items-center">
        {children}
      </div>
      <h5 className={`font-semibold text-center mb-2 transition-colors duration-200 ${textBaseClass} ${textHoverClass}`}>
        {title}
      </h5>
      <p className={`text-center text-sm transition-colors duration-200 ${textBaseClass} ${textHoverClass}`}>
        {expanded || !isLong ? desc : shortDesc}
        {isLong && (
          <span
            onClick={() => setExpanded(!expanded)}
            className={`ml-2 underline cursor-pointer transition-colors duration-200 ${
              isTextWhite ? "text-white group-hover:text-blue-800" : "text-blue-600 hover:text-blue-800"
            }`}
          >
            {expanded ? "Read Less" : "Read More"}
          </span>
        )}
      </p>
    </div>
  );
};

export default FeaBox;
