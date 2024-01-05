import React from 'react';

const PositionCard = ({gold}) => {

    return (
        // bg-gradient-to-t from-161616 via-transparent to-353535
        // background-image: linear-gradient(180deg,#161616 -67.47%,#353535);
        <div className={'w-full sm:max-w-[28rem] py-8 px-7 rounded-2xl   bg-gradient-to-t from-[#353535] to-[100%] to-[#161616] text-darkText space-y-7 md:space-y-20'}>
            <div className={'space-y-3 md:space-y-4'}>
                <h4 className={`text-3xl md:text-5xl ${gold ? 'from-[#cfa574] ' : 'from-[#919191]' } bg-gradient-to-r to-[#fdf7f1] bg-clip-text text-transparent text-[34px] leading-[45px] font-semibold`}>
                    Li L9 Pro
                </h4>
                <ul className={' text-base md:text-xl text-[#bababa]'}>
                    <li>
                            Flagship AI
                    </li>
                    <li>
                        Manufacturer's Suggested Retail Price: RMB 459,800
                    </li>
                </ul>
            </div>
            <div>
                <ul className={'space-y-2 md:space-y-5 text-[#bababa] font-medium '}>
                    <li className={' space-y-1 md:space-y-3'}>
                        <p className={'text-sm md:text-base'}>
                            Li Pilot Assistance
                        </p>
                        <p className={`text-xl bg-gradient-to-r ${gold ? 'from-[#cfa574] ' : 'from-[#919191]' } bg-clip-text text-transparent md:text-[34px]  md:leading-[36px]`}>
                            AD Max
                        </p>
                    </li>
                    <li className={' space-y-1 md:space-y-3'}>
                        <p className={'text-sm md:text-base '}>
                            Li Smart Space
                        </p>
                        <p className={`text-xl bg-gradient-to-r ${gold ? 'from-[#cfa574] ' : 'from-[#919191]' } bg-clip-text text-transparent md:text-[34px] md:leading-[36px]`}>
                            SS Max+
                        </p>
                    </li>
                    <li className={' space-y-1 md:space-y-3'}>
                        <p className={'text-sm md:text-base'}>
                            Other Configurations
                        </p>
                        <p className={`text-xl bg-gradient-to-r ${gold ? 'from-[#cfa574] ' : 'from-[#919191]' } bg-clip-text to-[130%] text-transparent md:text-[34px] md:leading-[40px]`}>
                            Comes standard with 100 flagship configurations
                        </p>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default PositionCard;