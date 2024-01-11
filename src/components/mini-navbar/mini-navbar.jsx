import {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";

const MiniNavbar = () => {
  const { t  } = useTranslation();
  const [dropdown, setDropdown] = useState(false)
  const [language, setLanguage] = useState('Русский')

  const handleChangleLang = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage('Русский')
  }
  const miniNavInfo = [
    {
      name: t('navbar.sales'),
      link: '#'
    },
    {
      name:  t('navbar.newItems'),
      link: '#'
    },
    {
      name: t('navbar.stock'),
      link: '#'
    },
  ]

  // useEffect(() => {
  //   i18n.changeLanguage(lang)
  // } , [])


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
    <div className="w-full bg-darkBlue py-2 md:py-3 text-white font-rubik">
      <div className="container flex items-center justify-between">
        <ul className="flex items-center gap-5 lg:gap-10 max-md:text-md lg:text-lg font-medium max-md:hidden">
          {
            miniNavInfo.map(item => (
              <li key={item.name}>
                <a href={item.link}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="flex items-center justify-between max-md:w-full gap-5 lg:gap-10">
          <a href={`tel:+998935071888`} className="text-xs lg:text-xl">+998 93 507 18 88</a>
          <div onClick={(e) => handleLanguage(e)} className="lang flex items-center gap-[10px] group cursor-pointer relative z-[60]">
            <div className="w-5 md:w-7 h-3 md:h-5" >
              {
                language === t('navbar.ru')
                &&
                <img src="/ru-flag.svg" alt="ru"   className="w-full h-full object-cover" />
              }
              {
                language === t('navbar.uz')
                &&
                <img src="/uzbekistan.png" alt="uz"   className="w-full h-full object-cover" />
              }
            </div>
            <div className="h-full">
              <p className="lang-change max-md:text-xs">{language}</p>
              <div className={`absolute z-[100] dropdown-list grid grid-rows-[0fr] duration-300 rounded-xl border-white w-auto top-6 md:top-[38px] left-[50%] translate-x-[-50%] ${dropdown && 'grid-rows-[1fr] border' }`}>
                <ul className="overflow-hidden rounded-xl bg-darkBlue">
                  <li onClick={ () => handleChangleLang(t('navbar.ru')) } className="duration-300 py-2 px-3 hover:bg-slate-600 cursor-pointer max-md:text-sm flex items-center gap-1">
                    <div className="h-4 w-4 shrink-0">
                      <img src="/ru-flag.svg" alt="ru" className="w-full h-full object-cover rounded-full" />  
                    </div> 
                    {t('navbar.ru')}
                  </li>
                  <li onClick={ () => handleChangleLang(t('navbar.uz')) } className="duration-300 py-2 px-3 hover:bg-slate-600 cursor-pointer max-md:text-sm flex items-center gap-1">
                    <div className="h-4 w-4 shrink-0">
                      <img src="/uzbekistan.png" alt="uz" className="w-full h-full rounded-full" />
                    </div>
                    {t('navbar.uz')}
                  </li>         
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniNavbar