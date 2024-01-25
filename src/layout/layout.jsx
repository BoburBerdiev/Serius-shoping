import {  BottomNavbar, Footer, Navbar  } from "@/components";
import { useEffect } from "react";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
// import Aos from "aos";


const Layout = ({ children }) => {
    const { data: catalog } = useQuery("catalog", () =>
        apiService.getData("/categories/")
    );
    const { data: contact } = useQuery("contact", () =>
        apiService.getData("/about/contacts/"),
    ); const { data: socialMedia } = useQuery("socialMedia", () =>
        apiService.getData("/about/socials/")
    );

    // useEffect(() => {
    //     Aos.init({
    //         once: true
    //     });
    // }, []);

    return (
        <div className={''}>
            <Navbar catalog={catalog} />
                <main className={" min-h-[100vh] mt-[80px] bg-red-700 " }>
                        {children}
                </main>
            <Footer contact={contact} socialMedia={socialMedia} />
            <BottomNavbar />
        </div>
    );
};

export default Layout;