import {Fragment, useCallback, useEffect, useState} from "react";
import {RiSearch2Line} from "react-icons/ri";
import {AccordionUI, CheckBoxUI} from "@/components";


import {useDispatch, useSelector} from "react-redux";
import {selectBrand} from "@/slice/filterQuery";
import {selectFilterPrice} from "@/slice/filter";
import {useTranslation} from "react-i18next";

const SearchBrand = ({formname }) => {
    const dispatch = useDispatch()
    const [selectItem , setSelectItem] = useState(null)
    const [searchBrand, setSearchBrand] = useState([])
    const { brands } = useSelector((state) => state.filterSlice);
    const {t}=useTranslation()


    useEffect(() => {
        setSearchBrand(brands)
    } ,[brands])


    useEffect(() => {
        if (selectItem){
            dispatch(selectBrand(selectItem?.value))
            let brand = brands?.find(product => product?.title_uz === selectItem?.value)
            // setSelectItem(null)
            dispatch(selectFilterPrice([brand?.min_price,brand?.max_price
            ]))
        }

    } , [selectItem])
    const onChangeBrandName=(e)=>{
        const value=e.target.value
        const filterData = brands?.filter(
            (data) =>
                data?.title_ru.toLowerCase().includes(value.toLowerCase()) ||
                data?.title_uz.toLowerCase().includes(value.toLowerCase()),
        );
            return  setSearchBrand(filterData)
    }

    return (
        <>
            <AccordionUI title={t('filter.brand')} style={' '}>
            <div className="relative mt-5">
                <input
                    type="text"
                    id="search"
                    onChange={onChangeBrandName}
                    className="border border-borderGrey w-full  px-3.5 py-3 outline-none text-darkBlue rounded-lg"
                    placeholder="Поиск"
                />
                <label htmlFor="search">
                    <RiSearch2Line className="ri-search-line absolute -translate-y-[50%] top-[50%] right-2 text-primary" />
                </label>
            </div>
            <div className="max-h-[192px] overflow-y-scroll w-full mt-6 catalog-scrollbar">
                <div className="flex flex-col gap-3 text-textColor ">
                    {
                        searchBrand?.map(brand =>{
                            return (
                            <Fragment
                                key={brand?.id}
                            >
                                <CheckBoxUI
                                    isRadio={true}
                                    key={brand?.id}
                                    formname={formname}
                                    value={brand?.title_ru}
                                    title_ru={brand?.title_ru}
                                    title_uz={brand?.title_uz}
                                    style={"flex gap-3 items-center"}
                                    setSelectItem={setSelectItem}
                                />

                            </Fragment>

                        )})
                    }
                </div>
            </div>
            </AccordionUI>
        </>
    );
};

export default SearchBrand;