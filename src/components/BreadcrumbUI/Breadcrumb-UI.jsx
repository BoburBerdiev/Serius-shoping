import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronRight } from "react-icons/lu";

const BreadcrumbUI = ({pageLink, pageName, productName, filterArr}) => {
  const { t  } = useTranslation();
  const {asPath} = useRouter()
  const [page, setPage] = useState(null)

  const selectPage = (pageAsPath) => {
    switch (pageAsPath) {
      case '/order':
        setPage(t('navbar.basket'))
      break
      case '/contact':
        setPage(t('navbar.contact'))
      break
      case '/product':
        setPage(t('navbar.catalog'))
      break
    }
  }

  useEffect(() => {
    selectPage(asPath)
  }, [])
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
      <a href="/">{t('navbar.home')}</a>
      <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5 ${filterArr ? '' : 'text-darkBlue'}`} />
      <a className={filterArr ? '' : 'text-darkBlue'} href={asPath}>{page}</a>
      {
        filterArr &&
        <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5  `} />
      }
      {
        filterArr?.forEach(element => (
          <>
           <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5`} />
           <a href={element.link}>{element.name}</a>
          </>

        ))
      }
      {
        productName && 
        <>
        <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5 text-darkBlue`} />
        <a href="#" className="text-darkBlue">{productName}</a>
        </>
      }
    </div>
  )
}

export default BreadcrumbUI