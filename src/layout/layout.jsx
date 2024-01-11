import {  BottomNavbar, Footer, Navbar  } from "@/components";
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
        <div className="relative bg-red-700 pt-[50px] min-h-screen">
            <Navbar />
                <div className={" pt-[53px]  w-full min-h-screen" }>{children}</div>
            <Footer />
            <BottomNavbar />
        </div>
    );
};

export default Layout;