import { useState } from "react";

const CheckBox = ({  title ,value , style , formname}) => {
  const [checked , setChecked] = useState(false)

  
  const selectInput = () => {
    setChecked(!checked)
  }

  return (
    <div onClick={selectInput} className={`${style}  flex items-center text-sm lg:text-base text-textColor gap-x-2`}>
      <div className="inline-flex items-center">
        <label
            htmlFor={title}
            className="relative flex items-center p-0 rounded-full cursor-pointer"
        >
          <input
             {...formname}
            type="checkbox"
            className='w-4 h-4 border border-borderGrey rounded accent-darkBlue/80'
            id={title}
            value={value}
          />
        
        </label>
      </div>
      <label htmlFor={title} className="space-y-2 cursor-pointer"> 
      <span>
      {
         title
      }
      </span>
  
      </label> 

    
    </div>
  );
};

export default CheckBox;