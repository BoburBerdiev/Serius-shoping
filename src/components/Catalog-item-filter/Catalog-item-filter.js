import {AccordionUI, CheckBoxUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {Fragment, useEffect, useState} from "react";
import {
    selectFilterBrands,
    selectFilterCatalog,
    selectFilterPrice,
    selectFilterPriceValue,
    selectFilterSubCategory
} from "@/slice/filter";
import {useDispatch, useSelector} from "react-redux";
import filterQuerySlice, {selectSubCatalog, selectCatalog, selectAllQuery, selectBrand} from "@/slice/filterQuery";

const CatalogItemFilter = ({formname, resetField, setPage, setValue}) => {
    const dispatch = useDispatch()
    const [selectItem, setSelectItem] = useState(null)
    const {t} = useTranslation();
    const {subCategory} = useSelector(state => state.filterSlice)
    const {catalog, subCatalog, brand, stock} = useSelector(state => state.filterQuerySlice)


    const {
        data: catalogAll,
        refetch: refetchCatalogAll
    } = useQuery("catalogAll", () =>
            apiService.getData("/categories/all-categories/"),
        {
            enabled: false
        }
    );


    const selectedBrandPrice = (catalog) => {
        dispatch(selectFilterBrands(catalog?.brands))
        dispatch(selectFilterPrice([catalog?.min_price, catalog?.max_price]))
    }

    useEffect(() => {
        refetchCatalogAll()
    }, [])


    useEffect(() => {
        if (subCategory) {
            let product = catalogAll?.all_catalog?.find(product => product?.title_uz === subCategory?.title)
            dispatch(selectSubCatalog(subCategory?.subTitle))
            dispatch(selectCatalog(subCategory?.title))

            // selectedBrandPrice(product)
            setValue('sub_catalog', subCategory?.subTitle)
            setValue('catalog', subCategory?.title)
        }
    }, [subCategory])


    useEffect(() => {
        if (selectItem?.value) {
            dispatch(selectFilterCatalog(selectItem?.value))
            dispatch(selectCatalog(selectItem?.value))

            if (selectItem?.value === 'all') {
                selectedBrandPrice(catalogAll)
            } else {
                dispatch(selectBrand(""))
                resetField("brand")
                let product = catalogAll?.all_catalog?.find(product => product?.title_uz === selectItem?.value)

                selectedBrandPrice(product)
            }
            dispatch(selectSubCatalog(''))
            dispatch(selectFilterSubCategory(null))
        }


    }, [selectItem])


    useEffect(() => {


        if (catalog !== "" || subCatalog !== "" || brand !== "" || stock !== "") {
            if (catalog !== "") {
                const data = catalog.split("=")[1]
                setValue("catalog", data)
                let product = catalogAll?.all_catalog?.find(product => product?.title_uz === data)
                selectedBrandPrice(product)
            }

            if (subCatalog !== "") {
                const data = catalog.split("=")[1]
                setValue("sub_catalog", subCatalog.split("=")[1])
                let product = catalogAll?.all_catalog?.find(product => product?.title_uz === data)
                setPage(1)
                // dispatch(selectFilterPriceValue([0, 0]))
                selectedBrandPrice(product)
                dispatch(selectAllQuery())
            }
            if (brand !== "") {
                setValue("brand", brand.split("=")[1])
            }
            if (stock !== "") {
                setValue("stock", stock.split("=")[1])
            }

        }else {
            setValue("catalog", 'all')

        }
    }, [catalog, subCatalog, brand, stock, catalogAll])

    useEffect(() => {
        if (catalog !== "" || subCatalog !== "" || brand !== "" || stock !== "") {
            dispatch(selectAllQuery())
        }
    }, []);


    return (
        <div>
            <AccordionUI title={t('navbar.catalog')}>
                <div className={'max-h-[192px] overflow-y-scroll w-full space-y-2'}>
                    <CheckBoxUI isRadio={true} formname={{...formname}} title_ru={'Все категории'} title_uz={'Barcha kategoriya'}
                                value={'all'} setSelectItem={setSelectItem}/>
                    {
                        catalogAll?.all_catalog?.map(item => (
                            <Fragment key={item?.id}>
                                <CheckBoxUI
                                    isRadio={true}
                                    formname={{...formname}} title_ru={item?.title_ru}
                                    title_uz={item?.title_uz}
                                    value={item?.title_uz}
                                    setSelectItem={setSelectItem}/>
                            </Fragment>
                        ))
                    }
                </div>
            </AccordionUI>
        </div>
    );
};

export default CatalogItemFilter;