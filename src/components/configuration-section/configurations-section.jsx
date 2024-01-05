import React from 'react';
import {ImageUI} from "@/components";


const ConfigurationsSection = () => {
    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
           <div className={'w-full h-[300px] md:h-[350px] relative'}>
               <ImageUI src={'/L9-Max-PC.png'} imgStyle={'object-contain'} />
           </div>
            <div className={''}>
                <div className={'grid grid-cols-2'}>
                    <div className={'text-center text-lg md:text-xl p-2 border-b-2 border-black'}>
                        Li L9 Max
                    </div>
                    <div className={'text-center text-lg md:text-xl p-2 border-b-2 border-curretWhiteText'}>
                        Li L9 Pro
                    </div>

                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">

                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h6 className={'text-[#999] text-sm md:text-base'}>Interaction System</h6>
                        <p className={' text-base md:text-xl '}>
                            5-Screen 3D Spatial Interaction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigurationsSection;