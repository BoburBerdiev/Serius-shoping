import { useEffect, useState } from "react"

const miniNavInfo = [
  {
    name: 'Скидки',
    link: '#'
  },
  {
    name: 'Новинки',
    link: '#'
  },
  {
    name: 'Акции',
    link: '#'
  },
]
const MiniNavbar = () => {

  const [dropdown, setDropdown] = useState(false)
  const [language, setLanguage] = useState('Русский')
  
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
    <div className="w-full bg-darkBlue py-4 text-white font-rubik">
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
        <div className="flex items-center justify-around max-md:w-full gap-5 lg:gap-10">
          <a href={`tell:+998935071888`} className="max-md:text-md lg:text-xl">+998 93 507 18 88</a>
          <div onClick={(e) => handleLanguage(e)} className="lang flex items-center gap-[10px] group cursor-pointer relative z-50">
            <div className="w-7 h-5">
              {
                language == 'Русский'
                &&
                <img src="/ru-flag.svg" alt="ru" className="w-full h-full object-cover" />
              }
              {
                language == 'Узбекский'
                &&
                <img src="/uzbekistan.png" alt="uz" className="w-full h-full object-cover" />
              }
            </div>
            <div className="h-full">
              <p className="lang-change">{language}</p>
              <div className={`absolute z-50 dropdown-list grid grid-rows-[0fr] duration-300 border-white top-[38px] -right-5 ${dropdown && 'grid-rows-[1fr] border' }`}>
                <ul className="overflow-hidden rounded-2xl bg-darkBlue">
                  <li onClick={() => setLanguage('Русский')} className="duration-300 p-3 hover:bg-slate-600 cursor-pointer">Русский</li>
                  <li onClick={() => setLanguage('Узбекский')} className="duration-300 p-3 hover:bg-slate-600 cursor-pointer">Узбекский</li>         
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