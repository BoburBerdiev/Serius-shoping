import '@/styles/globals.css'
import Layout from "@/layout/layout";
import { HydrationProvider, Client } from "react-hydration-provider";
import {Provider} from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import "../localization/i18n";
import {store} from '@/store';

export default function App({ Component, pageProps }) {
  return  (
      <HydrationProvider>
          <Provider store={store}>
                  <Client >

                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                  </Client>
          </Provider>

      </HydrationProvider>

      )

}
