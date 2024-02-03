import {BreadcrumbUI, SectionTitleUI, SectionUI, ServiceSectionUI} from "@/components";
import {RiMailLine} from "react-icons/ri";
import {FiPhone} from "react-icons/fi";
import {PiMapPinLine} from "react-icons/pi";
import axios from "axios";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import SEO from "@/SEO/SEO";
import {contactSEO} from "@/SEO/SEO.config";
import {formatPhoneNumber} from "@/helper";

const Contact = ({contact, socialMedia , service}) => {
    const { lang } = useSelector((state) => state.langSlice);
    const { t   } = useTranslation();

    return (
        <>
            <SEO
                ogImage={'/logo.png'}
                title={contactSEO[lang].title}
                description={contactSEO[lang].description}
                ogTitle={contactSEO[lang].ogTitle}
                ogDescription={contactSEO[lang].ogDescription}
                twitterHandle={contactSEO[lang].twitterHandle}
            />
            <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik '}>
                <div className={'space-y-[30px]'}>
                    <BreadcrumbUI/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="">
                            <SectionTitleUI ismargin={'0'} isBorder={true} title={t('contact.contact')}/>
                            <div className="space-y-5 py-[30px] border-b border-borderGrey">
                                <div className={'flex items-center gap-[30px]'}>
                                    <RiMailLine className={'text-[25px] flex-shrink-0'}/>
                                    <div className={'space-y-2'}>
                                        <p className={'text-sm text-currentGrey'}>
                                            {
                                                t('contact.email')
                                            }
                                        </p>
                                        <p className={'text-base md:text-xl'}>
                                            {
                                                contact?.email
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={'flex items-center gap-[30px]'}>
                                    <FiPhone className={'text-[25px] flex-shrink-0'}/>

                                    <div className={'space-y-2'}>
                                        <p className={'text-sm text-currentGrey'}>
                                            {
                                                t('contact.support')
                                            }
                                        </p>
                                        <p className={'text-base md:text-xl'}>
                                            {
                                                formatPhoneNumber(contact?.phone_1)

                                            }
                                        </p>
                                    </div>
                                    <div className={'space-y-2'}>
                                        <p className={'text-sm text-currentGrey'}>
                                            {
                                                t('contact.shop')
                                            }
                                        </p>
                                        <p className={'text-base md:text-xl'}>
                                            {
                                                formatPhoneNumber(contact?.phone_2)
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={'flex items-center gap-[30px]'}>
                                    <PiMapPinLine className={'text-[25px] flex-shrink-0'}/>
                                    <div className={'space-y-2'}>
                                        <p className={'text-base md:text-xl'}>
                                            {
                                                lang === 'ru' ? contact?.address_ru : contact?.address_uz
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex gap-[30px] mt-[38px] justify-center md:justify-start'}>
                                <a target={"_blank"} href={socialMedia?.instagram} className={'text-darkBlue'}>
                                    <p className={'text-base md:text-xl'}>
                                        Facebook
                                    </p>
                                </a>
                                <a target={"_blank"} href={socialMedia?.instagram} className={'text-darkBlue'}>
                                    <p className={'text-base md:text-xl'}>
                                        Instagram
                                    </p>
                                </a>
                                <a target={"_blank"} href={socialMedia?.telegram} className={'text-darkBlue'}>
                                    <p className={'text-base md:text-xl'}>
                                        Telegram
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div>
                            {
                                contact?.map &&
                            <iframe
                                className={'w-full aspect-video lg:aspect-[10/7]'}
                                src={contact?.map}
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                            }
                        </div>

                    </div>

                </div>
            </SectionUI>
            <div className="container ">
                <div className="w-full border-t border-borderGrey"></div>
            </div>
            <SectionUI customPadding={'py-10 md:pb-20'}>
                <ServiceSectionUI service={service}/>
            </SectionUI>
        </>

    );
};

export default Contact;


export async function getServerSideProps({req, res}) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    );
    // Fetch data from external API
    const [contact, socialMedia , service] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/contacts/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/socials/`),
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/services/`),
    ]);

    return {
        props: {
            contact: contact.data,
            socialMedia: socialMedia.data,
            service: service?.data,
        },
    };
}
