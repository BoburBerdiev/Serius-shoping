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

  return (
    <div className="w-full container bg-darkBlue py-4 text-white flex items-center justify-between font-rubik">
      <ul className="flex items-center gap-10 text-lg font-medium">
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
      <div className="flex items-center gap-10">
        <a href={`tell:+998935071888`} className="text-xl">+998 93 507 18 88</a>
        <div className="lang flex items-center gap-[10px] group cursor-pointer relative z-30">
          <div className="w-7 h-5">
            <img src="/ru-flag.svg" alt="" />
          </div>
          <div className="h-full">
            <p className="lang-change">Русский</p>
            <div className="absolute dropdown-list grid grid-rows-[0fr] group-hover:grid-rows-[1fr] duration-300 border border-white top-[38px] -right-5">
              <ul className="overflow-hidden rounded-2xl bg-darkBlue">
                <li className="duration-300 p-3 hover:bg-slate-600 cursor-pointer">Русский</li>
                <li className="duration-300 p-3 hover:bg-slate-600 cursor-pointer">Узбекский</li>         
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniNavbar