import {ImageUI, IndexBanner, SectionTitle, Video} from "@/components";
import {BsCaretRightFill} from "react-icons/bs";


const liMega = ( ) => {


    return (

        <div className="relative bg-black">
            <section className={
                'w-full h-screen'
            }>
                <IndexBanner bgRes={'/mega.jpg'} bg={'/mega-1920.jpg'} logoImage={'/mega-eng.png'} carHeader={true}/>
            </section>
            <section className={'relative section-car '}>
                <div className={'container  container-content'}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={'Li MEGA, The greatest happiness!'}
                                          subSmallTitle={'Li MEGA launch will be officially released on March 1, 2024.'}/>
                            <button className={'flex gap-x-2  items-center  mt-5'}>

                                <span>
                                Watch Video
                                </span>
                                <span>
                                    <BsCaretRightFill/>
                                </span>
                            </button>
                        </div>
                        <div className={'col-span-5 '}>
                            <Video style={'w-full aspect-video '}/>

                        </div>

                    </div>

                </div>
            </section>
            <section className={'relative section-car  border-t border-white/50 md:border-0 '}>
                <div className={'container container-content '}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div
                            className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3 section-item-children-space'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'}
                                          title={'Redefining the Drag Coefficient and Energy Consumption of MPVs'}
                                          subSmallTitle={'MEGA shatters the records of production MPVs in the drag coefficient*. A reduction of 0.01 in the drag coefficient increases the CLTC range by 7 km. Its exceptionally low drag coefficient, coupled with an advanced high-voltage battery electric platform and unparalleled vehicle integration efficiency, achieves remarkably low energy consumption.'}/>

                            <div className={'flex  divide-x'}>
                                <div className={'flex flex-col  justify-between gap-2 pl-0  px-[5%]'}>
                                    <p className={'text-lg md:text-lg text-curretWhiteText'}>
                                        Drag coefficient
                                    </p>
                                    <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                                        0.215*
                                    </p>
                                </div>
                                <div className={'flex flex-col  items-end text-left px-[5%]'}>
                                    <div className={'flex flex-col justify-between gap-2'}>
                                        <p className={'text-lg md:text-lg text-curretWhiteText'}>
                                            CLTC grid-end energy consumption
                                        </p>
                                        <p className={'text-xl lg:text-2xl  xl:text-3xl 2xl:text-4xl text-currentGold font-semibold'}>
                                            15.9 kWh/100 km*
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-span-5 '}>
                            <Video style={'w-full aspect-video '}/>
                            <div className={'space-y-1 text-darkText text-xs mt-2'}>
                                <p >
                                    * Based on the statistical results of mass-produced vehicle public information (as
                                    of November 7, 2023) calculated by the Li Auto Laboratory.
                                </p>
                                <p>
                                    * Based on the CAERI aerodynamic wind tunnel test results.

                                </p>
                                <p>
                                    * Based on the results of actual tests conducted by Li Auto. The actual battery life
                                    and energy consumption are subject to personal driving habits, seasons, and other
                                    factors.

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={'section-car  border-t border-white/50 md:border-0'}>
                <div className={'container container-content '}>
                    <div className={'grid grid-cols-5 section-item-space'}>
                        <div className={'col-span-5  lg:col-start-[2] md:col-span-4 lg:col-span-3'}>
                            <SectionTitle darkMode={true} styleBox={'text-start'} title={'Stay tuned for more "redefinitions".'}
                                          subSmallTitle={'Unlock more'} subTitleTop={true}/>

                        </div>
                        <div className={'col-span-5  md:overflow-x-hidden overflow-x-scroll'}>
                            <div
                                className=" grid grid-cols-3 gap-2 w-[300%] md:w-full">
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                                <div className={'rounded-lg aspect-video overflow-hidden relative'}>
                                    <ImageUI src={'/mega-item-in.jpg'}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default liMega;