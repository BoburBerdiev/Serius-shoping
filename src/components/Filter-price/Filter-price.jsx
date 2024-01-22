import {  useEffect, useState } from "react";
import { useSelector} from "react-redux";
import Slider from "react-slider";
import {AccordionUI} from "@/components";

const FilterPrice = ({minMaxValue, setMinMaxValue}) => {
    const [minMax, setMinMax] = useState([100, 220000]);
    const {priceData} = useSelector(state => state.filterSlice)

    const onChangeRange = (newValues) => {
        setMinMaxValue(newValues);
    };
 useEffect(() => {
        if (priceData?.length > 0) {
            setMinMax([priceData[0], priceData[1]]);
            setMinMaxValue([priceData[0], priceData[1]]);
        }
    }, [priceData]);
    return (
        <AccordionUI title={'Цена'}>
        <div className="mx-1 py-2 lg:py-3">
            <div  className={`range`}>
                <div className=" range filter-dropdown-content">
                    <div className="relative range-input">
                        <Slider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            value={minMaxValue}
                            max={minMax[1]}
                            min={minMax[0]}
                            onChange={onChangeRange}
                        />
                    </div>
                    <div className="flex items-start justify-between gap-3 mt-4 text-sm leading-normal range-price text-textColor inter-normal">
                        <div className="flex w-1/2 h-full ">
                            <div className="w-full ">
                                {minMaxValue[0]?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')}
                            </div>
                        </div>
                        <div className="flex items-end w-1/2 h-full ">
                            <div className="w-full text-end ">
                                {minMaxValue[1]?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </AccordionUI>


    )}
export default FilterPrice;
