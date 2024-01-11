import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronRight } from "react-icons/lu";
import Link from "next/link";

const BreadcrumbUI = ({pageLink}) => {
  const { t  } = useTranslation();
  const {asPath} = useRouter()
  const [page, setPage] = useState(null)

  const selectPage = (pageAsPath) => {
    const pageSplit = pageAsPath.split('/')
    if(pageSplit[1] === 'order'){
      setPage(t('navbar.basket'))
    }else if(pageSplit[1] === 'contact') {
      setPage(t('navbar.contact'))
    }else if(pageSplit[1] === 'product') {
      setPage(t('navbar.catalog'))
    }
  }
  console.log(asPath.split('/'))
  useEffect(() => {
    selectPage(asPath)
  }, [])
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
      <Link href="/">{t('navbar.home')}</Link>
      <LuChevronRight className={`w-4 h-4 md:w-5 md:h-5 ${pageLink ? '' : 'text-darkBlue'}`} />
      <Link className={pageLink ? '' : 'text-darkBlue'} href={asPath}>{page}</Link>
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