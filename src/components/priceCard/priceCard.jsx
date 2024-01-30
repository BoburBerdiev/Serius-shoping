import {HiMiniCheckCircle, } from "react-icons/hi2";
import { GoXCircleFill} from "react-icons/go";
import {ButtonUI} from "@/components";
import Skeleton from 'react-loading-skeleton';
import {priceView} from "@/helper";
import {useTranslation} from "react-i18next";

function PriceCard({isHave = true ,price ,salePrice ,handleAddBag, isLoading }) {
    const {t} = useTranslation();

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
                                <p> {t('product-inner.yesProduct')}</p>
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
                                <p> {t('product-inner.noProduct')} </p>
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
                             salePrice &&

                            <h3 className={`text-xl xl:text-2xl space-x-2 text-darkBlue ' `}>
                               <span>
                                   {
                                       priceView(salePrice)
                                   }
                               </span>
                               <span>
                                    {t('product-inner.sum')}
                               </span>
                            </h3>
                    }
                </div>
                <div>
                    {
                        isLoading
                        ?
                        <Skeleton width={'100%'} height={'30px'} />
                        :

                            <h3 className={`text-xl xl:text-2xl  space-x-2 ${salePrice && 'text-currentRed'}   `}>
                                <span>
                                    {
                                        priceView(price)
                                    }
                                </span>

                                <span>
                                {t('product-inner.sum')}
                           </span>
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
                    <ButtonUI text={t('product-inner.addBasket')} cardBtn={true} onClick={handleAddBag} className={'bg-darkBlue text-white mt-3.5'}/>
                }
            </div>
        </div>
);
}

export default PriceCard;