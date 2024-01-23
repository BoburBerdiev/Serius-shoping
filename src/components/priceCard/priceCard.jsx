import React, {useState} from 'react';
import {HiMiniCheckCircle, HiOutlineMinusSmall} from "react-icons/hi2";
import {GoPlus, GoXCircleFill} from "react-icons/go";
import {ButtonUI} from "@/components";
import {decrementCount, incrementCount} from "@/slice/basket";

function PriceCard({isHave = true ,price ,salePrice ,handleAddBag }) {

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
            <div className={'space-y-2'}>
                <h3 className={`text-xl xl:text-2xl  ${salePrice && 'text-[#36E3A4]' }   `}>
                    {
                        salePrice?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
                    }сум
                </h3>
                    <h3 className={`text-xl xl:text-2xl  ${salePrice && 'text-currentRed' }   `}>
                        {
                            price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
                        }
                        сум</h3>

            </div>


                <ButtonUI text={'Добавить в корзину'} cardBtn={true} onClick={handleAddBag}
                          className={'bg-darkBlue text-white mt-3.5'}/>
        </div>
);
}

export default PriceCard;