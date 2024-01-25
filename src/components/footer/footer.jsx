import { useEffect, useState } from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImageUI } from "..";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
const Footer = ({contact , socialMedia}) => {
    const [newYear , setNewYear] = useState(null)
    const { t  } = useTranslation();
    const { lang } = useSelector((state) => state.langSlice);
    useEffect(() => {
        setNewYear(new Date().getFullYear())
    }, [])




    return (
       <footer className={'bg-darkBlue text-white py-4 md:py-[30px] footer'}>
           <div className={'container font-rubik  mb-[68px] md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'}>
                <div className="flex flex-col justify-between max-sm:items-center gap-5">
                  <p className=" text-sm location max-sm:text-center">
                    <span className="font-medium"> {t('footer.location')} </span>
                    <span className="">
                       {
                           lang === 'ru' ? contact?.address_ru : contact?.address_uz
                       }
                    </span>
                  </p>
                  <div className="flex items-center gap-[30px]">
                    <a href={socialMedia?.instagram}>
                        <FaInstagram className="w-6 h-6"/>
                    </a>
                    <a href={socialMedia?.telegram}>
                        <FaTelegramPlane className="w-6 h-6" />
                    </a>
                    <a href={socialMedia?.telegram}>
                        <IoLogoWhatsapp className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="text-bas gap-2 flex flex-col items-center">
                  <div className="">
                    <a href={`${contact?.phone_1}`} className="block tel">
                        {
                        contact?.phone_1
                    }
                    </a>
                    <a href={`${contact?.phone_2}`} className="block tel">{`${contact?.phone_2}`}</a>
                  </div>
                  <a href={`mailto:${contact?.email}`} className="leading-6">
                        {
                            contact?.email
                        }
                  </a>
                </div>
                <div className="sm:max-md:col-span-2 flex flex-col justify-between items-center md:items-end">
                  <div className="flex items-center gap-[18px]">
                    <p>{t('footer.created')}</p>
                    <a target="_blank" href="https://abduganiev.uz" className="relative w-[120px] h-[34px] ">
                        <ImageUI src={'/abduganiev.png'} alt={'Abduganiev Technology'} imgStyle={'object-contain'}/>
                    </a>
                  </div>
                  <p className="text-center md:text-end">
                    &copy;
                    <span>{newYear}. </span>
                      <span>
                      {
                          t('footer.reserved')
                      }
                      </span>
                </p>
                </div>
           </div>
       </footer>
    )
};

export default Footer;