import Link from "next/link";
import {ImageUI} from "@/components";
import {CiMenuBurger} from "react-icons/ci";
import {useState} from "react";
import {FaChevronDown} from "react-icons/fa";

const navInfo = [
    {
    name:'Li L7',
        link:'#'

},

    {
        name:'Li L8',
        link:'#'

    },
    {
        name:'Li L9',
        link:'#'

    },
    {
        name:'Li MEGA',
        link:'#'

    },
    {
        name:'About Us',
        link:'#'

    },{
        name:'Investor Relations',
        link:'#'
    },

]


const Navbar = () => {

    const [openNav , setOpenNav] = useState(false)
   return (
       <nav
           className="bg-white  fixed w-[100%] z-20 top-0 start-0 border-b border-gray-200 ">
           <div className="container flex flex-wrap items-center justify-between py-4 overflow-hidden">
               <Link href="/" className="flex items-center space-x-3 relative w-[98px] h-4">
                        <ImageUI src={'/LiAuto-logo.svg'} />

               </Link>
               <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                   <div className="flex flex-col items-center cursor-pointer">
                       <div className="flex items-center gap-1  duration-500 ">
                           <p className={'text-base md:text-sm'}>Language</p>
                           <FaChevronDown className="text-xs"/>
                       </div>
                       <div
                           className="dropdown-item grid grid-rows-[0fr] md:absolute z-50 top-20 lg:top-[94px] bg-white border-light transition-all ease duration-500">
                           <div className=" text-base max-xs:text-sm overflow-hidden">
                               <ul className="flex flex-col dropdown-list divide-y divide-[#E6E8EC] py-5 px-6 tracking-widest max-lg:text-center text-dark">
                                   <li><a
                                       className="transition-all duration-200 nav-link hover:text-darkBlue ease block">uz</a></li>
                                   <li><a
                                       className="transition-all duration-200 nav-link hover:text-darkBlue ease block">ru </a></li>

                               </ul>
                           </div>
                       </div>
                   </div>
                   <button onClick={() => setOpenNav(!openNav)} type="button"

                           className="inline-flex items-center p-1  justify-center text-sm text-black rounded-sm md:hidden   focus:outline-none focus:ring-2 focus:ring-black"
                   >
                       <CiMenuBurger className={'text-xl'}/>
                   </button>
               </div>
               <div
                   className={`items-center justify-between overflow-hidden h-full bg-white w-full md:flex md:w-auto md:order-1 fixed  duration-500 md:static z-[-1] left-0 ${openNav ? 'top-[57px]' : 'top-[-100%]'} `}
               >


                   <ul className="flex flex-col overflow-hidden items-center w-full  p-4 text-base md:text-sm md:p-0  font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 bg-white ">
                       {
                           navInfo.map(nav => (
                               <li key={nav.name}>
                                   <a href="#"
                                      className="block w-full text-black hover:opacity-60 py-4 md:py-0 "
                                   >{nav.name}</a>
                               </li>


                           ))
                       }


                   </ul>
               </div>
           </div>
       </nav>
   )
};

export default Navbar;