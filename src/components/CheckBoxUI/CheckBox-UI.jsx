import {useState} from "react";
import {useSelector} from "react-redux";

const CheckBoxUI = ({title_ru, title_uz, value, style, formname, setSelectItem,isRadio}) => {
    const {lang} = useSelector((state) => state.langSlice);

    const changleInput = (e) => {
        if (setSelectItem) {
            setSelectItem(e.target)
        }
    }

    return (
        <div className={`${style}  flex items-center text-sm lg:text-base text-textColor gap-x-2`}>
            <div className="inline-flex items-center">

                <input
                    {...formname}
                    type={`${isRadio ? 'radio' :'checkbox'}`}
                    className='w-4 h-4 border border-borderGrey rounded accent-darkBlue/80'
                    id={title_uz}
                    value={value}
                    onChange={e => changleInput(e)}
                />

            </div>
            <label htmlFor={title_uz} className="space-y-2 cursor-pointer">
                  <span className={'text-wrap'}>
                  {
                      lang === 'ru' ? title_ru : title_uz
                  }
                  </span>
            </label>


        </div>
    );
};

export default CheckBoxUI;