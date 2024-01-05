

const Video = ({style}) => {
    return (
        <div className={`${style}`}>
            <video
                id="my-player"
                className={`video-js w-full h-full overflow-hidden`}
                autoPlay={true}
                preload="auto"
                loop={true}
                muted
                poster="//vjs.zencdn.net/v/oceans.png"

            >
                <source className={'w-full h-full '}
                        src="https://p.ampmake.com/lilibrary/sd/015560690536076/5e38db37-7ae5-4129-bdbe-4bbfa66bf6d0.mp4"
                        type="video/mp4"></source>
                <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">
                        supports HTML5 video
                    </a>
                </p>
            </video>
        </div>
    );
};

export default Video;