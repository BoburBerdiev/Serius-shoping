import {ImageUI} from "@/components";
import {FaAngleRight} from "react-icons/fa";
const IndexCard = ({contentPositionEnd}) => {
    // contentPosition ---- start or end


    return (
        <div className={`relative flex  ${contentPositionEnd === 'items-end' ? 'items-end' : contentPositionEnd}  p-5 py-10 justify-center h-full   `}>
            <ImageUI src={'/mega-1920.jpg'} alt={'mega'} imgStyle={'object-cover hidden md:block object-center z-[1]'}/>
            <ImageUI src={'/mega.jpg'} alt={'mega'} imgStyle={'object-cover block md:hidden object-center z-[1]'}/>
            <div className={'relative text-white z-[5] flex flex-col justify-center items-center gap-y-2 md:gap-y-4 text-center'}>
                <h3 className={'text-xl md:text-2xl lg:text-3xl font-bold'}>
                    Li Auto Pilot Assistance
                </h3>
                <p className={'text-sm md:text-base  lg:text-xl '}>
                    All-scenario Pilot Assistance with a Lifetime Free Subscription.

                </p>
                <button
                    className={'text-white  duration-200 flex items-center gap-x-1.5 text-sm md:text-base'}>
                    <span >
                        Leare more
                    </span>
                    <FaAngleRight />
                </button>
            </div>

        </div>
    )
};

export default IndexCard;