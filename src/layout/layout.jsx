import {  BottomNavbar, Footer, Navbar  } from "@/components";
import { useEffect } from "react";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
// import Aos from "aos";


const Layout = ({ children }) => {
    const { data: catalog,refetch:refetchCatalog } = useQuery("catalog", () =>
        apiService.getData("/categories/"),
        {
            enabled:false
        }
    );
    const { data: contact,refetch:refetchContact } = useQuery("contact", () =>
        apiService.getData("/about/contacts/"),{
        enabled:false
        }
    ); const { data: socialMedia,refetch:refetchSocialMedia } = useQuery("socialMedia", () =>
        apiService.getData("/about/socials/"),{
        enabled:false
        }
    );

    useEffect(() => {
        refetchContact()
        refetchSocialMedia()
        refetchCatalog()
    }, []);

    return (
        <div className={''}>
            <Navbar catalog={catalog} phone={contact?.phone_1} />
                <main className={" min-h-screen mt-[80px] bg-red-700 " }>
                        {children}
                </main>
            <Footer contact={contact} socialMedia={socialMedia} />
            <BottomNavbar />
        </div>
    );
};

export default Layout;