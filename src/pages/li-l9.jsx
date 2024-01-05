import React from 'react';
import {ConfigurationsSection, PositionCard, SectionTitle, SwiperSection} from "@/components";

const LiL9 = () => {
    return (
        <div>
            <div className={'relative'}>
                {/*<SwiperSection/>*/}

            </div>
            <section className={'section relative bg-dark py-32'}>
                <div className="container container-content section-item-space">
                    <SectionTitle styleBox={'text-center'} title={'Select the ideal Li L9 model for your family'} darkMode={true}
                    />
                    <div className="flex flex-wrap md:flex-nowrap gap-7 px-[5%] justify-center">
                        <PositionCard  gold={true}/>
                        <PositionCard />
                    </div>
                </div>
            </section>
            <section className={'section relative'}>
                <div className="container container-content section-item-space">
                    <SectionTitle styleBox={'text-center'} title={'Technical Specifications'}
                    />
                    <ConfigurationsSection/>

                </div>
            </section>
        </div>
    );
};

export default LiL9;