import {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import {SelectLang} from "@/components";
import Link from "next/link";
import {selectBrand, selectCatalog, selectStock, selectSubCatalog} from "@/slice/filterQuery";
import {useDispatch} from "react-redux";
import {selectFilterSubCategory} from "@/slice/filter";

const MiniNavbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()

  const miniNavInfo = [

    {
      name:  t('navbar.newItems'),
      link: '/product',
      value: "new"
    },

  ]


const filterHandle=(filter)=>{
  dispatch(selectStock(filter))
  dispatch(selectFilterSubCategory(null))
  dispatch(selectCatalog(""))
  dispatch(selectSubCatalog(""))
  dispatch(selectBrand(""))
}
  return (
    <div className="w-full bg-darkBlue py-2 md:py-3 text-white font-rubik">
      <div className="container flex items-center justify-between">
        <ul className="flex items-center gap-5 lg:gap-10 lg:text-sm font-medium max-md:hidden">
          {
            miniNavInfo.map(item => (
              <li key={item.name} onClick={()=>filterHandle(item?.value)}>
                <Link href={item.link} >
                  {item.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="flex items-center justify-between max-md:w-full gap-5 lg:gap-10">
          <a href={`tel:+998935071888`} className="text-sm">+998 93 507 18 88</a>
          <SelectLang />
        </div>
      </div>
    </div>
  )
}

export default MiniNavbar