import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const AccordionUI = ({children  , title ,style }) => {
  const [openList , setOpenList] = useState(false)

  const openAccordion = () => {
    setOpenList(!openList)
  }

  return (
    <div>
      <div onClick={openAccordion} className= {`${style} bg-white  cursor-pointer justify-between flex  items-center ${openList ? 'pb-5': 'p-0'}  `}>
        <span className="font-medium lg:text-lg">
        {
          title  
        }
        </span>
        <LuChevronDown className={` w-4 h-4 lg:w-6 lg:h-6 flex-shrink-0 font-medium duration-200 ${openList ? '-rotate-180' : 'rotate-0'} `} />
      </div>
      {
        openList && 

      <div className={`${openList } transition-opacity transition-1000 flex flex-col gap-3`}>
          {children}
      </div>
      }
        
    </div>
  );
};

export default AccordionUI;