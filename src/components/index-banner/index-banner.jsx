import {ImageUI} from "@/components";
import { FaAngleDown } from "react-icons/fa6";
const IndexBanner = ({ logoImage , carHeader , button , bgRes , bg}) => {

    return (
        <div className={'relative flex items-start justify-center h-full pt-[20%]  md:pt-[15%] lg:pt-[10%] '}>
            <ImageUI src={bg} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
            <ImageUI src={bgRes} alt={'mega'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative z-[5] flex flex-col justify-center items-center gap-y-6'}>
                <div className={`relative ${carHeader ? ' w-[400px] lg:w-[500px] h-[90px]' : ' w-[200px] h-[60px]'}`}>
                    <ImageUI src={logoImage} alt={'mega'} imgStyle={'object-contain'}/>
                </div>
                {
                    button &&
                    <button
                        className={'py-2 px-4 bg-white text-black text-xs md:text-base rounded-full duration-200 hover:text-white hover:bg-white '}>
                        Learn more
                    </button>
                }


            </div>
            <div className={'absolute bottom-3 left-[50%] translate-x-[-50%] z-[5]'}>
                <FaAngleDown  className={'text-3xl text-white animate-bounce'}/>
            </div>

        </div>
    )
};

export default IndexBanner;