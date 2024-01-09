import { useEffect, useState } from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImageUI } from "..";
const Footer = () => {
    const [newYear , setNewYear] = useState(null)
    
    useEffect(() => {
        setNewYear(new Date().getFullYear())
    }, [])

    return (
       <footer className={'bg-darkBlue text-white py-4 md:py-[30px] footer'}>
           <div className={'container font-rubik  mb-[68px] md:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'}>
                <div class="flex flex-col justify-between max-sm:items-center gap-5">
                  <p class=" text-sm location max-sm:text-center">
                    <span className="font-medium">Наш адрес:</span>
                    <span class="">улица Бозбазар, проезд 7, дом 21, офис 10B, Мирзо-Улугбекский район, Ташкент, Узбекистан
                    </span>
                  </p>
                  <div class="flex items-center gap-[30px]">
                    <a href="">
                        <FaInstagram className="w-6 h-6"/>
                    </a>
                    <a href="">
                        <FaTelegramPlane className="w-6 h-6" />
                    </a>
                    <a href="">
                        <IoLogoWhatsapp className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div class="text-bas gap-2 flex flex-col items-center">
                  <div class="">
                    <a href="tel:+99893 507 18 88" class="block tel">+99893 507 18 88</a>
                    <a href="tel:+99890 903 28 57" class="block tel">+99890 903 28 57</a>
                  </div>
                  <a href="mailto:info@email.com" class="leading-6">info@email.com</a>
                </div>
                <div class="sm:max-md:col-span-2 flex flex-col justify-between items-center md:items-end">
                  <div class="flex items-center gap-[18px]">
                    <p>Сайт создан</p>
                    <a target="_blank" href="https://abduganiev.uz" className="relative w-[120px] h-[34px] ">
                        <ImageUI src={'/abduganiev.png'} alt={'Abduganiev Technology'} imgStyle={'object-contain'}/>
                    </a>
                  </div>
                  <p class="text-center md:text-end">
                    &copy;
                    <span>{newYear}. </span>
                    All rights reserved.
                </p>
                </div>
           </div>
       </footer>
    )
};

export default Footer;