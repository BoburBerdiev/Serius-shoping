import {AccordionUI, CheckBoxUI} from "@/components";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {selectStock} from "@/slice/filterQuery";
import {useQuery} from "react-query";
import apiService from "@/service/axois";

const StockItemFilter = ({formname}) => {
    const [selectItem, setSelectItem] = useState(null)
    const dispatch = useDispatch()


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
            dispatch(selectStock(selectItem?.value))
        } else {
            dispatch(selectStock(""))
        }
    }, [selectItem])
    return (
        <AccordionUI title={'Акции'}>
            <CheckBoxUI formname={{...formname}} value={'new'}
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