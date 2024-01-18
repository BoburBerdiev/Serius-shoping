import {AccordionUI, CheckBoxUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {Fragment, useEffect, useState} from "react";
import {selectFilterBrands, selectFilterPrice} from "@/slice/filter";
import {useDispatch} from "react-redux";
const CatalogItemFilter = ( {formname ,setIsChangeCatalog }) => {
    const dispatch = useDispatch()
    const [selectItem , setSelectItem] = useState(null)
    const { t  } = useTranslation();
    const { data: catalog , refetch:refetchCatalog , isLoading: isLoadingCatalog  } = useQuery("catalog", () =>
        apiService.getData("/categories/")
    );const { data: catalogAll , refetch:refetchCatalogAll , isLoading: isLoadingCatalogAll  } = useQuery("catalogAll", () =>
        apiService.getData("/categories/all-categories/")
    );

    useEffect(()=> {
        refetchCatalog()
        refetchCatalogAll()
    }, [])


    useEffect(() =>{
        if(selectItem?.value === 'all') {
            console.log(catalogAll?.brands)
            console.log(1)
            dispatch(selectFilterBrands(catalogAll?.brands))
            dispatch(selectFilterPrice([catalogAll?.min_price , catalogAll?.max_price]))
        }else {
            let product = catalog?.find(product => product?.title_uz === selectItem?.value)
            dispatch(selectFilterBrands(product?.brands))
            dispatch(selectFilterPrice([product?.min_price , product?.max_price]))
        }
        console.log(selectItem)
        setIsChangeCatalog(prev => !prev)
    } , [selectItem])

    return (
        <div>
            <AccordionUI title={t('navbar.catalog')} >
                    <CheckBoxUI  formname={{...formname}} title_ru={'Все категории'} title_uz={'Barcha kategoriya'} value={'all'}  setSelectItem={setSelectItem}  />
                {
                    catalog?.map(item => (
                        <Fragment key={item?.id}>
                            <CheckBoxUI formname={{...formname}} title_ru={item?.title_ru} value={item?.title_uz} setSelectItem={setSelectItem}  />
                        </Fragment>
                    ))
                }
            </AccordionUI>
        </div>
    );
};

export default CatalogItemFilter;