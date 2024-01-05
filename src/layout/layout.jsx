import {  Footer, Navbar  } from "@/components";
import { useEffect } from "react";
// import Aos from "aos";


const Layout = ({ children }) => {

    // useEffect(() => {
    //     Aos.init({
    //         once: true
    //     });
    // }, []);

    return (
        // !! padding oliw kk navbarni cqarib yuboriw ucun !!
        <div className="relative bg-red-700 pt-[50px] ">
            <Navbar />
            <div className={" pt-[53px]  " }>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;