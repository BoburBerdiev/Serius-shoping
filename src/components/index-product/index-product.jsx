import React, {useEffect, useState} from 'react';
import {AddCardUI, CardUI, SectionTitleUI} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import apiService from "@/service/axois";
import {useQuery} from "react-query";
import {selectBrand, selectCatalog, selectStock, selectSubCatalog} from "@/slice/filterQuery";
import {useRouter} from "next/router";

const IndexProduct = ({list}) => {
    const {lang} = useSelector(state => state.langSlice)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSelectBanner = (value) => {
        if(value?.brand) {
            dispatch(selectBrand(value?.brand?.title))
        }else if(value?.catalog) {
            dispatch(selectCatalog(value?.catalog?.title))
        }else if(value?.stock?.stock_type) {
            dispatch(selectStock(value?.stock?.stock_type))
        }else if(value?.sub_category) {
            dispatch(selectSubCatalog(value?.sub_category?.title))
        }
    }


    const {data: products, refetch, isLoading} = useQuery(["index-product-filter", list?.title_uz], () =>
            apiService.getData(`products-catalog?index_category=${list?.title_uz}&page=${1}&page_size=10`), {
            enabled: false
        }
    );
    useEffect(() => {
        refetch()
    } , [list])

    return (
        <>
            {
                products?.count > 0 &&
                <div className={'pt-10 md:pt-20'}>
                    <SectionTitleUI title={lang === 'ru' ? list?.title_ru : list?.title_uz}/>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {
                            products?.count > 0 &&
                            products?.results?.map(product => (
                                <CardUI key={product?.id} imageArr={product?.images}
                                        slug={`product/${product?.slug}`}
                                        title_ru={product?.title_ru}
                                        title_uz={product?.title_uz}
                                        short_descriptions={product?.short_descriptions}
                                        price={product?.price}
                                        salePrice={product?.sales}
                                        id={product?.id}
                                />
                            ))
                        }

                        <AddCardUI onClick={() => handleSelectBanner(list)} src={list?.image} alt={list?.title_uz}/>
                    </div>

                </div>
            }


        </>
    );
};

export default IndexProduct;