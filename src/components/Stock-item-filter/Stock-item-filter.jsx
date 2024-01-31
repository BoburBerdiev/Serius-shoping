import {AccordionUI, CheckBoxUI} from "@/components";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {selectStock} from "@/slice/filterQuery";
import {useQuery} from "react-query";
import apiService from "@/service/axois";
import {useTranslation} from "react-i18next";

const StockItemFilter = ({formname,setValue}) => {
    const [selectItem, setSelectItem] = useState(null)
    const dispatch = useDispatch()
const {t}=useTranslation()

    const {
        data: stocks,
        refetch: refetchStock,
        isSuccess
    } = useQuery("stock", () =>
            apiService.getData("/stocks/"),
        {
            enabled: false
        }
    );

    useEffect(() => {
        refetchStock()
    }, [])

    useEffect(() => {
        if (selectItem) {
            const data=selectItem.value
                setValue('stock',data)

        }
    }, [selectItem])
    return (
        <AccordionUI title={t('filter.stock')}>
            <CheckBoxUI
                isRadio={false}
                formname={{...formname}}
                value={'new'}
                title_ru={'Новинки'}
                title_uz={'Yangi'}
                setSelectItem={setSelectItem}/>
            {
                stocks?.map((stock) => (
                    <CheckBoxUI
                        isRadio={false}
                        key={stock.id}
                        formname={{...formname}}
                        value={stock.title_uz}
                        title_ru={stock.title_ru}
                        setSelectItem={setSelectItem}
                        title_uz={stock.title_uz}/>
                ))
            }

        </AccordionUI>
    );
};

export default StockItemFilter;