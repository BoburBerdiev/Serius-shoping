import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slider";
import {AccordionUI} from "@/components";
import { selectFilterPriceValue} from "@/slice/filter";
import {priceView} from "@/helper";

const FilterPrice = () => {
    const {priceData,priceDataValue} = useSelector(state => state.filterSlice)
    const dispatch=useDispatch()
    const onChangeRange = (newValues) => {
        dispatch(selectFilterPriceValue(newValues))
    };
    useEffect(() => {
        if (priceData?.length > 0) {
            // setMinMax([priceData[0], priceData[1]]);
            // dispatch(selectFilterPriceValue([priceData[0], priceData[1]]))
        }
    }, [priceData]);
    console.log(priceData)
    return (
        <AccordionUI title={'Цена'}>
            <div className="mx-1 py-2 lg:py-3">
                <div className={`range`}>
                    <div className=" range filter-dropdown-content">
                        <div className="relative range-input">
                            <Slider
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                value={priceDataValue}
                                max={priceData[1]}
                                min={priceData[0]}
                                onChange={onChangeRange}
                            />
                        </div>
                        <div
                            className="flex items-start justify-between gap-3 mt-4 text-sm leading-normal range-price text-textColor inter-normal">
                            <div className="flex w-1/2 h-full ">
                                <div className="w-full ">
                                    {priceView(priceDataValue[0] ?priceDataValue[0]: priceData[0])}
                                </div>
                            </div>
                            <div className="flex items-end w-1/2 h-full ">
                                <div className="w-full text-end ">
                                    {priceView(priceDataValue[1] ? priceDataValue[1] : priceData[1] )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AccordionUI>


    )
}
export default FilterPrice;
