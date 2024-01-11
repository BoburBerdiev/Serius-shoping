import { BreadcrumbUI, CardUI, Navbar, SectionTitleUI, SectionUI } from "@/components"
import { useEffect, useState } from "react"
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
    <SectionUI customPadding={'pt-[140px] md:pt-40 pb-10 font-rubik pruduct-inner relative '}>
      <div className="space-y-5 md:space-y-[30px]">
        <BreadcrumbUI/>
        <SectionTitleUI title={'Чехлы для телефонов'} titleNum={'(35)'} btnText={'Filter'} btnStyle={'md:hidden'} onClick={sideBarHandler} />
        <div className="grid grid-cols-1 md:grid-cols-5 relative gap-6">
          <div className={`bg-blue-900 max-md:absolute z-40 top-0 left-[-100%] max-md:h-[100vh] max-md:w-[30vh] duration-500 ${sideBar && 'left-[0%]'}`}>

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