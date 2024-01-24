import {AccordionUI, CheckBoxUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {Fragment, useEffect, useState} from "react";
import {selectFilterBrands, selectFilterCatalog, selectFilterPrice} from "@/slice/filter";
import {useDispatch, useSelector} from "react-redux";
import {selectSubCatalog, selectCatalog, selectAllQuery} from "@/slice/filterQuery";
const CatalogItemFilter = ( {formname ,setIsChangeCatalog , setValue }) => {
    const dispatch = useDispatch()
    const [selectItem , setSelectItem] = useState(null)
    const { t  } = useTranslation();
    const {subCategory} = useSelector(state => state.filterSlice)
    const { data: catalogAll , refetch:refetchCatalogAll , isLoading: isLoadingCatalogAll  } = useQuery("catalogAll", () =>
        apiService.getData("/categories/all-categories/")
    );

    useEffect(()=> {
        refetchCatalogAll()
    }, [])

    const selectedBrandPrice = (catalog) => {
        dispatch(selectFilterBrands(catalog?.brands))
        dispatch(selectFilterPrice([catalog?.min_price , catalog?.max_price]))
    }

    useEffect(() => {
        let product = catalogAll?.all_catalog?.find(product => product?.title_uz === subCategory?.title)
        dispatch(selectSubCatalog(subCategory?.subTitle ))
        dispatch(selectCatalog(subCategory?.title ))
        selectedBrandPrice(product)
        setValue('sub_catalog', subCategory?.subTitle)
        setValue('catalog', subCategory?.title )
    } , [subCategory])

    useEffect(() => {
        setValue('catalog', subCategory?.title )
        console.log(subCategory)
        let product = catalogAll?.all_catalog?.find(product => product?.title_uz === subCategory?.title)
        dispatch(selectSubCatalog(subCategory?.subTitle ))
        dispatch(selectCatalog(subCategory?.title ))
        dispatch(selectFilterBrands(product?.brands))
        dispatch(selectFilterPrice([product?.min_price , product?.max_price]))
        setValue('sub_catalog', subCategory?.subTitle)
    } , [subCategory])

    useEffect(() =>{
        dispatch(selectFilterCatalog(selectItem?.value))
        dispatch(selectCatalog(selectItem?.value))
        dispatch(selectFilterCatalog(selectItem?.value))
        if(selectItem?.value === 'all') {
            dispatch(selectFilterBrands(catalogAll?.brands))
            dispatch(selectFilterPrice([catalogAll?.min_price , catalogAll?.max_price]))
            selectedBrandPrice(catalogAll)
        }else {
            let product = catalogAll?.all_catalog?.find(product => product?.title_uz === selectItem?.value)
            dispatch(selectFilterBrands(product?.brands))
            dispatch(selectFilterPrice([product?.min_price , product?.max_price]))
            selectedBrandPrice(product)
        }
        dispatch(selectSubCatalog(''))
        dispatch(selectCatalog(selectItem?.value))
        dispatch(selectAllQuery())
        setIsChangeCatalog(prev => !prev)
    } , [selectItem])


    useEffect(() => {
        setValue('catalog', 'all')
        selectedBrandPrice(catalogAll)
    } , [])
    return (
        <div>
            <AccordionUI title={t('navbar.catalog')} >
                <>
                        <CheckBoxUI  formname={{...formname}} title_ru={'Все категории'} title_uz={'Barcha kategoriya'} value={'all'}  setSelectItem={setSelectItem}  />
                    {
                        catalogAll?.all_catalog?.map(item => (
                            <Fragment key={item?.id}>
                                <CheckBoxUI formname={{...formname}} title_ru={item?.title_ru} value={item?.title_uz} setSelectItem={setSelectItem}  />
                            </Fragment>
                        ))
                    }
                </>
            </AccordionUI>
        </div>
    );
};

export default CatalogItemFilter;