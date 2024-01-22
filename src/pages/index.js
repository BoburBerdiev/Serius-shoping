import { AddCardUI, BannerUI, ButtonUI, CardUI, CategoryCardUI, ImageUI, SectionTitleUI, SectionUI, ServiceSectionUI } from "@/components";
import SEO from '@/SEO/SEO'
import {index} from '@/SEO/SEO.config'
import axios from "axios";
import {Fragment} from "react";
import {useSelector} from "react-redux";
export default function Home({newProduct , indexCatalog}) {

  const {lang} = useSelector(state => state.langSlice)
  console.log(indexCatalog)



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
    <header className="w-full h-screen bg-darkBlue">
      <div className="container h-full pt-40 grid grid-cols-1 md:grid-cols-2 text-white items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-md:text-center font-superaGothic max-w-[600px]">Идеальный магазин мобильных аксессуаров</h2>
        </div>
        <div className="w-full h-full relative">
          <ImageUI src={'/phone.png'} alt={'phone'} imgStyle={'object-contain'}/>
        </div>
      </div>
    </header>
    <SectionUI customPadding={'py-10 md:pt-20'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <CategoryCardUI grid={'md:row-span-2 md:h-full lg:col-span-3'} text={lang === 'ru' ? indexCatalog[0]?.title_ru : indexCatalog[0]?.title_uz} link={'#'} textPosition={'lg:top-10 lg:left-10'} iconPosition={'lg:bottom-auto lg:top-10 lg:right-10'} src={indexCatalog[0]?.image}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={lang === 'ru' ? indexCatalog[1]?.title_ru : indexCatalog[1]?.title_uz} textPosition={'lg:top-[30px] left-7'} src={indexCatalog[1]?.image}/>
        <CategoryCardUI grid={'sm:col-span-2 md:col-span-1 lg:col-span-2'} textPosition={'lg:top-[30px] left-7'} text={lang === 'ru' ? indexCatalog[2]?.title_ru : indexCatalog[2]?.title_uz} src={indexCatalog[2]?.image}/>
        <CategoryCardUI grid={'lg:col-span-4'} text={lang === 'ru' ? indexCatalog[3]?.title_ru : indexCatalog[3]?.title_uz} iconPosition={'lg:top-7 lg:right-11 lg:bottom-auto'} textPosition={'lg:top-[30px] left-7'} src={indexCatalog[3]?.image}/>
        <CategoryCardUI grid={'lg:col-span-3'} iconPosition={'lg:top-[30px] lg:bottom-auto lg:right-[30px]'} textPosition={'lg:bottom-8 lg:left-6 lg:top-auto'} text={lang === 'ru' ? indexCatalog[4]?.title_ru : indexCatalog[4]?.title_uz} src={indexCatalog[4]?.image}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={lang === 'ru' ? indexCatalog[5]?.title_ru : indexCatalog[5]?.title_uz} textPosition={'lg:top-[30px] left-7'} src={indexCatalog[5]?.image}/>
        <CategoryCardUI grid={'lg:col-span-2'} text={lang === 'ru' ? indexCatalog[6]?.title_ru : indexCatalog[6]?.title_uz} textPosition={'lg:top-[30px] left-7'} src={indexCatalog[6]?.image}/>
      </div>
    </SectionUI>
    <SectionUI customPadding={'py-10 md:pb-20'}>
      <SectionTitleUI title={'Скидки'} href={'#'}/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-[30px]">
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
        <AddCardUI src={'/mobile-images/banners/bannerca.png'} alt={''} href={'#'}/>
      </div>
    </SectionUI>
      <div className="container">
        <BannerUI src={'/mobile-images/banners/banner.jpg'} height={'h-[200px] md:h-[300px] overflow-hidden lg:h-[350px] rounded-lg'}/>

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
      <ServiceSectionUI/>
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
  const [newProduct, indexCatalog] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products-catalog?stock=new`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/main-page-categories/`)
  ]);

  return {
    props: {
      newProduct: newProduct?.data?.results,
      indexCatalog: indexCatalog.data,
    },
  };
}

