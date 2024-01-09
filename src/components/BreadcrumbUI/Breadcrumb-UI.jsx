import { LuChevronRight } from "react-icons/lu";

const BreadcrumbUI = ({}) => {
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
      <a href="#">Главная</a>
      <LuChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      <a href="#">Каталог</a>
      <LuChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      <a href="#">Аудио</a>
      <LuChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      <a href="#">Наушники Xiaomi</a>
      <LuChevronRight className="w-4 h-4 md:w-5 md:h-5 text-darkBlue" />
      <a href="#" className="text-darkBlue">Наушники Xiaomi Buds 3T Pro (White)</a>
    </div>
  )
}

export default BreadcrumbUI