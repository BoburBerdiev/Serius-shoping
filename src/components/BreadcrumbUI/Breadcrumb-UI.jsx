import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import {useSelector} from "react-redux";

const BreadcrumbUI = ({pageLink}) => {
  const { t  } = useTranslation();
  const {asPath} = useRouter()
  const [page, setPage] = useState(null)
  const {catalog} = useSelector(state => state.filterQuerySlice)
  const selectPage = (pageAsPath) => {
    const pageSplit = pageAsPath.split('/')
    if(pageSplit[1] === 'order'){
      setPage(t('navbar.basket'))
    }else if(pageSplit[1] === 'contact') {
      setPage(t('navbar.contact'))
    }else if(pageSplit[1].includes('product') ) {
      setPage(t('navbar.catalog'))
    }else if(pageSplit[1] === 'product') {
      const data = catalog.split("navbar.catalog")[1]
      setPage(t('home.catalog'))
    }
  }
  useEffect(() => {
    selectPage(asPath)
  }, [])
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
      <Link href="/">{t('navbar.home')}</Link>
      <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5 ${pageLink ? '' : 'text-darkBlue'}`} />
      {
        pageLink ?
          <Link className={pageLink ? '' : 'text-darkBlue'} href={'/product'}>{t('navbar.catalog')}</Link>:
          <Link className={pageLink ? '' : 'text-darkBlue'} href={asPath}>{page}</Link>
      }
      {
          pageLink &&
          <>
        <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5  text-darkBlue`} />
        <Link className={'text-darkBlue'} href={asPath}>{pageLink}</Link>
          </>

      }


    </div>
  )
}

export default BreadcrumbUI