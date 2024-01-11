import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changleLang} from "@/slice/lang";
import { IoIosArrowDown } from "react-icons/io";

const SelectLang = () => {
    const [language, setLanguage] = useState('Русский')
    const [dropdown, setDropdown] = useState(false)
    const { t , i18n  } = useTranslation();
    const dispatch = useDispatch();
    const { lang } = useSelector((state) => state.langSlice);
    const handleChangleLang = (lang) => {
        i18n.changeLanguage(lang)
        dispatch(changleLang(lang))
    }
    const handleLanguage=(e)=>{
        console.log(e);
        e.stopPropagation()
        setDropdown(prevState => !prevState)
    }

    useEffect(() => {
        const handleCloseModal=()=>{
            setDropdown(false)
        }

        window.addEventListener('click',handleCloseModal)

        return () => {
            window.removeEventListener('click',handleCloseModal)
        }
    }, [dropdown])

    return (
        <div onClick={(e) => handleLanguage(e)}
             className="lang flex items-center gap-[10px] group cursor-pointer relative z-[60]">

            <div className="h-full w-full gap-x-2 flex">
                <p className="lang-change max-md:text-xs text-sm"> {
                    lang === 'ru' ? t('navbar.ru')
                        : t('navbar.uz')
                }</p>
                <span>
                    <IoIosArrowDown />
                </span>
                <div
                    className={`absolute w-[60px] z-[100] dropdown-list grid grid-rows-[0fr] duration-300 rounded-xl border-white  top-6 md:top-[38px] left-[50%] translate-x-[-50%] ${dropdown && 'grid-rows-[1fr] border'}`}>
                    <ul className="overflow-hidden rounded-xl bg-darkBlue">
                        <li onClick={() => handleChangleLang(t('ru'))}
                            className="duration-300 py-2 px-3 hover:bg-slate-600 cursor-pointer max-md:text-sm flex items-center justify-center gap-1">
                            <div className="h-4 w-4 shrink-0">
                                <img src="/ru-flag.svg" alt="ru" className="w-full h-full object-cover rounded-full"/>
                            </div>
                            {t('navbar.ru')}
                        </li>
                        <li onClick={() => handleChangleLang(t('uz'))}
                            className="duration-300 py-2 px-3 hover:bg-slate-600 cursor-pointer max-md:text-sm flex items-center justify-center gap-1">
                            <div className="h-4 w-4 shrink-0">
                                <img src="/uzbekistan.png" alt="uz" className="w-full h-full rounded-full"/>
                            </div>
                            {t('navbar.uz')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SelectLang;