import {AccordionUI, CheckBoxUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {Fragment, useEffect, useState} from "react";
import {selectFilterBrands, selectFilterCatalog, selectFilterPrice} from "@/slice/filter";
import {useDispatch, useSelector} from "react-redux";
import {selectSubCatalog , selectCatalog} from "@/slice/filterQuery";
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


    useEffect(() => {
        setValue('catalog', subCategory?.title )
        console.log(subCategory)
        let product = catalogAll?.all_catalog?.find(product => product?.title_uz === subCategory?.title)
        dispatch(selectFilterBrands(product?.brands))
        dispatch(selectSubCatalog(subCategory?.subTitle ))
        dispatch(selectCatalog(subCategory?.title ))
        dispatch(selectFilterPrice([product?.min_price , product?.max_price]))
        setValue('sub_catalog', subCategory?.subTitle)
    } , [subCategory])

    useEffect(() =>{
        dispatch(selectFilterCatalog(selectItem?.value))
        dispatch(selectCatalog(selectItem?.value))
        if(selectItem?.value === 'all') {
            dispatch(selectFilterBrands(catalogAll?.brands))
            dispatch(selectFilterPrice([catalogAll?.min_price , catalogAll?.max_price]))
        }else {
            let product = catalogAll?.all_catalog?.find(product => product?.title_uz === selectItem?.value)
            dispatch(selectFilterBrands(product?.brands))
            dispatch(selectFilterPrice([product?.min_price , product?.max_price]))
        }
        setIsChangeCatalog(prev => !prev)
    } , [selectItem])
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