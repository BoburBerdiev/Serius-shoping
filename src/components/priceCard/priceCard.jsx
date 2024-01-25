import React, {useState} from 'react';
import {HiMiniCheckCircle, HiOutlineMinusSmall} from "react-icons/hi2";
import {GoPlus, GoXCircleFill} from "react-icons/go";
import {ButtonUI} from "@/components";
import {decrementCount, incrementCount} from "@/slice/basket";
import Skeleton from 'react-loading-skeleton';

function PriceCard({isHave = true ,price ,salePrice ,handleAddBag, isLoading }) {

    return (
        <div className='w-full border border-borderGrey rounded-lg p-3 md:p-5  bg-white space-y-3 left-0'>
            {
                isHave ?
                    <div>
                        {
                            isLoading
                            ? 
                            <Skeleton width={'25%'} height={'20px'} />
                                :
                            <div className='flex items-center gap-1 text-[#36E3A4]  mb-5'>
                                <HiMiniCheckCircle className='w-6 h-6 '/>
                                <p>В наличии</p>
                            </div>
                        }
                    </div>
                    :
                    <div>
                        {
                            isLoading
                            ?
                            <Skeleton width={'25%'} height={'20px'} />
                            :
                            <div className='flex items-center gap-1 text-currentRed  mb-5'>
                                <GoXCircleFill className='w-6 h-6 '/>
                                <p>Нет в наличии</p>
                            </div>
                        }
                    </div>
            }
            <div className={'space-y-1'}>
                <div>
                    {
                        isLoading
                        ?
                        <Skeleton width={'100%'} height={'30px'} />
                        :
                        <h3 className={`text-xl xl:text-2xl  ${salePrice && 'text-[#36E3A4]' }   `}>
                            {
                                salePrice?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
                            }сум
                        </h3>
                    }
                </div>
                <div>
                    {
                        isLoading
                        ?
                        <Skeleton width={'100%'} height={'30px'} />
                        :
                        <h3 className={`text-xl xl:text-2xl  ${salePrice && 'text-currentRed' }   `}>
                            {
                                price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
                            }
                            сум
                        </h3>
                    }
                </div>
            </div>
            <div>
                {
                    isLoading
                    ?
                    <Skeleton width={'100%'} height={'30px'} />
                    :
                    <ButtonUI text={'Добавить в корзину'} cardBtn={true} onClick={handleAddBag} className={'bg-darkBlue text-white mt-3.5'}/>
                }
            </div>
        </div>
);
}

export default PriceCard;