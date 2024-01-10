import React, {useState} from 'react';
import {HiMiniCheckCircle} from "react-icons/hi2";
import {GoXCircleFill} from "react-icons/go";
import {ButtonUI} from "@/components";

function PriceCard() {
    const [isHave, setIsHave] = useState(true)
    return (
        <div className='w-full border border-borderGrey rounded-lg p-3 md:p-5  bg-white  left-0'>
            {
                isHave ?
                    <div className='flex items-center gap-1 text-[#36E3A4]  mb-5'>
                        <HiMiniCheckCircle className='w-6 h-6 '/>
                        <p>В наличии</p>
                    </div>
                    :
                    <div>
                        <div className='flex items-center gap-1 text-currentRed  mb-5'>
                            <GoXCircleFill className='w-6 h-6 '/>
                            <p>Нет в наличии</p>
                        </div>
                    </div>
            }
            <h3 className={`text-xl xl:text-2xl ${isHave ? 'text-black' : 'text-borderGrey'} mb-5 md:mb-[30px] `}>1 200
                000 сум</h3>
            <ButtonUI text={'Добавить в корзину'} cardBtn={true} className={'bg-darkBlue text-white mt-3.5'}/>
        </div>
    );
}

export default PriceCard;