import {
    BreadcrumbUI,
    ButtonUI,
    ImageUI,
    OrderForm,
    SectionTitleUI,
    SectionUI,
    ServiceSectionUI,
    ShopCartUI, SwiperUI,
    TotalCardUI
} from "@/components"
import {useEffect, useState} from "react"
import {IoIosCheckmarkCircle} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import apiService from "@/service/axois";
import {useMutation} from "react-query";
import {clearOrder} from "@/slice/basket";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";

const Index = () => {
    const [isOrderForm, setIsOrderForm] = useState(true)
    const {register, reset, handleSubmit, setValue} = useForm()
    const dispatch = useDispatch();
    const router = useRouter();
    const {t} = useTranslation();
    const {lastProduct} = useSelector((state) => state.lastProductSlice);
    const {
        mutate: userPost,
        data: userPostData,
        isLoading: userPostLoading,
        isSuccess: userPostSuccess,
    } = useMutation(({url, data}) => apiService.postData(url, data));
    const [step, setStep] = useState(1);
    const {basket, allPrice, allCount} = useSelector(
        (state) => state.basketSlice
    );
    useEffect(() => {
        if (userPostSuccess) {
            dispatch(clearOrder())
            setTimeout(() => {
                router.push("/product");
            }, 2000);
        }
    }, [userPostData]);


    const anOrderForm = () => (
        setIsOrderForm(prevstate => !prevstate)
    )

    const onSubmit = (data) => {
        const orderUser = {
            name: data?.name,
            phone: data?.phone,
            address: data?.address,
        }
        const orderProductUser = {
            ...orderUser,
            order: [],
        }
        basket?.map(item => {
            const list = {
                product_id: item?.id,
                count: item?.count
            }
            orderProductUser.order.push(list);
        })

        console.log(orderProductUser)
        userPost({url: "/product-orders/", data: orderProductUser});
        reset();
    }
    return (
        <div className="font-rubik min-h-screen">
            {
                allCount > 0 ?
                    <div>
                        <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik'}>
                            <BreadcrumbUI/>
                            {

                                <div>
                                    <div className="grid lg:grid-cols-6 mt-[30px] gap-4 lg:gap-x-[30px]">
                                        <div className="lg:col-span-4 order">
                                            {
                                                isOrderForm ?
                                                    <div
                                                        className="px-3 md:px-[30px] flex flex-col w-full divide-y  divide-borderGrey border border-borderGrey rounded-lg max-h-[580px] md:max-h-[420px] overflow-y-scroll">
                                                        {
                                                            basket?.map(product => (
                                                                <div key={product?.id}
                                                                     className="flex  items-center justify-center w-full py-4 md:py-[30px]">
                                                                    <ShopCartUI product={product}
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    :
                                                    <OrderForm onSubmit={handleSubmit(onSubmit)}
                                                               formUserName={{...register("name")}}
                                                               formUserPhone={{...register("phone")}}
                                                               formUserAddress={{...register("address")}}/>}
                                        </div>

                                        <div className="lg:col-span-2">
                                            <TotalCardUI howMany={allCount} price={allPrice}
                                                         btn={isOrderForm} onClick={anOrderForm}/>
                                        </div>
                                    </div>
                                    {
                                        lastProduct.length > 0 &&
                                    <div className="py-10">
                                        <SectionTitleUI title={t('product-inner.likeProduct')}/>
                                        <div>
                                            <SwiperUI idSwiper={'myswiper2'} productsArr={lastProduct}/>
                                        </div>
                                    </div>
                                    }
                                </div>

                            }
                        </SectionUI>

                        <div className="container ">
                            <div className="w-full border-t border-borderGrey"></div>
                        </div>
                        <SectionUI customPadding={'py-10 md:pb-20'}>
                            <ServiceSectionUI/>
                        </SectionUI>
                    </div>
                    :
                    <div className="">
                        <div
                            className="w-full h-screen flex flex-col items-center justify-center gap-y-4 md:gap-y-[30px]">
                            <div className="relative w-20 h-20 md:w-[134px] md:h-[152px]">
                                <ImageUI src={'/empty cart.png'} alt={'card'} imgStyle={'object-contain'}/>
                            </div>
                            <div className="flex flex-col items-center ">
                                <SectionTitleUI title={t('order.clear')} isBorder={true}/>
                                <p className="text-center">{t('catalog.findProduct')}</p>
                            </div>
                            <ButtonUI text={t('btn.sendHome')} href={'/'}
                                      className={'bg-darkBlue text-white py-3 px-5 md:py-4 md:px-8'}/>
                        </div>
                    </div>
            }


            {
                userPostSuccess &&
                <div
                    className="w-full font-rubik h-screen fixed top-0 left-0 bg-black/40 flex items-center justify-center z-50 ">
                    <div
                        className="max-w-[600px] w-full bg-white rounded-lg py-5 md:py-10 lg:py-[50px] flex flex-col items-center px-5 mx-5 gap-4 lg:gap-[30px]">
                        <IoIosCheckmarkCircle
                            className="w-10 h-10 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] text-currentGreen"/>
                        <div>
                            <SectionTitleUI ismargin={'true'} title={t('order.orderAccepted')} isBorder={true}/>
                        </div>
                        <p className="mt-2.5 text-center"></p>
                        <div className="w-1/2">
                            <ButtonUI text={t('btn.sendHome')} cardBtn={true} className={'py-3 md:py-4'} href={'/'}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Index