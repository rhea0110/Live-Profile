import React from 'react'

const Tooltip = (props) => {
    return (
      <div className="relative  px-2 py-1.5 text-white rounded mt-5 bg-[#157DEC] w-full h-full">
        {props.btn}
        <div className="absolute hidden top-0 left-0 group-hover:block bg-white text-white border">
          {props.title}
        </div>
      </div>
    );
}

export default Tooltip;



