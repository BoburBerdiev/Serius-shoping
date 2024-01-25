import { AddCardUI, BannerUI, ButtonUI, CardUI, CategoryCardUI, ImageUI, SectionTitleUI, SectionUI, ServiceSectionUI } from "@/components";
import SEO from '@/SEO/SEO'
import {index} from '@/SEO/SEO.config'
import axios from "axios";
import {Fragment} from "react";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
export default function Home({newProduct , indexCatalog , service , advertisingProduct, banner}) {

  const {lang} = useSelector(state => state.langSlice)
  console.log(advertisingProduct)


  console.log(indexCatalog)

    console.log(banner)
  return (
      <>
        {/*<SEO*/}
        {/*    ogImage={'/evolution.png'}*/}
        {/*    title={index[lang].title}*/}
        {/*    description={index[lang].description}*/}
        {/*    ogTitle={index[lang].ogTitle}*/}
        {/*    ogDescription={index[lang].ogDescription}*/}
        {/*    twitterHandle={index[lang].twitterHandle}*/}
        {/*/>*/}

        <div className="container pt-28">
          <BannerUI src={'/mobile-images/banners/banner.jpg'} alt={'reklama'}
                    height={'h-[200px] md:h-[300px] overflow-hidden lg:h-[350px] rounded-lg'}/>

        </div>
        <SectionUI customPadding={'py-10 md:pt-20'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
            <CategoryCardUI grid={'md:row-span-2 md:h-full lg:col-span-3'}
                            text={lang === 'ru' ? indexCatalog[0]?.title_ru : indexCatalog[0]?.title_uz}
                            textPosition={'lg:top-10 lg:left-10'} iconPosition={'lg:bottom-auto lg:top-10 lg:right-10'}
                            src={indexCatalog[0]?.image}/>
            <CategoryCardUI grid={'lg:col-span-2'}
                            text={lang === 'ru' ? indexCatalog[1]?.title_ru : indexCatalog[1]?.title_uz}
                            textPosition={'lg:top-[30px] left-7'} src={indexCatalog[1]?.image}/>
            <CategoryCardUI grid={'sm:col-span-2 md:col-span-1 lg:col-span-2'} textPosition={'lg:top-[30px] left-7'}
                            text={lang === 'ru' ? indexCatalog[2]?.title_ru : indexCatalog[2]?.title_uz}
                            src={indexCatalog[2]?.image}/>
            <CategoryCardUI grid={'lg:col-span-4'}
                            text={lang === 'ru' ? indexCatalog[3]?.title_ru : indexCatalog[3]?.title_uz}
                            iconPosition={'lg:top-7 lg:right-11 lg:bottom-auto'} textPosition={'lg:top-[30px] left-7'}
                            src={indexCatalog[3]?.image}/>
            <CategoryCardUI grid={'lg:col-span-3'} iconPosition={'lg:top-[30px] lg:bottom-auto lg:right-[30px]'}
                            textPosition={'lg:bottom-8 lg:left-6 lg:top-auto'}
                            text={lang === 'ru' ? indexCatalog[4]?.title_ru : indexCatalog[4]?.title_uz}
                            src={indexCatalog[4]?.image}/>
            <CategoryCardUI grid={'lg:col-span-2'}
                            text={lang === 'ru' ? indexCatalog[5]?.title_ru : indexCatalog[5]?.title_uz}
                            textPosition={'lg:top-[30px] left-7'} src={indexCatalog[5]?.image}/>
            <CategoryCardUI grid={'lg:col-span-2'}
                            text={lang === 'ru' ? indexCatalog[6]?.title_ru : indexCatalog[6]?.title_uz}
                            textPosition={'lg:top-[30px] left-7'} src={indexCatalog[6]?.image}/>
          </div>
        </SectionUI>
        <SectionUI customPadding={'py-10 md:pb-20'}>
          <SectionTitleUI title={'Скидки'} href={'#'}/>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px]">
            {
              newProduct?.map(product => (
                  <CardUI key={product?.id} imageArr={product?.images}
                          slug={`product/${product?.slug}`}
                          title_ru={product?.title_ru}
                          title_uz={product?.title_uz}
                          id={product?.id}
                          price={product?.price} salePrice={product?.price}/>
              ))
            }
            <AddCardUI src={'/mobile-images/banners/bannerca.png'} alt={''} href={'#'}/>
          </div>
        </SectionUI>
        <div className="container">
          <BannerUI src={'/mobile-images/banners/banner.jpg'} alt={'reklama'}
                    height={'h-[200px] md:h-[300px] overflow-hidden lg:h-[350px] rounded-lg'}/>

        </div>
        <SectionUI customPadding={'py-10 md:pt-20'}>
          <SectionTitleUI title={'Новинки'} href={'#'}/>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8 ">
            {
              newProduct?.map(product => (
                  <Fragment key={product?.id}>
                    <CardUI imageArr={product?.images}
                            slug={product?.slug}
                            title_ru={product?.title_ru}
                            title_uz={product?.title_uz}
                            price={product?.price} salePrice={product?.price}/>
                  </Fragment>
              ))
            }
          </div>
        </SectionUI>
        <SectionUI customPadding={'py-10 md:pb-20'}>
          <ServiceSectionUI service={service}/>
        </SectionUI>
      </>
  )
}


export async function getServerSideProps({req, res}) {
  res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
  );
  // Fetch data from external API
  const [newProduct, indexCatalog , service , advertisingProduct , banner] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products-catalog?stock=new`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/main-page-categories/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/services/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/index-categories/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banners/`)

  ]);
  return {
    props: {
      newProduct: newProduct?.data?.results,
      indexCatalog: indexCatalog.data,
      service: service?.data,
      advertisingProduct: advertisingProduct?.data,
      banner: banner?.data,
    },
  };
}


// const { data: service } = useQuery("service", () =>
//     apiService.getData("/about/services/")
// );


