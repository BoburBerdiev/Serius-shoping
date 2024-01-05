import Image from 'next/image'
import { useState } from 'react'

const ImageUI = ({src , alt , imgStyle ,priority}) => {

    const [loading , setLoading] = useState(true)

    return (
        <>
            <Image
                src={src}
                alt={alt}
                layout="fill"
                className={` w-full h-full  ${imgStyle} duration-200 ease-in-out  ${
                    loading ? 'scale-110 blur-2xl grayscale':
                        'scale-100  blur-0 grayscale-0'
                } `}
                priority={priority || false}
                onLoad={() => setLoading(false)}
            />
        </>
    )
}

export default ImageUI