import { ImageUI } from "../index"

const CardUl = ({src, alt, title, price, oldPrice, sale}) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="space-y-3.5">
        <div className="relative w-full h-[220px] md:h-[270px] lg:h-[310px] overflow-hidden rounded-lg">
          <ImageUI src={src} alt={alt} imgStyle={'object-cover'}/>  
        </div>
        <div>
              <h5 className="font-rubik md:text-lg ">
                {
                  title
                }
              </h5>
              <div className="flex items-center gap-5 font-medium ">
                {
                  sale && <p className="text-currentRed">{sale} </p>
                }
                <p className={`${sale ? 'text-xs line-through font-normal' : "text-xl text-currentRed "} mb-0`}>
                  {price}
                </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default CardUl