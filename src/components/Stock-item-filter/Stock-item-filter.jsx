import {AccordionUI, CheckBoxUI} from "@/components";
import {useForm} from "react-hook-form";

const StockItemFilter = ({formname}) => {
    return (
        <AccordionUI title={'Акции'}>
            <CheckBoxUI formname={{...formname}}    value={'new'} title_ru={'Новинки'}  />
            <CheckBoxUI formname={{...formname}} value={'sales'}  title_ru={"Скидки"}  />
            <CheckBoxUI formname={{...formname}} value={'best_seller'}  title_ru={"Хиты продаж"}  />
            <CheckBoxUI formname={{...formname}} value={'daily_product'}  title_ru={"Товары дня"}  />
        </AccordionUI>
    );
};

export default StockItemFilter;