import {Fragment, useCallback, useEffect, useState} from "react";
import {RiSearch2Line} from "react-icons/ri";
import {AccordionUI, CheckBoxUI} from "@/components";


import {useDispatch, useSelector} from "react-redux";
import {selectBrand} from "@/slice/filterQuery";

const SearchBrand = ({formname }) => {
    const dispatch = useDispatch()
    const [selectItem , setSelectItem] = useState(null)
    const [searchBrand, setSearchBrand] = useState([])
    const { brands } = useSelector((state) => state.filterSlice);

    useEffect(() => {
        setSearchBrand(brands)
    } ,[brands])

    useEffect(() => {
        dispatch(selectBrand(selectItem))
        setSelectItem(null)
    } , [])
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
            <AccordionUI title={'Бренд'} style={' '}>
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
                        searchBrand?.map(brand => (
                            <Fragment
                                key={brand?.id}
                            >
                                <CheckBoxUI
                                    key={brand?.id}
                                    formname={formname}
                                    value={brand?.title_ru}
                                    title_ru={brand?.title_ru}
                                    title_uz={brand?.title_uz}
                                    style={"flex gap-3 items-center"}
                                    setSelectItem={setSelectItem}
                                />

                            </Fragment>

                        ))
                    }
                </div>
            </div>
            </AccordionUI>
        </>
    );
};

export default SearchBrand;