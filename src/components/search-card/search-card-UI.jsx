import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import {ImageUI} from "@/components";
import lang from "@/slice/lang";
import {useSelector} from "react-redux";

const SearchCardUI = ({image, href,  title_uz , title_ru ,subtitle_ru ,subtitle_uz, price, sale}) => {
    const { lang } = useSelector((state) => state.langSlice);

    return (
    <Link href={href} className="flex items-center justify-between gap-x-5 border-b p-3 bg-white hover:bg-slate-100 duration-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative rounded bg-white flex-shrink-0">
            <ImageUI src={image} alt={title_uz} imgStyle={'object-contain'}  />
          </div>
          <div className="flex flex-col justify-between gap-y-1">
            <h4 className="text-sm font-bold">
                {lang === 'ru' ? title_ru : title_uz}
            </h4>
            <p className="text-currentGrey text-xs">{lang === 'ru' ? subtitle_ru :subtitle_uz}</p>
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
    </Link>
  )
}

export default SearchCardUI