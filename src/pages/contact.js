import {BreadcrumbUI, SectionTitleUI, SectionUI, ServiceSectionUI} from "@/components";
import {RiMailLine} from "react-icons/ri";
import {FiPhone} from "react-icons/fi";
import {PiMapPinLine} from "react-icons/pi";

const Contact = () => {
    return (
        <>
            <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik '}>
                <div className={'space-y-[30px]'}>
                    <BreadcrumbUI/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="">
                            <SectionTitleUI ismargin={'0'} isBorder={true} title={'Наши контакты'}/>
                            <div className="space-y-5 py-[30px] border-b border-borderGrey">
                                <div className={'flex items-center gap-[30px]'}>
                                    <RiMailLine className={'text-[25px] flex-shrink-0'}/>
                                    <div className={'space-y-2'}>
                                        <p className={'text-sm text-currentGrey'}>
                                            Электронная почта
                                        </p>
                                        <p className={'text-base md:text-xl'}>
                                            info@email.com
                                        </p>
                                    </div>
                                </div>
                                <div className={'flex items-center gap-[30px]'}>
                                    <FiPhone className={'text-[25px] flex-shrink-0'}/>

                                    <div className={'space-y-2'}>
                                        <p className={'text-sm text-currentGrey'}>
                                            Служба поддержки
                                        </p>
                                        <p className={'text-base md:text-xl'}>
                                            +99893 507 18 88
                                        </p>
                                    </div>
                                    <div className={'space-y-2'}>
                                        <p className={'text-sm text-currentGrey'}>
                                            Магазин
                                        </p>
                                        <p className={'text-base md:text-xl'}>
                                            +99897 903 28 57
                                        </p>
                                    </div>
                                </div>
                                <div className={'flex items-center gap-[30px]'}>
                                    <PiMapPinLine className={'text-[25px] flex-shrink-0'}/>
                                    <div className={'space-y-2'}>
                                        <p className={'text-base md:text-xl'}>
                                            Улица Бозбазар, проезд 7, дом 21, офис 10B, Мирзо-Улугбекский район,
                                            Ташкент, Узбекистан
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex gap-[30px] mt-[38px] justify-center md:justify-start'}>
                                <a href="" className={'text-darkBlue'}>
                                    <p className={'text-base md:text-xl'}>
                                        Facebook
                                    </p>
                                </a>
                                <a href="" className={'text-darkBlue'}>
                                    <p className={'text-base md:text-xl'}>
                                        Instagram
                                    </p>
                                </a>
                                <a href="" className={'text-darkBlue'}>
                                    <p className={'text-base md:text-xl'}>
                                        Telegram
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <iframe
                                className={'w-full aspect-video lg:aspect-[10/7]'}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.585365411789!2d69.2450475764362!3d41.29612770165031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b749be55555%3A0x1afb789ee32b6ccf!2sAbduganiev%20Technology!5e0!3m2!1suz!2s!4v1704957731423!5m2!1suz!2s"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                </div>
            </SectionUI>
            <div className="container ">
                <div className="w-full border-t border-borderGrey"></div>
            </div>
            <SectionUI customPadding={'py-10 md:pb-20'}>
                <ServiceSectionUI/>
            </SectionUI>
        </>

    );
};

export default Contact;