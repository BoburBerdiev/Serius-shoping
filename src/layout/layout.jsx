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
        <div className={''}>
            <Navbar />
                <main className={" min-h-[100vh] mt-[80px] bg-red-700 " }>
                        {children}
                </main>
            <Footer />
            <BottomNavbar />
        </div>
    );
};

export default Layout;