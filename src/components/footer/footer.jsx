import {ImageUI} from "@/components";
import {FaAngleRight} from "react-icons/fa";
import {BiLogoTelegram, BiLogoYoutube} from "react-icons/bi";
const IndexCard = ({contentPositionEnd}) => {
    // contentPosition ---- start or end


    return (
       <footer className={'bg-black'}>
           <div className={'container  py-3 flex items-center justify-between '}>
               <p className={'text-sm space-x-1 text-white/50'}>
                   <span>
                       © Li Auto Inc.
                   </span>
                   <span>
                   {new Date().getFullYear()}

                   </span>
                    <span>
                   Privacy Policy

                    </span>
               </p>

               <div className={'space-x-5 text-white/50 flex items-center text-xl'}>
                   <a href="£">
                       <BiLogoTelegram />
                   </a>
                   <a>
                       <BiLogoYoutube />
                   </a>
               </div>
           </div>
       </footer>
    )
};

export default IndexCard;