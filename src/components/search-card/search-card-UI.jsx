import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const SearchCardUI = ({src, href, alt, title, subtitle, price, sale}) => {
  return (
    <a href={href} className="flex items-center justify-between gap-x-5 border-b p-3 bg-white hover:bg-slate-100 duration-300 select-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white select-none">
            <img src={'/mobile-images/categories/smart-watch.png'} alt={alt} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between gapy-1">
            <h4 className="text-sm font-bold">{`Iphone XS`}</h4>
            <p className="text-currentGrey text-xs">{`subtitle`}</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            {
              sale
              ?
              <del className="text-xs order-2 text-currentGrey">
                {price}
              </del>
              :
              <h4 className="text-sm">
                {price}
              </h4>
            }
            <p className={`${sale ? 'text-sm' : 'text-xs'} text-currentRed font-medium`}>{sale}</p>
          </div>
        </div>
        <p className="text-currentGrey">
          <RiArrowRightSLine />
        </p>
    </a>
  )
}

export default SearchCardUI