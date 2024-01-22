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
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return  (
      <HydrationProvider>
          <QueryClientProvider client={queryClient}>
              <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                      <Layout>
                          <Component {...pageProps} />
                      </Layout>
                  </PersistGate>
              </Provider>
          </QueryClientProvider>
      </HydrationProvider>
      )

}
