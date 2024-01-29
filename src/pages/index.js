import { AddCardUI, BannerUI, ButtonUI, CardUI, CategoryCardUI, ImageUI, SectionTitleUI, SectionUI, ServiceSectionUI } from "@/components";
import SEO from '@/SEO/SEO'
import {index} from '@/SEO/SEO.config'
import axios from "axios";
import {Fragment} from "react";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import product from "@/pages/product";
import {log} from "next/dist/server/typescript/utils";
import IndexProduct from "@/components/index-product/index-product";
export default function Home({newProduct , indexCatalog , service, endBanners , advertisingProduct, banners}) {

  const {lang} = useSelector(state => state.langSlice)
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

        <div className="container pt-36">
          <BannerUI banners={banners}
                    height={'h-[350px] md:h-[400px] overflow-hidden lg:h-[450px] rounded-lg'}/>

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
          {
            advertisingProduct?.map(item => (
              <IndexProduct list={item}  key={item?.id}/>

            ))
          }


          {/*<SectionTitleUI title={lang === 'ru' ? advertisingProduct?.title_ru : advertisingProduct?.title_uz} href={'#'}/>*/}
          {/*<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px]">*/}
          {/*  {*/}
          {/*    newProduct?.map(product => (*/}
          {/*        <CardUI key={product?.id} imageArr={product?.images}*/}
          {/*                slug={`product/${product?.slug}`}*/}
          {/*                title_ru={product?.title_ru}*/}
          {/*                title_uz={product?.title_uz}*/}
          {/*                id={product?.id}*/}
          {/*                price={product?.price} salePrice={product?.sales}/>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</div>*/}
        </SectionUI>
          <SectionUI>
            <BannerUI banners={endBanners}
                      height={'h-[200px] md:h-[300px] overflow-hidden lg:h-[350px] rounded-lg'}/>
          </SectionUI>

        <SectionUI customPadding={'py-10 md:pt-20'}>
          <SectionTitleUI title={'Новинки'} href={'#'}/>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 md:gap-8 ">
            {
              newProduct?.map(product => (
                  <Fragment key={product?.id}>
                    <CardUI imageArr={product?.images}
                            id={product?.id}
                            slug={`${product?.slug}`}
                            title_ru={product?.title_ru}
                            title_uz={product?.title_uz}
                            short_descriptions={product?.short_descriptions}
                            price={product?.price}
                            salePrice={product?.sales}
                    />
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
  const [newProduct,banners,endBanners, indexCatalog , service , advertisingProduct , ] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products-catalog?is_new=new&page=1&page_size=10`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banners/`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ad-banners/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/main-page-categories/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/services/`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/index-categories/`),
  ]);
  return {
    props: {
      newProduct: newProduct?.data?.results,
        endBanners:endBanners?.data,
        banners: banners?.data,
      indexCatalog: indexCatalog.data,
      service: service?.data,
      advertisingProduct: advertisingProduct?.data,
    },
  };
}


