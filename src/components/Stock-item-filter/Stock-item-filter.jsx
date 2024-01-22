import {AccordionUI, CheckBoxUI} from "@/components";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {selectStock} from "@/slice/filterQuery";
const StockItemFilter = ({formname}) => {
    const [selectItem , setSelectItem] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(selectStock(selectItem))
    } , [selectItem])
    return (
        <AccordionUI title={'Акции'}>
            <CheckBoxUI formname={{...formname}}    value={'new'} title_ru={'Новинки'} setSelectItem={setSelectItem}  />
            <CheckBoxUI formname={{...formname}} value={'sales'}  title_ru={"Скидки"}  setSelectItem={setSelectItem} />
            <CheckBoxUI formname={{...formname}} value={'best_seller'}  title_ru={"Хиты продаж"} setSelectItem={setSelectItem}  />
            <CheckBoxUI formname={{...formname}} value={'daily_product'}  title_ru={"Товары дня"} setSelectItem={setSelectItem}  />
        </AccordionUI>
    );
};

export default StockItemFilter;