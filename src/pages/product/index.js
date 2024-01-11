import { AccordionUI, BreadcrumbUI, CardUI, Navbar, SectionTitleUI, SectionUI } from "@/components"
import CheckBox from "@/components/CheckBoxUI/CheckBox-UI"
import { useEffect, useState } from "react"
import { RiSearch2Line } from "react-icons/ri"
const productImage = [
  {
    id: 1,
    image : '/Card.png',
    alt: ''
  },
  {
    id: 2,
    image : '/Card.png',
    alt: ''
  },
  {
    id: 3,
    image : '/Card.png',
    alt: ''
  },
]
const index = () => {
  const [sideBar, setSideBar] = useState(false)

  const sideBarHandler = () => {
    setSideBar(prevsideBar => !prevsideBar)
    console.log('render SideBar');
  }

  console.log(sideBar);

  return (
    <>
    <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik relative '}>
      <div className="space-y-5 md:space-y-[30px]">
        <BreadcrumbUI/>
        <SectionTitleUI title={'Каталог'} titleNum={'(35)'} btnText={'Filter'} btnStyle={'md:hidden'} onClick={sideBarHandler} />
        <div className="grid grid-cols-1 md:grid-cols-5 relative gap-6">
          <div className={`border space-y-4 lg:space-y-[30px] p-4 rounded-lg max-md:absolute z-40 top-0 left-[-100%] max-md:h-[100vh] max-md:w-[30vh] duration-500 bg-white ${sideBar && 'left-[0%]'}`}>
            <AccordionUI title={'Акции'}>
              <CheckBox formname={"stock"} value={'newItems'} title={'Новинки'} />
              <CheckBox formname={"stock"} value={'sales'}  title={"Скидки"} />
              <CheckBox formname={"stock"} value={'bestsellers'}  title={"Хиты продаж"} />
              <CheckBox formname={"stock"} value={'productsDay'}  title={"Товары дня"} />
            </AccordionUI>
            <hr />
            <AccordionUI title={'Бренд'} style={' '}>
            <div className="relative mt-5">
                <input
                    type="text"
                    id="search"
                    className="border border-borderGrey w-full  px-3.5 py-3 outline-none text-borderGrey rounded-lg"
                    placeholder="Поиск"
                />
                <label htmlFor="search">
                    <RiSearch2Line className="ri-search-line absolute -translate-y-[50%] top-[50%] right-2 text-primary" />
                </label>
            </div>
              <div className="space-y-3">
                <CheckBox formname={"stock"} value={'newItems'} title={'Apple'} />
                <CheckBox formname={"stock"} value={'sales'}  title={"Samsung"} />
                <CheckBox formname={"stock"} value={'bestsellers'}  title={"Huawei"} />
                <CheckBox formname={"stock"} value={'productsDay'}  title={"Xiaomi"} />
                <CheckBox formname={"stock"} value={'productsDay'}  title={"Panasonic"} />
                <CheckBox formname={"stock"} value={'productsDay'}  title={"Philips"} />
              </div>
            </AccordionUI>
          </div>
          <div className="md:col-span-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
            
          </div>
        </div>
      </div>
    </SectionUI>
    </>
  )
}

export default index